import { SearchResulType } from './SearchResulType';

type SearchResultProps = {
    qeuryData: SearchResulType;
}

const SearchResult = ({ qeuryData: { suggestions } }: SearchResultProps): JSX.Element => {
    return (
        <div className="search-result">
            {
                suggestions.length > 0
                    ?
                    <>
                        <h2 className="search-result__title">Адреса</h2>
                        <ul className="search-result__list">
                            {suggestions.map(({ value }, i) => (
                                <li className="search-result__item" key={value}>
                                    <a className="search-result__link" href="#">{value}</a>
                                </li>
                            ))}
                        </ul>
                    </>
                    :
                    <h2 className="search-result__title" style={{marginBottom: '0'}}>По вашему запросу ничего не найдено</h2>
            }
        </div>
    )
}

export { SearchResult };
