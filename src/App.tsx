import { Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import { Main } from './Pages/Main';
import { Adress } from './Pages/Adress';
import { Tables } from './Pages/Tables';
import { Calendars } from './Pages/Calendars';
import { Maps } from './Pages/Maps';
import { Widgets } from './Pages/Widgets';
import { ProfileSettings } from './Pages/ProfileSettings';
import { FinanceSettings } from './Pages/FinanceSettings';
import { Logout } from './Pages/Logout';
import { NotFound } from './Pages/NotFound';
import { AppRoute } from './consts';

const App = () => {
    return (
        <Routes>
            <Route path={AppRoute.Root} element={<Layout />}>
                <Route index element={<Main />} />
                <Route path={AppRoute.Adress} element={<Adress />} />
                <Route path={AppRoute.Tables} element={<Tables />} />
                <Route path={AppRoute.Calendars} element={<Calendars />} />
                <Route path={AppRoute.Maps} element={<Maps />} />
                <Route path={AppRoute.Widgets} element={<Widgets />} />
                <Route path={AppRoute.ProfileSettings} element={<ProfileSettings />} />
                <Route path={AppRoute.FinanceSettings} element={<FinanceSettings />} />
                <Route path={AppRoute.Logout} element={<Logout />} />
                <Route path={AppRoute.NotFound} element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export { App };
