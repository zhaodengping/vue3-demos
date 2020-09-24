
import Home from '../../views/home/home.vue'
import Mixins from '../../views/Mixins/Mixins.vue'
import Router from '../../views/router/router.vue'
import Emit from '../../views/emit/emit.vue'
import Model from '../../views/vModel/vModel.vue'
import EmitEvent from '../../views/emit/emitEvent.vue'

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
        },{
            path:"/home/emit",
            component:Emit
        },{
            path:"/home/modal",
            component:Model
        },{
            path:'/home/emitEvent',
            component:EmitEvent
        }]
    }]
})