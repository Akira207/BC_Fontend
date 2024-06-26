import Header from './Header';
import Sidebar from './Sidebar';
import ChildrenPages from './ChildrenPages';

function DefaultLayout({children }) {
    return (
        <div>
            <Header />
            <div className="content-wrapper">
                <Sidebar />
            
                <ChildrenPages />
          
                {children }
            </div>
        </div>
    );
}

export default DefaultLayout;
