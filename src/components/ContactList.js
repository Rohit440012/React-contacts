import React from "react";
import Contact from "./Contact";

//This component represents list of Contact components
const ContactList = ({ contacts, deleteUser, editUser }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact
          contactData={contact}
          key={contact.id}
          id={contact.id}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      ))}
    </div>
  );
};

export default ContactList;
