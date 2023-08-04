import Home from '../pages/Home.vue';
import Prevision from '../pages/Prevision.vue';
import Costs from '../pages/Costs.vue';
import Budget from '../pages/Budget.vue';
import homeImg from '../assets/215112.png'
const contents = [
  {
    path: "/",
    name: "Home",
    component: Home,
    panel: false,
    image: homeImg
  },
  {
    path: "/budget",
    name: "Orçamento",
    component: Budget,
    panel: true,
    image: homeImg
  },
  {
    path: "/costs",
    name: "Custos",
    component: Costs,
    panel: true,
    image: homeImg
  },
  {
    path: "/prevision",
    name: "Previsões",
    component: Prevision,
    panel: true,
    image: homeImg
  }
];

export default contents;
