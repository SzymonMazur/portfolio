import { createWebHistory, createRouter } from "vue-router"
import LandingPage from '../views/LandingPage.vue'
import SkumCase from '../views/SkumCase.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
    {
        name: 'LandingPage',
        path: '/',
        alias: ["/portfolio"],
        component: LandingPage
    },
    {
        name: 'SkumCase',
        path: '/skumcase',
        alias: ["/portfolio/skumcase"],
        component: SkumCase
    },
    {
        name: 'AboutView',
        path: '/about-view',
        alias: ["/portfolio/about-view"],
        component: AboutView
    },
    {
        name: 'ContactView',
        path: '/contact-view',
        alias: ["/portfolio/contact-view"],
        component: ContactView
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
