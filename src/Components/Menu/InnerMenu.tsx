import { useContext } from 'react';
import { appContext, actionBurger } from '../../Context/App';
import { NavLink } from 'react-router-dom';
import { MenuTypes } from './MenuTypes';

interface InnerMenuProps {
    menuData: MenuTypes[];
}

const InnerMenu = ({menuData}: InnerMenuProps): JSX.Element => {
    const { state: { isBurgerOpen } } = useContext(appContext);
    const { dispatch } = useContext(appContext);
    const closeMobileMenuHandler = () => {
        dispatch(actionBurger(!isBurgerOpen));
    };
    return (
        <ul className="menu__list menu__inner-list">
            {
                menuData.map(({ id, title, link, img }) => (
                    <li className="menu__inner-item" key={id}>
                        <NavLink className={'menu__link'} to={link ? link : ''} onClick={closeMobileMenuHandler}>
                            <img className="menu__icon" src={`./img/svg/${img}.svg`} alt={title} width="32" height="32" />
                            <span className="menu__link-title">{title}</span>
                        </NavLink>
                    </li>
                ))
            }

        </ul>
    )
}

export { InnerMenu };
