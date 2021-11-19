import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Main from "../components/main/main";
// import Product from "../components/productlist";

const routes = [
  { 
    path: '/', 
    redirect: '/products' 
  },

  {
    path: '/products',
    name: 'Products',
    component: Main,
  },

  // {
  //   path: `/products/product-:productId`,
  //   name: "Product",
  //   component: Product,
  //   props: route => ({ product: route.params.productId })
  // },
  // {
  //   path: "/products/discounts",
  //   name: "Discounts",
  //   component: Discounts
  // },
  // { 
  //   path: '/:pathMatch(.*)*', 
  //   name: 'NotFound', component: NotFound 
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
