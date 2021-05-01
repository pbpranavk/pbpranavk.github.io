import ArticlesHome from "./ArticlesHome";
import Recursion from "./articles/Recursion";

const routes = [
  {
    path: "/articles",
    component: ArticlesHome,
  },
  {
    path: "/article/recursion",
    component: Recursion,
  },
];

export { routes };
