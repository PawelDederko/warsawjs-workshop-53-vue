import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/home'
import AboutView from '@/views/about'
import CountryView from '@/views/country'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path: '/:country_code',
        component: CountryView
    }
]
const router = createRouter({
    history: createWebHistory('/warsawjs-workshop-53-vue/'),
    routes
})
export default router