import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import PlanszAppka from "@/views/PlanszAppka";
import WellBeeing from "@/views/WellBeeing";

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/planszappka',
        name: 'PlanszAppka',
        component: PlanszAppka
    },
    {
        path: '/wellbeeing',
        name: 'WellBeeing',
        component: WellBeeing
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

export default router
