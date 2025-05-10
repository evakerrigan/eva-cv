import "../styles/header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-avatar-wrapper"></div>
      <div className="header-wrapper">
        <div className="header-wrapper-small-size">
          <div className="header-wrapper-small-size-avatar"></div>
          <div className="header-wrapper-small-size-text">
            <h1 className="header-name">Kseniia Liubasova</h1>
            <h2 className="header-title">Фронтенд разработчик</h2>
          </div>
          <div className="header-wrapper-mobile-size-avatar"></div>
        </div>
        <p>
          Я фронтенд-разработчик с опытом работы более 4 лет, специализируюсь на
          разработке приложений на React. Имею дизайнерское образование и
          чувство вкуса, поэтому могу создавать красивые и функциональные
          интерфейсы, и наслаждаюсь от работы с красивыми проектами. Я
          перфекционист. Целеустремлённая. И люблю то, чем занимаюсь.
        </p>
        <p>Моими основными целями на будущее являются:</p>
        <ol className="header-list">
          <li>
            Углубление знаний в области React и связанных технологий до уровня
            Senior.
          </li>
          <li>
            Постепенное расширение кругозора в области backend-разработки и
            DevOps-практик для полноценного понимания всего жизненного цикла
            приложения.
          </li>
          <li>
            Освоение продвинутых практик разработки, таких как оптимизация
            производительности, тестирование и применение паттернов
            проектирования.
          </li>
        </ol>
      </div>
    </div>
  );
};
