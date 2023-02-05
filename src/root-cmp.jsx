import { Route, Routes } from 'react-router';

import { AppHeader } from './cmps/app-header.jsx';
import { BookWishIndex } from './views/book-wish-index';


export function RootCmp(){
    return (
        <section >
            <AppHeader />
            <main className='main-app' >
                <Routes>
                    <Route element={<BookWishIndex />} path="/">
                    </Route>
                </Routes>
            </main>
        </section >
    )
}
