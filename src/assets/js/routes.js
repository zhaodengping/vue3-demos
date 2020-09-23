
import Home from '../../views/home/home.vue'
import Mixins from '../../views/Mixins/Mixins.vue'
import Router from '../../views/router/router.vue'

import {createWebHashHistory,createRouter} from 'vue-router'

const history=createWebHashHistory()

export const routes=createRouter({
    history,
    routes:[{
        path:'/',
        component:Home
    },{
        path:"/home",
        component:Home,
        children:[{
            path:'/home/mixins',
            component:Mixins
        },{
            path:"/home/router",
            component:Router
        }]
    }]
})