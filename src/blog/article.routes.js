import SNN from "./articles/SNN";
import DNN from "./articles/DNN";
import CNN from "./articles/CNN";
import RNN1 from "./articles/RNN1";
import RNN2 from "./articles/RNN2";

const routes = [
  {
    path: "/article/snn",
    component: SNN,
  },
  {
    path: "/article/dnn",
    component: DNN,
  },
  {
    path: "/article/cnn",
    component: CNN,
  },
  {
    path: "/article/rnn-1",
    component: RNN1,
  },
  {
    path: "/article/rnn-2",
    component: RNN2,
  },
];

export { routes };
