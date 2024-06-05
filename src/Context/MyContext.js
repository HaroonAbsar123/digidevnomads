import { createContext, useRef } from "react";

import { db } from "../firebase";
import { collection, addDoc, updateDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const MyContext=createContext({});

export const MyContextProvider=({children}) => {

    const serviceRef=useRef();
    const contactUsRef=useRef();
    const appointmentRef = useRef();
    const portfolioRef = useRef();
    
    return(
        <MyContext.Provider value={{serviceRef, contactUsRef, appointmentRef, portfolioRef}}>
            {children}
        </MyContext.Provider>
    )
}



