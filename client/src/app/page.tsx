'use client'

import Card from '@/components/Card/Card';
import Dropdown from '@/components/Dropdown/Dropdown';
import NavBar from '@/components/NavBar/NavBar';
import { NextUIProvider } from "@nextui-org/react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BookList() {
    const router = useRouter();
    const [updatedGenres, setUpdatedGenres] = useState([]);
    const [isReload, setIsReload] = useState(false)

    const [booksTest, setBooksTest] = useState([]);

    useEffect(() => {
        const fetchBooksPromise = async () => {
            const books = await fetchBooks();
            setBooksTest(books);
        }

        const fetchGenresPromise = async () => {
            const genres = await fetchGenres();
            setUpdatedGenres(genres)
        }

        fetchBooksPromise()
        fetchGenresPromise()
    }, [isReload])

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/books/')
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    const fetchGenres = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/books/genres')
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }

    const createQueryString = (name: any, value: any) => {
        // debugger
        const params = new URLSearchParams();
        params.set(name, value)

        return params
    }

    function handleBooksFilter(e: any) {
        async function executeSearchFilterApi(queryString: any) {
            try {
                const response = await axios.get(`http://localhost:5000/api/books/search?query=${queryString}`)
                setBooksTest(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        executeSearchFilterApi(e)
    }

    const handleDeleteBook = (id: any) => {

        async function executeDeleteApi() {
            try {
                const response = await axios.delete(`http://localhost:5000/api/books/${id}`)
            } catch (error) {
                console.log(error)
            }
        }

        executeDeleteApi()
        setIsReload(true);
    }

    function handleGenresFilter(e: any) {
        async function executeGenreFilterApi(queryString: any) {
            try {
                const response = await axios.get(`http://localhost:5000/api/books/filter?genre=${queryString}`)
                setBooksTest(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        executeGenreFilterApi(e)
    }

    // console.log("IS RELOAD: ", isReload)
    console.log("updatedGenres: ", updatedGenres)

    return (
        <NextUIProvider>
            <div>
                <NavBar addBooksFilter={handleBooksFilter} />
                <div className='flex justify-end m-4'>
                    <Dropdown addGenresFilter={handleGenresFilter} genres={updatedGenres} />
                </div>
                <div className='flex justify-center mt-4'>
                    <ul>
                        {booksTest.length >= 1 ? booksTest.map((book: any) => {
                            return (
                                // <li key={book.id}>{book.title}</li>
                                <Card className="mb-1">
                                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">{book.title}</p>
                                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">{book.author}</p>
                                    <p className="font-normal text-center text-gray-700 dark:text-gray-400">{book.genre}</p>
                                    <div className="flex flex-col items-center">
                                        <div className="flex mt-4 md:mt-6">
                                            <button onClick={() => router.push('/editBook' + "?" + createQueryString('book_item', JSON.stringify(book)))} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Update Book</button>
                                            <button onClick={() => handleDeleteBook(book.id)} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete Book</button>
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