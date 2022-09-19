import React, { useState } from "react";
import styles from "./AddNewContact.module.css";

//This component is responsible for adding new user contact
const AddNewContact = ({ addUser }) => {
  const [companyName, setCompanyName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addUser(name, email, phone, companyName);
    setCompanyName("");
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        required
        placeholder="Enter Company Name..."
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
        value={companyName}
      />
      <input
        type="text"
        required
        placeholder="Enter Person Name..."
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="email"
        required
        placeholder="Enter e-mail..."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        type="number"
        required
        placeholder="Enter phone No..."
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        value={phone}
      />
      <button type="submit">Add New Contact</button>
    </form>
  );
};

export default AddNewContact;
