import { storageService } from "./async-storage.service"
import { makeId } from "./util.service"
import { updateBook } from "../store/book.action"


const BOOKS_KEY = 'BOOKS_KEY'

export const bookService = {
    query,
    getById,
    save,
    sumCost,
    onToggleWishList,
    getEmptySort
}

function sumCost(books) {
    return books.reduce((total, book) => total + book.price, 0)
}

_createBooks()

function _createBooks() {
    let books = storageService.loadFromStorage(BOOKS_KEY)
    if (!books) {
        books = [
            {
                "_id": makeId(),
                "title": "Sea of Death",
                "description": "Written in 1936 when Amado was twenty-four years old, Sea of Death tells the dockside tales of Bahia. Sailors and their wives, steeped in the rich mythology surrounding the goddess Iemanj?, are at the heart of this novel, a lyrical and tragic portrayal of the workers� daily struggle for survival. Sea of Death narrates the story of Guma and L?via, lovers whose triumphs and tribulations mirror the dark imperatives of the world around them.",
                "rating": 4.2,
                "author": "Jorge Amado",
                "price": 16.35,
                "inWishList": false
            },
            {
                "_id": makeId(),
                "title": "The Day Lasts More than a Hundred Years",
                "description": "Set in the vast windswept Central Asian steppes and the infinite reaches of galactic space, this powerful novel offers a vivid view of the culture and values of the Soviet Union�s Central Asian peoples.",
                "rating": 4.5,
                "author": "Chingiz Aitmatov",
                "price": 24,
                "inWishList": false
            },
            {
                "_id": makeId(),
                "title": "The Element of Surprise: Navy SEALS in Vietnam",
                "description": "t used to be said that the night belonged to Charlie. But that wasn't true where SEALs patrolled. For six months in 1970, fourteen men in Juliett Platoon of the Navy's SEAL Team One--incuding the author--carried out over a hundred missions in the Mekong Delta without a single platoon fatality. Their primary mission: kidnap enemy soldiers--alive--for interrogation.",
                "rating": 4.3,
                "author": "Darryl Young",
                "price": 7.99,
                "inWishList": false
            },
            {
                "_id": makeId(),
                "title": "The Hobbit",
                "description": "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
                "rating": 4.7,
                "author": "J.R.R. Tolkien",
                "price": 10.63,
                "inWishList": false
            },
            {
                "_id": makeId(),
                "title": "Only a Whisper",
                "description": "Called in the night to transcribe the bedridden confession of a dying man, federal agent Rae Phillips lost her heart to a voice in the darkness, a hero whose face she never saw�",
                "rating": 2.1,
                "author": "Gayle Wilson",
                "price": 2.78,
                "inWishList": false
            },
            {
                "_id": makeId(),
                "title": "Autobiography of a Yogi",
                "description": "Autobiography of a Yogi is at once a beautifully written account of an exceptional life and a profound introduction to the ancient science of Yoga and its time-honored tradition of meditation",
                "rating": 4.6,
                "author": "Paramahansa Yogananda",
                "price": 18,
                "inWishList": false
            },
            {
                "_id": makeId(),
                "title": "Out There",
                "description": "Out There is a celebration of books that have a made a difference in our lives.",
                "rating": 3.2,
                "author": "Sarah Stark",
                "price": 10.14,
                "inWishList": false
            },
            {
                "_id": makeId(),
                "title": "Crafting with Cat Hair: Cute Handicrafts to Make with Your Cat",
                "description": "Got fur balls?",
                "rating": 3.6,
                "author": "Kaori Tsutaya",
                "price": 9.97,
                "inWishList": false
            },
            {
                "_id": makeId(),
                "title": "The Yiddish Policemen's Union Kindle Edition",
                "description": "Set in the Jewish homeland of � Alaska, this is a brilliantly original novel from Michael Chabon, author of THE ADVENTURES OF KAVALIER & CLAY and WONDER BOYS.",
                "rating": 3.7,
                "author": "Michael Chabon",
                "price": 21.33,
                "inWishList": true
            },
            {
                "_id": makeId(),
                "title": "One More Day",
                "description": "Carrie Morgan's son disappears. Rumors start to circulate through Carrie's small town. Her husband and friends start to think she's crazy. As the investigation heats up, Carrie must decide what to share, and why.",
                "rating": "3.1",
                "author": "Kelly Simmons",
                "price": 25.82,
                "inWishList": true
            },
            {
                "_id": makeId(),
                "title": "The Laundry Room",
                "description": "The Laundry Room dramatizes a fascinating moment in the history of the founding of Israel as a self-ruling nation.",
                "rating": 4,
                "author": "Lynda Lippman-Lockhart",
                "price": 17.5,
                "inWishList": true
            }
        ]
        console.log('from data no good !')
        storageService.saveToStorage(BOOKS_KEY, books)
    }
}

async function query(sortBy) {
    try {
        console.log(sortBy.type)
        let books = await storageService.query(BOOKS_KEY)
        let sortBooks = books
        if (sortBy.type === 'price') {
            sortBooks = sortBooks.sort((b1, b2) => (b2.price - b1.price))
        }
        if (sortBy.type === 'title') {
            sortBooks = sortBooks.sort((b1, b2) => (b2.title.length - b1.title.length))
        }
        if (sortBy.type === 'rating') {
            sortBooks = sortBooks.sort((b1, b2) => (b2.rating - b1.rating))
        }
        return books
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function getById(bookId) {
    try {
        const book = await storageService.getById(bookId)
        return book
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function save(book) {
    if (book._id) {
        try {
            const bookToSave = await storageService.put(BOOKS_KEY, book)
            return bookToSave
        } catch (err) {
            console.log(err)
            throw err
        }
    } else {
        try {
            const bookToSave = await storageService.post(BOOKS_KEY, book)
            return bookToSave
        } catch (err) {
            console.log(err)
            throw err
        }
    }
}

async function onToggleWishList(currBook) {
    console.log('fromse')
    currBook.inWishList = !currBook.inWishList
    await updateBook(currBook)
}

function getEmptySort() {
    return { price: '', title: '', rating: '' }
}