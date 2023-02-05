import { BookSort } from '../cmps/book-sort.jsx';
import { BookList } from '../cmps/book-list.jsx';


export function BookStatus(){
    return <section className="book-preview">
        <BookSort/>
        <BookList/>
    </section>
}