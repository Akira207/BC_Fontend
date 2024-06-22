//import
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';


//chưa login
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login}

]

//đã login
const privateRoutes = [
    { path: '/profile', component: Profile}

]

export { publicRoutes, privateRoutes }