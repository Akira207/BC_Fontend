//import
import Home from '~/pages/Home';
import Login from '~/pages/Login';


//chưa login
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/Login', component: Login}

]

//đã login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }