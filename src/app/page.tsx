'use client'

import Card from '@/components/Card/Card';
import NavBar from '@/components/NavBar/NavBar';
import { useRouter } from 'next/navigation';

const BOOKS = [
    {
        id: 1,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
    {
        id: 2,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
    {
        id: 3,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
    {
        id: 4,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
    {
        id: 5,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
    {
        id: 6,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
    {
        id: 7,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
    {
        id: 8,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
    {
        id: 9,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
    {
        id: 10,
        title: 'Murder Machine',
        author: 'Jerry Capeci',
        publishedDate: '24 January 1990'
    },
]

export default function BookList() {
    const router = useRouter();

    return (
        <div>

            <NavBar />
            <div className='flex justify-center mt-4'>
                <ul>
                    {BOOKS.map((book: any) => {
                        return (
                            // <li key={book.id}>{book.title}</li>
                            <Card className="mb-1" title={book.title} />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}