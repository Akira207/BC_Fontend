//import

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import ListDocx from '~/pages/ListDocx';

//chưa login
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login, layout: null},
    { path: '/list-docx', component: ListDocx}
]

//đã login
const privateRoutes = [
    { path: '/profile', component: Profile}

]

export { publicRoutes, privateRoutes }