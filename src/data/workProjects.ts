export interface Project {
  id: number;
  image: string;
  title: string;
  titleEtc?: string;
  description: string;
  details: string[];
  stack: string[];
  link?: string;
}

export const workProjects: Project[] = [
  {
    id: 1,
    image: "paykong-admin",
    title: "Paykong",
    titleEtc: ", (Payment System) платежная система",
    description:
      "Главная администраторская панель для управления бизнесом и сбора статистики.",
    details: [
      "Меняла дизайн приложения",
      "Обновляла библиотеки",
      "Писала темную тему",
      "Делала адаптив",
      "Рефакторила",
      "Меняли архитектуру проекта",
      "Добавляла новые страницы",
      "Решала баги",
      "Избавлялась от ошибок в консоль логах",
    ],
    stack: ["Стек 1: React, AntDesign, Redux, SWR, Typescript, Tailwind"],
  },
  {
    id: 1,
    image: "paykong-agent",
    title: "Paykong",
    titleEtc: ", (Payment System) платежная система",
    description: "Админ панель для отслеживания работы агентов.",
    details: [
      "Меняла дизайн приложения",
      "Делала адаптив",
      "Рефакторила",
      "Добавляла новые страницы",
    ],
    stack: ["Стек 2: React, Chakra, Redux, SWR, Typescript, Tailwind"],
  },
  {
    id: 1,
    image: "paykong-pay",
    title: "Paykong",
    titleEtc: ", (Payment System) платежная система",
    description: "Клиентская часть, приложение для оплаты.",
    details: ["Рефакторила", "Добавляла новый функционал"],
    stack: ["Стек 3: Next, moduleCSS, Typescript"],
  },
  {
    id: 2,
    image: "nda",
    title: "Happy Fans",
    titleEtc: ", стриминговый сервис",
    description:
      "Разработка приложения для потокового вещания с использованием React. С личными страницами пользователей, галереей фотографий и чатами.",
    details: [
      "Создание новых компонентов в проекте",
      "Оптимизация и рефакторинг старого кода",
      "Адаптация используемых внешних библиотек под особенности проекта",
    ],
    stack: ["Стек: React, Redux, Webpack"],
  },
];
