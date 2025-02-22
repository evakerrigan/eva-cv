// import avatar from "../assets/1.jpg";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-avatar-wrapper">
        {/* <img src={avatar} alt="avatar" className="header-avatar" /> */}
      </div>
      <div className="header-wrapper">
        <div className="header-wrapper-small-size">
          <div className="header-wrapper-small-size-avatar"></div>
          <div className="header-wrapper-small-size-text">
            <h1 className="header-name">Dmytro Shustak</h1>
            <h2 className="header-title">Frontend Developer</h2>
          </div>
          <div className="header-wrapper-mobile-size-avatar"></div>
        </div>
        <p>
          Я фронтенд-разработчик с опытом работы около 4 лет, специализируюсь на
          разработке приложений на React. Имею дизайнерское образование и
          чувство вкуса, поэтому могу создавать красивые и функциональные
          интерфейсы, и наслаждаюсь от работы с красивыми проектами. Я
          перфекционист. Целеустремлённая. И люблю то, чем занимаюсь.
        </p>
        <p>Моими основными целями на будущее являются:</p>
        <ol>
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
            производительности, тестирование и модульность.
          </li>
        </ol>
      </div>
    </div>
  );
};
