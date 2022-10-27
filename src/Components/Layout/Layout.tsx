import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Menu } from '../Menu/Menu';

const Layout = (): JSX.Element => {
    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                <div className="container container--no-padding">
                    <div className="main__container">
                        <Menu/>
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
        </div>
    )
}

export { Layout };