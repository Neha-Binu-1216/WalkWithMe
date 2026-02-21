import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import ContactList from "../components/contacts/ContactList";
import AddContactModal from "../components/contacts/AddContactModal";
import { getContacts } from "../services/contactService";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);

  const loadContacts = async () => {
    const data = await getContacts();
    setContacts(data || []);
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <>
      <h2>Emergency Contacts</h2>
      <Button color="primary" onClick={() => setOpen(true)}>
        Add Contact
      </Button>

      <div className="container mx-auto px-4">
        <ContactList contacts={contacts} />
        <AddContactModal open={open} onClose={() => setOpen(false)} onAdded={loadContacts} />
      </div>
    </>
  );
}