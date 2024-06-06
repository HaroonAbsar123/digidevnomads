import React, { useState, useEffect } from "react";
import classes from "./ContactUs.module.css";
import { db } from "../../firebase";
import { collection, addDoc,  updateDoc } from "firebase/firestore";
import { TextField, Button } from "@mui/material";
import { toast } from "react-hot-toast";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [howCanWeSupport, setHowCanWeSupport] = useState("");



  const [isMobile, setIsMobile] = useState(false);
  const [flexSet, setFlexSet] = useState(false);
  const [submitting, setSubmitting] = useState(false)

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 900); // You can adjust the width threshold as needed
    setFlexSet(window.innerWidth <= 650); // You can adjust the width threshold as needed
  };

  useEffect(() => {
    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile); // Add event listener

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault()
  const formData={
    name: firstName,
    email: email,
    message: howCanWeSupport,
    submittedOn: new Date
  }

  
  try {
  const collectionRef = collection(db, "contactUs");
  const docRef = await addDoc(collectionRef, formData);

  await updateDoc(docRef, { id: docRef.id });

  setFirstName("");
  setEmail("");
  setHowCanWeSupport("");
  
  toast.success("Submitted", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

} catch (e) {
  toast.error("Error occurred, Please try again", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
}


};

  return (
    <>
      <div className={classes.mainImage}>
        <div
          style={{
            marginTop: "0px",
            marginBottom: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: 'stretch',
            flexDirection: flexSet ? "column" : "row",
            flex: 1,
            gap: "20px",
              backdropFilter: "blur(10px)", // Adjust the blur intensity as needed
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: "10px",
          }}
        >
          
          <div
            style={{
              padding: "0.5rem",
              marginTop: "0px",
              flex: 1,
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <TextField
                  style={{ flex: 1 }}
                  label="Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                />

                <TextField
                  style={{ flex: 1 }}
                  label="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div style={{ flex: 1, width: "100%", marginBottom: "20px" }}>
                <TextField
                  style={{ flex: 1, width: "100%" }}
                  label="Message"
                  multiline
                  value={howCanWeSupport}
                  onChange={(e) => {
                    setHowCanWeSupport(e.target.value);
                  }}
                  id="support"
                  name="support"
                  rows="4"
                  required
                />
              </div>
              <Button
                variant="contained"
                style={{width: '100%', background: 'linear-gradient(90deg, #03a9f4, #f441a5)', color: '#fff'}}
                type="submit"
              >
                SUBMIT
              </Button>
            </form>
          </div>


        </div>
      </div>

    </>
  );
}
