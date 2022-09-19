import React from "react";
import { useState } from "react";

//This component is responsible for editing the contact
const EditForm = ({ editUser, id, closeEditing }) => {
  const [editCompanyName, setEditCompanyName] = useState("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");

  const editSubmitHandler = (e) => {
    e.preventDefault();
    editUser(id, editName, editEmail, editPhone, editCompanyName);
    closeEditing();
  };

  return (
    <form onSubmit={editSubmitHandler}>
      <input
        type="text"
        required
        placeholder="Enter Company Name..."
        onChange={(e) => {
          setEditCompanyName(e.target.value);
        }}
      />
      <input
        type="text"
        required
        placeholder="Enter Person Name..."
        onChange={(e) => {
          setEditName(e.target.value);
        }}
      />
      <input
        type="email"
        required
        placeholder="Enter e-mail..."
        onChange={(e) => {
          setEditEmail(e.target.value);
        }}
      />
      <input
        type="number"
        required
        placeholder="Enter phone No..."
        onChange={(e) => {
          setEditPhone(e.target.value);
        }}
      />
      <button
        type="submit"
        style={{ backgroundColor: "blueviolet", color: "white" }}
      >
        Save
      </button>
    </form>
  );
};

export default EditForm;
