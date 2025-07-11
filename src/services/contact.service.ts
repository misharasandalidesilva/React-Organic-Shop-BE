import {contactList} from "../db/db";
import {Contact} from "../model/contact.model";

export const getAllContacts = () => {
    return contactList;
}
export const saveContact = (contact: Contact) => {
    contactList.push(contact);
    return contact;
}

export const validateContact = (contact: Contact) => {
    if (!contact.email || !contact.subject || !contact.message) {
        return "All fields are required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
        return "Invalid email format";
    }

    return null;
}