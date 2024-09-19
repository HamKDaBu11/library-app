'use client'

import Card from '@/components/Card/Card';
import Dropdown from '@/components/Dropdown/Dropdown';
import NavBar from '@/components/NavBar/NavBar';
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const BOOKS = [
    {
        id: 1,
        title: 'Circe',
        author: 'Madeline Miller',
        publishedDate: '2018',
        genre: 'Fantasy'
    },
    {
        id: 2,
        title: 'The Night Circus',
        author: 'Erin Morgenshtern',
        publishedDate: '2011',
        genre: 'Fantasy'
    },
    {
        id: 3,
        title: 'Assassin Apprentice',
        author: 'Robin Hobb',
        publishedDate: '1995',
        genre: 'Fantasy'
    },
    {
        id: 4,
        title: 'A Game of Thrones',
        author: 'George R.R Martin',
        publishedDate: '1996',
        genre: 'Fantasy'
    },
    {
        id: 5,
        title: 'A Storm of Swords',
        author: 'George R.R Martin',
        publishedDate: '1996',
        genre: 'Fantasy'
    },
    {
        id: 6,
        title: 'The Hound of the Baskervilles',
        author: 'Arthur Conan Doyle',
        publishedDate: '1885',
        genre: 'Crime'
    },
]

const GENRES = [
    { id: 1, title: 'Fantasy' },
    { id: 2, title: 'Crime' }
]

export default function BookList() {
    const router = useRouter();
    const [updatedBooks, setUpdatedBooks] = useState(BOOKS);
    const [updatedGenres, setUpdatedGenres] = useState(GENRES);

    const createQueryString = (name: any, value: any) => {
        // debugger
        const params = new URLSearchParams();
        params.set(name, value)

        return params
    }

    function handleBooksFilter(e: any) {
        // console.log("EVENT: ", e)
        setUpdatedBooks(BOOKS.filter((book: any) => {
            return (
                book.title.toLowerCase().trim().includes(e.toLowerCase())) || book.author.toLowerCase().trim().includes(e.toLowerCase())
        }))
    }

    function handleGenresFilter(e: any) {
        setUpdatedBooks(BOOKS.filter((book: any) => {
            return (
                book.genre === e
            )
        }))
    }

    console.log("UPDATED BOOKS: ", updatedBooks)

    return (
        <NextUIProvider>
            <div>
                <NavBar addBooksFilter={handleBooksFilter} />
                <div className='flex justify-end m-4'>
                    <Dropdown addGenresFilter={handleGenresFilter} genres={GENRES} />
                </div>
                <div className='flex justify-center mt-4'>
                    <ul>
                        {updatedBooks.length >= 1 ? updatedBooks.map((book: any) => {
                            return (
                                // <li key={book.id}>{book.title}</li>
                                <Card className="mb-1">
                                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">{book.title}</p>
                                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">{book.author}</p>
                                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">{book.genre}</p>
                                    <div className="flex flex-col items-center">
                                        <div className="flex mt-4 md:mt-6">
                                            <button onClick={() => router.push('/editBook' + "?" + createQueryString('book_item', JSON.stringify(book)))} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Update Book</button>
                                            <button onClick={() => router.push('/deleteBook')} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete Book</button>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })
                            :
                            <h1>Sorry, this book does not exist.</h1>
                        }
                    </ul>
                </div>
            </div>
        </NextUIProvider>
    )
}