import { useContext } from 'react';
import { appContext, actionBurger } from '../../Context/App';

const Header = () => {
    const { state: { isBurgerOpen } } = useContext(appContext);
    const { dispatch } = useContext(appContext);
    const BurgerClickHandler = () => {
        dispatch(actionBurger(!isBurgerOpen));
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <button className={`burger ${isBurgerOpen ? 'active': ''}`} onClick={BurgerClickHandler}>
                        <span className="burger__open"></span>
                        <span className="burger__close"></span>
                    </button>
                    <a href="#" className="header__wrappper">
                        <img className="header__img" src="./img/svg/ic_logo.svg" alt="Логотип" width="48" height="48" />
                        <span className="header__title">Wrench CRM</span>
                    </a>
                    <a href="#" className="header__wrappper">
                        <img className="header__img" src="./img/svg/ic_person.svg" alt="Логотип" width="48" height="48" />
                        <span className="header__title">Имя Фамилия</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export { Header };
