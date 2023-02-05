import { useState } from "react"

export function BookSort() {
    const [sortBy, setSortBy] = useState(null)

    const handleClick = type => {
        setSortBy(type)
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