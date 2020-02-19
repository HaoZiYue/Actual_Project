import Miste from '../pages/Miste/Miste.vue';
import Category from '../pages/Category/Category.vue';
import Personal from '../pages/Personal/Personal.vue';
import ShoppingCar from '../pages/ShoppingCar/ShoppingCar.vue';
import Worthy from '../pages/Worthy/Worthy.vue';
import Search from '../pages/Search/Search.vue'

export default [
  {
    path:'/miste',
    component: Miste
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/personal',
    component: Personal
  },
  {
    path:'/shoppingcar',
    component: ShoppingCar
  },
  {
    path:'/worthy',
    component:Worthy
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/miste'
  }
]