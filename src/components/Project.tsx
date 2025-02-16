import happyMappy from "../assets/projects/project-happy-mappy.jpg";
import exoticFruit from "../assets/projects/project-exotic-fruit.jpg";
import evaImages from "../assets/projects/project-eva-images.jpg";
import mem from "../assets/projects/project-mem.jpg";
import multi from "../assets/projects/project-multi.jpg";

export const Project = () => {
  return (
    <div className="project-wrapper wrapper">
      <h2>Проекты</h2>
      <ol className="project-list">
        <li className="project-item">
          <div className="project-image-nda">NDA</div>
          <div className="project-details-wrapper">
            <h4>Payment System, платежная система</h4>
            <p>Работа над тремя приложениями для проведения платежей.</p>
            <ul className="project-details">
              <li>Меняла дизайн приложения</li>
              <li>Обновляла библиотеки</li>
              <li>Писала темную тему</li>
              <li>Делала адаптив</li>
              <li>Рефакторила</li>
              <li>Меняли архитектуру проекта</li>
              <li>Добавляла новые страницы</li>
              <li>Решала баги</li>
              <li>Избавлялась от красных ошибок в консоль логах</li>
            </ul>
          </div>
        </li>
        <li className="project-item">
          <div className="project-image">
            <img src={happyMappy} />
          </div>
          <div className="project-details-wrapper">
            <h4>Happy Mappy, социальная сеть для разработчиков</h4>
            <p></p>
            <ul className="project-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </li>
        <li className="project-item">
          <div className="project-image">
            <img src={multi} alt="project" />
          </div>
          <div className="project-details-wrapper">
            <h4>Multi, приложение для обучения умножению детей</h4>
            <p></p>
            <ul className="project-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </li>
        <li className="project-item">
          <div className="project-image">
            <img src={exoticFruit} alt="project" />
          </div>
          <div className="project-details-wrapper">
            <h4>Exotic Fruit, магазин экзотических фруктов</h4>
            <p></p>
            <ul className="project-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </li>
        <li className="project-item">
          <div className="project-image">
            <img src={evaImages} alt="project" />
          </div>
          <div className="project-details-wrapper">
            <h4>Eva Images, каталог фотографий для рекламы</h4>
            <p></p>
            <ul className="project-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </li>
        <li className="project-item">
          <div className="project-image">
            <img src={mem} alt="project" />
          </div>
          <div className="project-details-wrapper">
            <h4>Приложение для проведения собеседований по мемам</h4>
            <p></p>
            <ul className="project-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </li>
        {/* <li className="project-item">
          <div className="project-image">
            <img src="/assets/projects/project.jpg" alt="project" />
          </div>
          <div className="project-details-wrapper">
            <h4></h4>
            <p></p>
            <ul className="project-details">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </li> */}
        <li className="project-item">
          <div className="project-image-nda">NDA</div>
          <div className="project-details-wrapper">
            <h4>Happy Fan, стриминговый сервис</h4>
            <p>
              Разработка приложения для потокового вещания с использованием
              React.
            </p>
            <ul className="project-details">
              <li>Создание новых компонентов в проекте</li>
              <li>Оптимизация и рефакторинг старого кода</li>
              <li>
                Адаптация используемых внешних библиотек под особенности проекта
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  );
};
