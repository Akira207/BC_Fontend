import Header from './Header';
import Sidebar from './Sidebar';

function ProfileLayout({ children }) {
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

export default ProfileLayout;
