import Home from '../pages/Home.vue';
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
    path: "/",
    name: "Orçamento",
    component: Home,
    panel: true,
    image: homeImg
  },
  {
    path: "/",
    name: "Custos",
    component: Home,
    panel: true,
    image: homeImg
  },
  {
    path: "/",
    name: "Previsões",
    component: Home,
    panel: true,
    image: homeImg
  }
];

export default contents;
