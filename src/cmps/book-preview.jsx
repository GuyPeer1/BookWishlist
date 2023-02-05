import { useEffect, useState } from "react"

export function BookPreview({ books }) {

    const [currBook, setCurrBook] = useState(books[0])


    return <article className="book-preview">
        <div className="preview-head flex space-between">
            <h2>{currBook.title}</h2>
            <input type="checkbox" />
        </div>
        <hr className="my-hr" />
        <h2 className="author">{currBook.author}</h2>
        <div className="book-desc">
            <p>
                {currBook.description}
            </p>
        </div>
        <div className="rating flex">
            <p>Rating: {currBook.rating}</p>
        </div>
        <div className="price flex">
            <p>{`Price: $${currBook.price}`}</p>
        </div>
    </article>
}