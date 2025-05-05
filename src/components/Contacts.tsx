export const Contacts = () => {
  return (
    <div className="contacts-wrapper wrapper">
      <h2>Контакты</h2>
      <ul className="contacts-list">
        <li>
          <h3>Phone</h3>
          <a className="contacts" href="tel:+79313151738">
            +7&nbsp;931&nbsp;315&nbsp;17&nbsp;38
          </a>
        </li>
        <li>
          <h3>Email</h3>
          <a className="contacts" href="mailto:evakerrigan@gmail.com">
            evakerrigan@gmail.com
          </a>
        </li>
        <li>
          <h3>IT</h3>
          <a
            className="contacts"
            href="https://github.com/evakerrigan"
            target="_blank"
          >
            github: evakerrigan
          </a>
          <br />
          <a
            className="contacts"
            href="https://www.codewars.com/users/evakerrigan"
            target="_blank"
          >
            codewars: evakerrigan
          </a>
        </li>
        <li>
          <h3>Social</h3>
          <a
            className="contacts"
            href="http://t.me/EvaKerrigan"
            target="_blank"
          >
            telegram: EvaKerrigan
          </a>
          <br />
          <a
            className="contacts"
            href="https://www.linkedin.com/in/evakerrigan"
            target="_blank"
          >
            linkedin: evakerrigan
          </a>
          <br />
          <a
            className="contacts"
            href="https://spb.hh.ru/resume/786e614aff0484b8820039ed1f463169587a70"
            target="_blank"
          >
            hh: Ксения Любасова
          </a>
        </li>
      </ul>
    </div>
  );
};
