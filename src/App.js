import { useEffect } from "react";
import { useState } from "react";
import AddNewContact from "./components/AddNewContact";
import ContactList from "./components/ContactList";

function App() {
  const [contactList, setContactList] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContactData = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        console.log("error");
      }
      const data = await response.json();
      console.log(data);
      setContactList(data);
      setLoading(false);
    };
    fetchContactData();
  }, []);

  const addUser = async (name, email, phone, companyName) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        company: { name: companyName },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // setContactList([data, ...contactList]);
    console.log(data);
    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
      company: { name: companyName },
    };
    setContactList([newContact, ...contactList]);
  };

  const deleteUser = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    setContactList(
      contactList.filter((contact) => {
        return contact.id !== id;
      })
    );
  };

  const editUser = async (id, name, email, phone, companyName) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: Date.now(),
          name: name,
          email: email,
          phone: phone,
          company: { name: companyName },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const updatedContacts = contactList.map((contact) => {
      if (contact.id === id) {
        contact.name = name;
        contact.email = email;
        contact.phone = phone;
        contact.company.name = companyName;
      }
      return contact;
    });
    // setContactList([data, ...contactList]);
    setContactList(updatedContacts);
  };
  return (
    <div className="app">
      <h1>React Contacts</h1>
      <AddNewContact addUser={addUser} />
      {loading && <p>Loading...</p>}
      {!loading && contactList && (
        <ContactList
          contacts={contactList}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      )}
    </div>
  );
}

export default App;
