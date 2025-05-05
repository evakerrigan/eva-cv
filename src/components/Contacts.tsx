import { ContactItem } from "./ContactsItem";
import { contacts } from "../data/contacts";

export const Contacts = () => {
  return (
    <div className="contacts-wrapper wrapper">
      <h2>Контакты</h2>
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <ContactItem key={contact.title} contact={contact} />
        ))}
      </ul>
    </div>
  );
};
