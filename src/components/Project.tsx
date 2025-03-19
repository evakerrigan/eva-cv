import happyMappy from "../assets/projects/project-happy-mappy.jpg";
import exoticFruit from "../assets/projects/project-exotic-fruit.jpg";
import evaImages from "../assets/projects/project-eva-images.jpg";
// import mem from "../assets/projects/project-mem.jpg";
import multi from "../assets/projects/project-multi.jpg";
import paykong from "../assets/projects/project-paykong.jpg";

export const Project = () => {
  return (
    <div className="project-wrapper wrapper">
      <h2>Проекты</h2>
      <ol className="project-list">
        <li className="project-item">
          {/* <div className="project-image-nda">NDA</div> */}
          <div className="project-image">
            <img src={paykong} />
          </div>
          <div className="project-details-wrapper">
            {/* <div className="project-details-wrapper-mobile"> */}
            {/* <div className="project-image-nda-mobile">NDA</div> */}
            <div className="project-image-mobile">
              <img src={paykong} />
              <h4>Paykong, (Payment System) платежная система</h4>
            </div>
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
              <li>Избавлялась от ошибок в консоль логах</li>
            </ul>

            <p>
              Стек 1: React, AntDesign, Redux, SWR, Typescript, Tailwind
              <br />
              Стек 2: React, Chakra, Redux, SWR, Typescript, Tailwind
              <br />
              Стек 3: Next, moduleCSS, Typescript
            </p>
          </div>
        </li>
        <li className="project-item">
          <div className="project-image">
            <img src={happyMappy} />
          </div>
          <div className="project-details-wrapper">
            <div className="project-image-mobile">
              <img src={happyMappy} />
              <h4>
                <a href="https://rs-club.vercel.app/" target="_blank">
                  Happy Mappy
                </a>
                , социальная сеть для разработчиков
              </h4>
            </div>
            <p>
              Закрытая социальная сеть для разработчиков с авторизацией через
              GitHub. Показывает на карте местонахождение пользователей. Можно
              фильтровать пользователей по стеку технологий. Написать им в
              телеграм. Создана для поиска новых друзей или новых работников по
              местонахождению в нужном городе или стране.
            </p>
            <p>Стек: React, Nest, Postgres, Prisma, Typescript</p>
            {/* <ul className="project-details">
              <li></li>
              <li></li>
              <li></li>
            </ul> */}
          </div>
        </li>
        <li className="project-item">
          <div className="project-image">
            <img src={multi} alt="project" />
          </div>
          <div className="project-details-wrapper">
            <div className="project-image-mobile">
              <img src={multi} alt="project" />
              <h4>
                <a href="http://multiply.su/" target="_blank">
                  Multi
                </a>
                , приложение для обучения умножению детей
              </h4>
            </div>
            <p>
              Приложение, которое помогает детям начальных классов выучить
              таблицу умножения, благодаря многократным повторениям. Создано для
              облегчения жизни родителям )
            </p>
            {/* <ul className="project-details">
              <li></li>
              <li></li>
              <li></li>
            </ul> */}
            <p>Стек: Javascript</p>
          </div>
        </li>
        <li className="project-item">
          <div className="project-image">
            <img src={exoticFruit} alt="project" />
          </div>
          <div className="project-details-wrapper">
            <div className="project-image-mobile">
              <img src={exoticFruit} alt="project" />
              <h4>
                <a
                  href="https://evakerrigan.github.io/exotic-fruit/"
                  target="_blank"
                >
                  Exotic Fruit
                </a>
                , онлайн магазин экзотических фруктов
              </h4>
            </div>
            <p>
              Онлайн магазин фруктов с рассчетом стоимости доставки по городу c
              отображением на карте
            </p>
            <ul className="project-details">
              <li>Авторизация пользователей</li>
              <li>Корзина</li>
              <li>Пагинация</li>
              <li>Тестирование Jest</li>
              <li>Работа с API карт</li>
            </ul>
            {/* <p>Стек: Next, Redux, Typescript</p> */}
            <p>Стек: React, Typescript</p>
          </div>
        </li>
        <li className="project-item">
          <div className="project-image">
            <img src={evaImages} alt="project" />
          </div>
          <div className="project-details-wrapper">
            <div className="project-image-mobile">
              <img src={evaImages} alt="project" />
              <h4>
                <a href="https://eva-images.netlify.app/" target="_blank">
                  Eva Images
                </a>
                , каталог фотографий для рекламы
              </h4>
            </div>
            <p>
              Авторский каталог фотографий, продаваемых на различных
              фотостоковых площадках, но от одного автора. Приложение портфолио.
            </p>
            <ul className="project-details">
              <li>
                Авторизация только для автора, для возможности добавления своих
                фото в базу приложения
              </li>
              <li>Фильтрация на бекенде по тегам</li>
              <li>Пагинация</li>
              <li>Тестирование Vitest</li>
            </ul>
            {/* <p>Стек: Next, Zustand, Typescript</p> */}
            <p>Стек: React, Typescript, Redux</p>
          </div>
        </li>
        {/* <li className="project-item">
          <div className="project-image">
            <img src={mem} alt="project" />
          </div>
          <div className="project-details-wrapper">
            <div className="project-image-mobile">
              <img src={mem} alt="project" />
              <h4>
                Meme Check, Приложение для проведения собеседований по мемам
              </h4>
            </div>
            <p>
              В приложении выбирается уровень, на кого проводить собеседование:
              джун, миддл, сеньор. И в зависимости от выбора выдаются рэндом
              мемы смешные, которые собеседуемый должен объяснить что в них
              смешного и о чём речь.
            </p>
            <p>Стек: Typescript, Express</p>           
          </div>
        </li> */}
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
            <div className="project-details-wrapper-mobile">
              <div className="project-image-nda-mobile">NDA</div>
              <h4>Happy Fans, стриминговый сервис</h4>
            </div>
            <p>
              Разработка приложения для потокового вещания с использованием
              React. С личными страницами пользователей, галереей фотографий и
              чатами.
            </p>
            <ul className="project-details">
              <li>Создание новых компонентов в проекте</li>
              <li>Оптимизация и рефакторинг старого кода</li>
              <li>
                Адаптация используемых внешних библиотек под особенности проекта
              </li>
            </ul>
            <p>Стек: React, Redux, Webpack</p>
          </div>
        </li>
      </ol>
    </div>
  );
};
