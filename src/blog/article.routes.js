import ArticlesHome from "./ArticlesHome";
import HowToAvoidGas from "./articles/food-and-asanas/HowToAvoidGas";
import MyTechStack from "./articles/saas/MyTechStack";
import WriteTheBestUserStories from "./articles/saas/WriteTheBestUserStories";
import DigitalMarketing101 from "./articles/saas/DigitalMarketing101";
import HowToSellYourProductToAMarket from "./articles/saas/HowToSellYourProductToAMarket";

const routes = [
  {
    path: "/articles",
    component: ArticlesHome,
  },
  {
    path: "/article/how-to-avoid-gas",
    component: HowToAvoidGas,
  },
  {
    path: "/article/my-tech-stack",
    component: MyTechStack,
  },
  {
    path: "/article/write-the-best-user-stories",
    component: WriteTheBestUserStories,
  },
  {
    path: "/article/digital-marketing-101",
    component: DigitalMarketing101,
  },
  {
    path: "/article/how-to-sell-your-product-to-a-market",
    component: HowToSellYourProductToAMarket,
  },
];

export { routes };
