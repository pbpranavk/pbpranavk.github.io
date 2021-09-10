import ArticlesHome from "./ArticlesHome";
import MNP0 from "./articles/mnp/MNP0";
import MNP1 from "./articles/mnp/MNP1";

import SNE0 from "./articles/sne/SNE0";
import SNE1 from "./articles/sne/SNE1";
import SNE2 from "./articles/sne/SNE2";

import FAA0 from "./articles/faa/FAA0";

const mnpRoutes = [
  {
    path: "/articles",
    component: ArticlesHome,
  },
  {
    path: "/article/mnp-0",
    component: MNP0,
  },
  {
    path: "/article/mnp-1",
    component: MNP1,
  },
];

const sneRoutes = [
  {
    path: "/article/sne-0",
    component: SNE0,
  },
  {
    path: "/article/sne-1",
    component: SNE1,
  },
  {
    path: "/article/sne-2",
    component: SNE2,
  },
];

const faaRoutes = [
  {
    path: "/article/faa-0",
    component: FAA0,
  },
];

const routes = [...mnpRoutes, ...sneRoutes, ...faaRoutes];

export { routes };
