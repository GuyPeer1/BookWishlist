import { BookPreview } from '../cmps/book-preview.jsx';
import { BookStatus } from '../cmps/book-status.jsx';


export function BookWishIndex() {
    return (
        <section className="book-wish-index">
            <BookPreview/>
            <BookStatus/>
        </section>
    )
}