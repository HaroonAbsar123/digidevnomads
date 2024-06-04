import React, { useContext } from "react";
import { MyContext } from "../../Context/MyContext";


export default function ImageInText() {

  const {contactUsRef} = useContext(MyContext)

  return (
    <div ref={contactUsRef}>
    <div style={{padding: '3rem 0rem', textAlign: 'center', width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '0rem'}}>
        <div className="ben">GET IN TOUCH  </div>
    </div>
    
    <div style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', fontSize: '1.2rem'}}>
    <div>check@example.com</div>
    <div>+92-123-1231234</div>

  </div>
  </div>
  );
}
