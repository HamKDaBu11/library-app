'use client'

import Card from '@/components/Card/Card';
import NavBar from '@/components/NavBar/NavBar';
import { useRouter } from 'next/navigation';

const BOOKS = [
    {
        id: 1,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
    {
        id: 2,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
    {
        id: 3,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
    {
        id: 4,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
    {
        id: 5,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
    {
        id: 6,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
    {
        id: 7,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
    {
        id: 8,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
    {
        id: 9,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
    {
        id: 10,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990',
        genre: 'Crime'
    },
]

export default function BookList() {
    const router = useRouter();

    const createQueryString = (name: any, value: any) => {
        // debugger
        const params = new URLSearchParams();
        params.set(name, value)

        return params
    }

    return (
        <div>
            <NavBar />
            <div className='flex justify-center mt-4'>
                <ul>
                    {BOOKS.map((book: any) => {
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
                    })}
                </ul>
            </div>
        </div>
    )
}