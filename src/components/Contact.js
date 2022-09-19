import React from "react";
import Card from "./UI/Card";
import styles from "./Contact.module.css";
import { useState } from "react";
import EditForm from "./EditForm";

//This component represents single contact
const Contact = ({ contactData, deleteUser, editUser, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editHandler = () => {
    setIsEditing((prev) => !prev);
  };
  const closeEditing = () => {
    setIsEditing(false);
  };
  const content = !isEditing ? "Edit" : "Exit";
  return (
    <Card>
      <div className={styles.left}>
        <h2>{contactData.company.name}</h2>
        <div className={styles.name}>{contactData.name}</div>
        <div className={styles.email}>{contactData.email}</div>
        <div className={styles.phone}>{contactData.phone}</div>
      </div>
      <div>
        <button className={styles.edit} onClick={editHandler}>
          {content}
        </button>
        {isEditing && (
          <EditForm editUser={editUser} id={id} closeEditing={closeEditing} />
        )}
        <button className={styles.delete} onClick={() => deleteUser(id)}>
          Delete
        </button>
      </div>
    </Card>
  );
};

export default Contact;
