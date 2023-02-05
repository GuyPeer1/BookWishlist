import { Route, Routes } from 'react-router';
import routes from './routes';

import { AppHeader } from './cmps/app-header.jsx';


export function RootCmp(){
    return (
        <section >
            <AppHeader />
            <main className='main-app' >
                <Routes>
                    {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                    <Route element={<AppHeader />} path="/app">
                    </Route>
                </Routes>
            </main>
            {/* <AppFooter /> */}
        </section >
    )
}
