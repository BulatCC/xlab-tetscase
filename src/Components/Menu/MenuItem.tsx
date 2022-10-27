import { useContext } from 'react';
import { appContext, actionBurger } from '../../Context/App';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { InnerMenu } from './InnerMenu';
import { MenuTypes } from './MenuTypes';

type MenuProps = {
    menuData: MenuTypes;
}

const MenuItem = ({ menuData: { id, title, img, link, innerMenuData } }: MenuProps): JSX.Element => {
    const [expanded, setExpanded] = useState(false);
    const { state: { isBurgerOpen } } = useContext(appContext);
    const { dispatch } = useContext(appContext);
    
    const closeMobileMenuHandler = () => {
        const screenWidth = document.documentElement.clientWidth;
        if (screenWidth < 769) {
            dispatch(actionBurger(!isBurgerOpen));
        }
    };

    return (
        <li className={`menu__item ${innerMenuData ? 'menu__item--expand' : ''} ${expanded ? 'expanded' : ''}`} key={id} >
            {
                link ?
                    <NavLink className={'menu__link'} to={link} onClick={closeMobileMenuHandler} end>
                        <img className="menu__icon" src={`./img/svg/${img}.svg`} alt={title} width="32" height="32" />
                        <span className="menu__link-title">{title}</span>
                    </NavLink>
                    :
                    <span className="menu__link" onClick={() => {
                        setExpanded(!expanded);
                    }}>
                        <img className="menu__icon" src={`./img/svg/${img}.svg`} alt={title} width="32" height="32" />
                        <span className="menu__link-title">{title}</span>
                    </span>
            }
            { innerMenuData && expanded && <InnerMenu menuData={innerMenuData} /> }
        </li>
    )
}

export { MenuItem };

