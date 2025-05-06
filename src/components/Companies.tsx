import "../styles/companies.css";

export const Companies = () => {
  return (
    <div className="companies-wrapper wrapper">
      <h2>Компании</h2>
      <ul className="companies-list">
        <li className="companies-item">
          <h4>Paykong, (Payment System) платежная система (2023-2025)</h4>
          <p>
            React, Next, AntDesign, Chakra, moduleCSS, Tailwind, Redux, SWR,
            Typescript. Разработка новых модулей приложения, рефакторинг старых
            модулей. Изменение дизайна приложения. Обновление библиотек.
            Разработка и внедрение темной темы. Разработка адаптива. Изменение 
            архитектуры проекта. Добавление новых страниц с новым функционалом.
          </p>
          <p>
            Компания закрылась в этом году, но можно посмотреть сохранившуюся
            информацию о ней в архиве. Ссылка:&nbsp;
            <a
              href="https://web-arhive.ru/page?url=http%3A%2F%2Fpaykong.io&date=20240326&hidden=0"
              target="_blank"
            >
              paykong.io
            </a>
          </p>
        </li>
        <li className="companies-item">
          <h4>
            <a href="https://github.com/happyfans" target="_blank">
              Happy Fans
            </a>
            , стриминговый сервис (2022)
          </h4>
          <p>
            React, Redux. Создание новых компонентов в проекте, оптимизация и
            рефакторинг старого легаси кода, настройка используемых внешних библиотек
            под особенности проекта.
          </p>
        </li>
        <li className="companies-item">
          <h4>
            <a href="https://www.roseltorg.ru/" target="_blank">
              Росэлторг
            </a>
            &nbsp;(группа втб), электронные торги (2015-2016)
          </h4>
          <p>Создание страниц корпоративного сайта и верстка email-рассылок.</p>
        </li>
        <li className="companies-item">
          <h4>ЗАО Астропол, разработка веб-сайтов (2014-2015)</h4>
          <p>
            Дизайн и верстка сайтов с нуля. На cms opencart, cms wordpress, cms
            modx.
          </p>
        </li>
      </ul>
    </div>
  );
};
