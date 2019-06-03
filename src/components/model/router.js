import Pcontent from '../Pcontent.js'
import Shop from '../Shop.js'
import News from '../News.js'
import Home from '../Home.js'
import addShop from '../shop/addShop'
import shopList from '../shop/shopList'
import Info from '../shop/info/Info'
import List from '../shop/info/List'
let routes = [
    {
      path:'/',
      component:Home,
      exact:true
    },
    {
     path:'/pcontent',
     component:Pcontent,
    },
    {
     path:'/shop',
     component:Shop,
     children:[
         {
             path:'/shop/',
             component:shopList,
             children:[
                {
                    path:'/shop/list',
                    component:List
                },
                {
                   path:'/shop/add/info',
                   component:Info
                }
            ]
         },
         {
            path:'/shop/add',
            component:addShop
         }
     ]
    },
    {
     path:'/news',
     component:News
    },
   ]

   export default routes;