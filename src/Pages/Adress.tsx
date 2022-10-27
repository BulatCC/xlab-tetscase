import { useState, useEffect, ChangeEvent } from 'react';
import { SearchResult } from '../Components/SearchResult/SearchResult';
import { api } from '../Services/Api';

type SearchResultType = {
    suggestions: [];
}

const Adress = (): JSX.Element => {
    const [inputValue, setinputValue] = useState('');
    const [showError, setShowError] = useState(false);
    const [searchResult, setSearchResult] = useState<SearchResultType | null>(null);

    useEffect(() => {
        const handleEnterPress = (evt: KeyboardEvent) => {
            if (evt.key === 'Enter') {
                getResponse();
            }
        };
        document.addEventListener('keydown', handleEnterPress);

        return () => {
            document.removeEventListener('keydown', handleEnterPress);
        };
    });

    const getResponse = () => {
        if (inputValue.length > 2) {
            api(inputValue)
                .then(res => setSearchResult(res))
            setShowError(false);
        } else {
            setShowError(true);
        }
    }

    const inputChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        setinputValue(target.value.trim());
    }

    const buttonClickHandler = () => {
        getResponse();
    }

    return (
        <section className="content scrollable">
            <h1 className="content__title">Поиск адресов</h1>
            <p className="content__sub-title">Введите интересующий вас адрес</p>
            <div className="content__wrapper">
                <input onChange={inputChangeHandler} className="input content__input" type="text" placeholder="Введите интересующий вас адрес" />
                <button className="button" onClick={buttonClickHandler}>
                    <img className="button__img" src="./img/svg/ic_search-white.svg" alt="поиск" width="32" height="32" />
                    Поиск
                </button>
            </div>
            {showError && <p style={{ color: 'red', marginBottom: '2rem'}}>Введите минимум 3 символа</p>}
            {searchResult && <SearchResult qeuryData={searchResult} />}
        </section>
    )
}

export { Adress };