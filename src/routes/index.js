//import
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';
import ListDocx from '~/pages/ListDocx';
import Docx from '~/pages/Docx';
import AdminHome from '~/pages/AdminHome';
import AdminCreat from '~/pages/AdminCreat';
import AdminUpdateDocument from '~/pages/AdminUpdateDocument';
import UpdateInfo from '~/pages/UpdateInfo';
import Read from '~/pages/Read';
import { AdminLayout, AfterLogin, ProfileLayout } from '~/components/Layout';

//chưa login
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login, layout: null },
    { path: '/list-docx', component: ListDocx },
    { path: '/docx/:id', component: Docx },
    { path: '/profile/id', component: Profile, layout: ProfileLayout },
    { path: '/Read', component: Read, layout: ProfileLayout },
    { path: '/admin', component: AdminHome, layout: AdminLayout },
    
    
];

//đã login
const privateRoutes = [
    { path: '/', component: Home, layout: AfterLogin },
    { path: '/update-info/id', component: UpdateInfo, layout: ProfileLayout },

    
];

const forAdmin = [
    { path: '/admin', component: AdminHome, layout: AdminLayout },
    { path: '/admin-creat', component: AdminCreat, layout: AdminLayout },
    { path: '/admin-update-document', component: AdminUpdateDocument, layout: AdminLayout },
];

export { publicRoutes, privateRoutes, forAdmin };
