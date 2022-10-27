import { AppRoute } from '../../consts';

const menuListData = [
    {
        id: 1,
        title: 'Главная',
        link: AppRoute.Root,
        img: 'ic_house',
    },
    {
        id: 2,
        title: 'Поиск адресов',
        link: AppRoute.Adress,
        img: 'ic_search',
    },
    {
        id: 3,
        title: 'Таблицы',
        link: AppRoute.Tables,
        img: 'ic_squares',
    },
    {
        id: 4,
        title: 'Календарь',
        link: AppRoute.Calendars,
        img: 'ic_calendar',
    },
    {
        id: 5,
        title: 'Настройки',
        img: 'ic_gear',
        innerMenuData: [
            {
                id: 6,
                title: 'Настройки карты',
                link: AppRoute.ProfileSettings,
                img: 'ic_person-profile',
            },
            {
                id: 7,
                title: 'Управление финансами',
                link: AppRoute.FinanceSettings,
                img: 'ic_cashbox',
            },
        ]
    },
    {
        id: 8,
        title: 'Карты',
        link: AppRoute.Maps,
        img: 'ic_pin',
    },
    {
        id: 9,
        title: 'Виджеты',
        link: AppRoute.Widgets,
        img: 'ic_tv',
    },
    {
        id: 10,
        title: 'Настройки',
        img: 'ic_gear',
        innerMenuData: [
            {
                id: 11,
                title: 'Настройки профиля',
                link: AppRoute.ProfileSettings,
                img: 'ic_person-profile',
            },
            {
                id: 12,
                title: 'Управление матросами',
                link: AppRoute.FinanceSettings,
                img: 'ic_cashbox',
            },
        ]
    },
    {
        id: 13,
        title: 'Выход',
        link: AppRoute.Logout,
        img: 'ic_logout',
    },
]

export { menuListData };