//Layouts
import HeaderOnly from '~/components/Layout/HeaderOnly/HeaderOnly'

// Pages
import Home from '~/pages/Home/home'
import Video from '~/pages/Video/video'
import Group from '~/pages/Group/group'
import Profile from '~/pages/Profile/profile'
import Search from '~/pages/Search/search'


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/videos', component: Video },
    { path: '/groups', component: Group },
    { path: '/profiles', component: Profile, layout: HeaderOnly },
    { path: '/searchs', component: Search, layout: null },

]

const privateRoutes = [

]


export { publicRoutes, privateRoutes}