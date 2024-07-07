import HeaderAdmin from './Header';
import Sidebar from './Sidebar';

function AdminLayout({ children }) {
    return (
        <div>
            <HeaderAdmin />
            <div class="content grid wide">
                <div class="row">
                    <Sidebar />
                    {children}
                </div>

            </div>
        </div>
    );
}

export default AdminLayout;
