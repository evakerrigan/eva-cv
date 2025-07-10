import { ContactItem } from "./ContactsItem";
import contactsData from "../data/contacts.json";
import { Contact } from "../data/types";
import "../styles/contacts.css";

const contacts: Contact[] = contactsData;

export const Contacts = () => {
  return (
    <div className="contacts-wrapper wrapper">
      <h2 className="layout-title">Контакты</h2>
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <ContactItem key={contact.title} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
