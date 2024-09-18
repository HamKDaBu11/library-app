'use client'
 
import { useRouter } from 'next/navigation'

const Card = (props: any) => {
    const router = useRouter()

    return (
        <>
            <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4'>
                <p className="font-normal text-center text-gray-700 dark:text-gray-400">{props.title}</p>
                <div className="flex flex-col items-center">
                    <div className="flex mt-4 md:mt-6">
                        <button onClick={() => router.push('/editBook')} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Update Book</button>
                        <button onClick={() => router.push('/deleteBook')} className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete Book</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
