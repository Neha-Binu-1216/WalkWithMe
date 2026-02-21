import { supabase } from "./supabaseClient";

// ADD CONTACT
export const addContact = async (contact) => {
  const { data, error } = await supabase
    .from("contacts")
    .insert([contact]);

  if (error) {
    console.error(error);
    alert("Error adding contact");
  }

  return data;
};

// GET CONTACTS
export const getContacts = async () => {
  const { data, error } = await supabase
    .from("contacts")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};