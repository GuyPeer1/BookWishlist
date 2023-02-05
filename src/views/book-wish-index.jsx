import { useEffect } from 'react';
import { BookPreview } from '../cmps/book-preview.jsx';
import { BookStatus } from '../cmps/book-status.jsx';


export function BookWishIndex() {
    useEffect(() => {
        console.log('hi')
    },[])

    return (
        <section className="book-wish-index">
            <BookPreview/>
            <BookStatus/>
        </section>
    )
}