import { BookSort } from '../cmps/book-sort.jsx';
import { BookList } from '../cmps/book-list.jsx';


export function BookStatus({books}){

    return <section className="book-status">
        <BookSort/>
        <BookList books={books}/>
    </section>
}