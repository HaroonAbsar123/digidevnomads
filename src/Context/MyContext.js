import { createContext } from "react";
import Appleimage from '../Assets/SellDevice/Phones/apple.jpg';
import Samsungimage from '../Assets/SellDevice/Phones/samsung.jpg';
import Googleimage from '../Assets/SellDevice/Phones/google.jpg';
import { useState } from "react";

// PHONES
import Iphone from "../Assets/SellDevice/Series/Phones/Apple/Iphones/iphone15pro.png";
import SamsungNSeries from "../Assets/SellDevice/Series/Phones/Samsung/NoteSeries/galaxynoteseries.png";
import SamsungSSeries from "../Assets/SellDevice/Series/Phones/Samsung/SSeries/sseries.png";
import SamsungZSeries from "../Assets/SellDevice/Series/Phones/Samsung/zseries/zseries.png";
import GooglePixel from "../Assets/SellDevice/Series/Phones/Google/Pixel/googlepixel.png"


// TABLETS
import Ipad from "../Assets/SellDevice/Series/Tablets/Apple/Ipad/Ipad.png"
import IpadAir from "../Assets/SellDevice/Series/Tablets/Apple/IpadAir/IpadAir.png"
import IpadMini from "../Assets/SellDevice/Series/Tablets/Apple/IpadMini/IpadMini.png"
import IpadPro from "../Assets/SellDevice/Series/Tablets/Apple/IpadPro/IpadPro.png"
import MagicKeyboardIpad from "../Assets/SellDevice/Series/Tablets/Apple/MagicKeyboardIpad/MagicKeyboardIpad.png"


import PixelTab from "../Assets/SellDevice/Series/Tablets/Google/PixelTab/PixelTab.png"
import SSeriesTab from "../Assets/SellDevice/Series/Tablets/Samsung/SSeries/SSeries.png"

// LAPTOPS
import Macbook from '../Assets/SellDevice/Series/Laptops/Apple/Macbook/Macbook.png';
import MacbookAir from '../Assets/SellDevice/Series/Laptops/Apple/MacbookAir/MacbookAir.png';
import MacbookPro from '../Assets/SellDevice/Series/Laptops/Apple/MacbookPro/MacbookPro.png';

// WATCHES
import WatchSeries from '../Assets/SellDevice/Series/Watches/Apple/Series/Series.png';
import WatchUltra from '../Assets/SellDevice/Series/Watches/Apple/Ultra/Ultra.png';

// VISION PRO
import VisionPro from '../Assets/SellDevice/Series/VisionPro/VisionPro.png';


// IPHONES
import iphone15promax from '../Assets/SellDevice/Phones/iphone15promax.png';
import iphone15pro from '../Assets/SellDevice/Phones/iphone15pro.png';
import iphone15plus from '../Assets/SellDevice/Phones/iphone15plus.png';
import iphone15 from '../Assets/SellDevice/Phones/iphone15.png';
import iphone14promax from '../Assets/SellDevice/Phones/iphone14promax.png';

import { db } from "../firebase";
import { collection, addDoc, updateDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const MyContext=createContext({});

export const MyContextProvider=({children}) => {

    const [userDetails, setUserDetails] = useState({});

    const categories = {
        phones: [
            {
                brand: "apple",
                image: Appleimage,
                title: "Apple",
                series: [
                    {
                        name: "Iphone",
                        image: Iphone,
                        path: "iphone"
                    }
                ]
            },
            {
                brand: "samsung",
                image: Samsungimage,
                title: "Samsung",
                series: [
                    {
                        name: "Samsung Note Series",
                        image: SamsungNSeries,
                        path: "nseries"
                    },
                    {
                        name: "Samsung S Series",
                        image: SamsungSSeries,
                        path: "sseries"
                    },
                    {
                        name: "Samsung Z Series",
                        image: SamsungZSeries,
                        path: "zseries"
                    }
                ]
            },
            {
                brand: "google",
                image: Googleimage,
                title: "Google",
                series: [
                    {
                        name: "Google Pixel",
                        image: GooglePixel,
                        path: "pixel"
                    }
                ]
            }
        ],
        tablets: [
            {
                brand: "apple",
                image: Appleimage,
                title: "Apple",
                series: [
                    {
                        name: "Ipad",
                        image: Ipad,
                        path: "ipad"
                    },
                    {
                        name: "Ipad Mini",
                        image: IpadMini,
                        path: "ipadmini"
                    },
                    {
                        name: "Ipad Air",
                        image: IpadAir,
                        path: "ipadair"
                    },
                    {
                        name: "Ipad Pro",
                        image: IpadPro,
                        path: "ipadpro"
                    },
                    {
                        name: "Magic Keyboard Ipad",
                        image: MagicKeyboardIpad,
                        path: "magickeyboardipad"
                    },
                ]
            },
            {
                brand: "samsung",
                image: Samsungimage,
                title: "Samsung",
                series: [
                    {
                        name: "Galaxy Tab S Series",
                        image: SSeriesTab,
                        path: "galaxytabsseries"
                    },
                ]
            },
            {
                brand: "google",
                image: Googleimage,
                title: "Google",
                series: [
                    {
                        name: "Google Pixel Tabs",
                        image: PixelTab,
                        path: "googlepixeltabs"
                    },
                ]
            }
        ],
        laptops: [
            {
                brand: "apple",
                image: Appleimage,
                title: "Apple",
                series: [
                    {
                        name: "Macbook Pro",
                        image: MacbookPro,
                        path: "macbookpro"
                    },
                    {
                        name: "Macbook",
                        image: Macbook,
                        path: "macbook"
                    },
                    {
                        name: "Macbook Air",
                        image: MacbookAir,
                        path: "macbookair"
                    }
                ]
            },
            // {
            //     brand: "samsung",
            //     image: Samsungimage,
            //     title: "Samsung"
            // },
            // {
            //     brand: "google",
            //     image: Googleimage,
            //     title: "Google"
            // }
        ],
        watches: [
            {
                brand: "apple",
                image: Appleimage,
                title: "Apple",
                series: [
                    {
                        name: "Apple Watch Series",
                        image: WatchSeries,
                        path: "watchseries"
                    },
                    {
                        name: "Apple Watch Ultra",
                        image: WatchUltra,
                        path: "watchultra"
                    },
                ]
            },
            // {
            //     brand: "samsung",
            //     image: Samsungimage,
            //     title: "Samsung"
            // },
            // {
            //     brand: "google",
            //     image: Googleimage,
            //     title: "Google"
            // }
        ],
        visionpro: [
            {
                brand: "apple",
                image: Appleimage,
                title: "Apple",
                series: [
                    {
                        name: "Apple Vision PRO",
                        image: VisionPro,
                        path: "visionpro"
                    },
                ]
            }
        ],
        // tvs: [
        //     {
        //         brand: "apple",
        //         image: Appleimage,
        //         title: "Apple"
        //     },
        //     {
        //         brand: "samsung",
        //         image: Samsungimage,
        //         title: "Samsung"
        //     },
        //     {
        //         brand: "google",
        //         image: Googleimage,
        //         title: "Google"
        //     }
        // ]
    };


    const iphones = [
        {
            id: 123,
            brand: "apple",
            category: "phones",
            title: "Iphone 15 pro max",
            path: "iphone-15-pro-max",
            series: "Iphone",
            image: iphone15promax,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                }
            ]
        },
        {
            id: 456,
            brand: "apple",
            category: "phones",
            title: "Iphone 15 pro",
            path: "iphone-15-pro",
            image: iphone15pro,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                }
            ]
        },
        {
            id: 789,
            brand: "apple",
            category: "phones",
            title: "Iphone 15 plus",
            path: "iphone-15-plus",
            image: iphone15plus,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                }
            ]
        },
        {
            id: 2,
            brand: "apple",
            category: "phones",
            title: "Iphone 15",
            path: "iphone-15",
            image: iphone15,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                }
            ]
        },
        {
            id: 1,
            brand: "apple",
            category: "phones",
            title: "Iphone 14 pro max",
            path: "iphone-14-pro-max",
            image: iphone14promax,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 950
                                },
                                {
                                    storage: '512GB',
                                    price: 1000
                                },
                                {
                                    storage: '1TB',
                                    price: 1025
                                }
                            ]
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ],
                            locked: [
                                {
                                    storage: '256GB',
                                    price: 650
                                },
                                {
                                    storage: '512GB',
                                    price: 700
                                },
                                {
                                    storage: '1TB',
                                    price: 725
                                }
                            ]
                        },
                        {
                            carrier: 'Sprint',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'T-Mobile',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 975
                                },
                                {
                                    storage: '512GB',
                                    price: 1025
                                },
                                {
                                    storage: '1TB',
                                    price: 1050
                                }
                            ]
                        },
                        {
                            carrier: 'Unlocked',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 1050
                                },
                                {
                                    storage: '512GB',
                                    price: 1100
                                },
                                {
                                    storage: '1TB',
                                    price: 1150
                                }
                            ]
                        },
                        {
                            carrier: 'Other Carrier',
                            storages: [
                                {
                                    storage: '256GB',
                                    price: 850
                                },
                                {
                                    storage: '512GB',
                                    price: 900
                                },
                                {
                                    storage: '1TB',
                                    price: 925
                                }
                            ]
                        }

                    ]
                }
            ]
        }
    ]

    const products=[
        // PHONES
        {
            id: 1,
            brand: "apple",
            category: "phones",
            title: "Iphone 15 pro max",
            path: "iphone-15-pro-max",
            series: "iphone",
            image: iphone15promax,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                }
            ]
        },
        {
            id: 2,
            brand: "samsung",
            category: "phones",
            title: "Samsung Note 20",
            path: "samsung-note-20",
            series: "nseries",
            image: SamsungNSeries,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                }
            ]
        },
        {
            id: 2,
            brand: "samsung",
            category: "phones",
            title: "Samsung S20",
            path: "samsung-s20",
            series: "sseries",
            image: SamsungSSeries,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                }
            ]
        },
        {
            id: 2,
            brand: "samsung",
            category: "phones",
            title: "Samsung Z Fold",
            path: "samsung-z-fold",
            series: "zseries",
            image: SamsungZSeries,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                }
            ]
        },
        {
            id: 2,
            brand: "google",
            category: "phones",
            title: "Google Pixel 6",
            path: "google-pixel-6",
            series: "pixel",
            image: GooglePixel,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'AT&T',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Verizon',
                            unlocked: {
                                '256GB': 1050,
                                '512GB': 1100,
                                '1TB': 1150
                            },
                            locked: {
                                '256GB': 650,
                                '512GB': 700,
                                '1TB': 725
                            }
                        },
                        {
                            carrier: 'Sprint',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'T-Mobile',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Unlocked',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        },
                        {
                            carrier: 'Other Carrier',
                            prices: {
                                '256GB': 950,
                                '512GB': 1000,
                                '1TB': 1025
                            }
                        }

                    ]
                }
            ]
        },

        // TABLETS
        
        {
            id: 2,
            brand: "apple",
            category: "tablets",
            title: "Ipad 10 pro",
            path: "ipad-10-pro",
            series: "ipad",
            image: IpadPro,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            brand: "samsung",
            category: "tablets",
            title: "Galaxy Tab 10",
            path: "galaxy-tab-10",
            series: "galaxytabsseries",
            image: SSeriesTab,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            brand: "google",
            category: "tablets",
            title: "Google Pixel Tab",
            path: "google-pixel-tab",
            series: "googlepixeltabs",
            image: PixelTab,
            calculator: [
                {
                    condition: "Brand New",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Flawless",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Good",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Fair",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                },
                {
                    condition: "Broken",
                    carriers: [
                        {
                            carrier: 'Wifi Only',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        },
                        {
                            carrier: 'Wifi + Cellular',
                            prices: {
                                '64GB': 950,
                                '256GB': 1000,
                            }
                        }
                    ]
                }
            ]
        },

        // LAPTOPS
    ]



    const auth = getAuth();
    useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const docRef = doc(db, "userList", uid);
        const unsubscribe = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            setUserDetails(doc.data());
          } else {
            setUserDetails({});
          }
        });
        // console.log("DATA FETCHED")
        return () => unsubscribe();
      } else {
        // console.log("DATA NOT FETCHED")
        setUserDetails({});
      }
    });
}, [auth])
     
//     useEffect(() => {
        
//     const parentDocRef = doc(db, "products", "products");
//     const finalCollectionRef = collection(parentDocRef, "iphones"); // Replace "subcollectionName" with the desired name for the subcollection
    
//     iphones.forEach(async (item) => {
//         const docRef = await addDoc(finalCollectionRef, item);
//         await updateDoc(doc(finalCollectionRef, docRef.id), { id: docRef.id }); // Update the document within the subcollection
//     });
// }, [])
    
    
    return(
        <MyContext.Provider value={{categories, iphones, userDetails, products}}>
            {children}
        </MyContext.Provider>
    )
}



