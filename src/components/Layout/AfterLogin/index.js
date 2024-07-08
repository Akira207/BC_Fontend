import Header from './Header';
import Sidebar from './Sidebar';

function AfterLogin({ children }) {
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

export default AfterLogin;
