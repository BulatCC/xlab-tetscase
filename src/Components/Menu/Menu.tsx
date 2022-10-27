import { useContext } from 'react';
import { appContext } from '../../Context/App';
import { menuListData } from './MenuData';
import { MenuItem } from './MenuItem';

const Menu = (): JSX.Element => {
    const { state: { isBurgerOpen } } = useContext(appContext);
    return (
        <section className={`menu scrollable ${isBurgerOpen ? 'active' : ''}`}>
            <h2 className="menu__title">Меню</h2>
            <nav className="menu__nav-scrollable">
                <ul className="menu__list">
                    {menuListData.map((menuData) => (
                        <MenuItem menuData={menuData} key={menuData.id}/>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export { Menu };
