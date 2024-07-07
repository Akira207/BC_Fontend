//import

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import ListDocx from '~/pages/ListDocx';
import Docx from '~/pages/Docx';
import AdminHome from '~/pages/AdminHome';
import { AdminLayout } from '~/components/Layout';


//chưa login
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login, layout: null},
    { path: '/list-docx', component: ListDocx},
    { path: '/docx/:id', component: Docx},
    { path: '/admin', component: AdminHome, layout: AdminLayout}
]

//đã login
const privateRoutes = [
    { path: '/profile', component: Profile}

]

export { publicRoutes, privateRoutes }