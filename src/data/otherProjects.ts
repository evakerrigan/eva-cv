import { Project } from "./workProjects";

export const otherProjects: Project[] = [
  {
    id: 1,
    image: "happyMappy",
    title: "Happy Mappy",
    titleEtc: ", социальная сеть для разработчиков",
    description:
      "Закрытая социальная сеть для разработчиков с авторизацией через GitHub. Показывает на карте местонахождение пользователей. Можно фильтровать пользователей по стеку технологий. Написать им в телеграм. Создана для поиска новых друзей или новых работников по местонахождению в нужном городе или стране.",
    details: [],
    stack: ["React", "Nest", "Postgres", "Prisma", "Typescript"],
    link: "https://it-club-vert.vercel.app/",
  },
  {
    id: 2,
    image: "multi",
    title: "Easy Multiply",
    titleEtc: ", приложение для обучения умножению детей",
    description:
      "Приложение, которое помогает детям начальных классов выучить таблицу умножения, благодаря многократным повторениям. Создано для облегчения жизни родителям )",
    details: [],
    stack: ["Javascript", "Typescript"],
    link: "https://easymultiply.com/",
  },
];
