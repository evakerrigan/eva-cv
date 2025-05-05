import React from "react";
import { Contact } from "../data/contacts";

interface Props {
  contact: Contact;
}

export const ContactItem: React.FC<Props> = ({ contact }) => {
  return (
    <li>
      <h3>{contact.title}</h3>
      {contact.link.map((link, index) => (
        <>
          <a
            key={index}
            className="contacts"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
          <br />
        </>
      ))}
    </li>
  );
};
