import { useState } from "react"
import { useSelector } from "react-redux"
import { bookService } from "../services/book-service"
import { onSetSort } from "../store/book.action"

export function BookSort() {
    const sortBy = useSelector(storeState => storeState.bookModule.sortBy)
    const [editsortBy, editsetSortBy] = useState(bookService.getEmptySort())

    const handleClick = type => {
        editsetSortBy({ type: type })
        onSetSort(editsortBy)
    }

    return (
        <section className="book-sort">
            <span
                className={`title ${sortBy === 'title' ? 'picked' : ''}`}
                onClick={() => handleClick('title')}
            >
                Title
            </span>
            <span
                className={`price ${sortBy === 'price' ? 'picked' : ''}`}
                onClick={() => handleClick('price')}
            >
                Price
            </span>
            <span
                className={`rating ${sortBy === 'rating' ? 'picked' : ''}`}
                onClick={() => handleClick('rating')}
            >
                Rating
            </span>
        </section>
    )
}