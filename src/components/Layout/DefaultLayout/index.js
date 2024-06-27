import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content-wrapper">
                <Sidebar />

                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
