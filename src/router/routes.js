import Miste from '../pages/Miste/Miste.vue';
import Category from '../pages/Category/Category.vue';
import Personal from '../pages/Personal/Personal.vue';
import ShoppingCar from '../pages/ShoppingCar/ShoppingCar.vue';
import Worthy from '../pages/Worthy/Worthy.vue';
import Search from '../pages/Search/Search.vue'
import Recommend from '../components/Recommend/Recommend.vue'
import CateListData from '../pages/CateListData/CateListData.vue'
export default [
  {
    path:'/miste',
    component: Miste,
    children:[
      {
        path:'recommend',
        component:Recommend
      },
      {
        path:'/miste',
        redirect:'/miste/recommend'
      }
    ]
  },
  {
    path:'/category',
    component: Category,
    children:[
      {
        path:'cateList',
        component: CateListData,
      },
      {
        path:'/category/cateList',
        redirect:'/category/cateList?cateListID=11',
        props:(route)=>({cateListID:route.query.cateListID})
      }
    ],
    redirect:'/category/cateList'
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