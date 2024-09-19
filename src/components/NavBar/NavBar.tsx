'use client'

import { Input } from "@nextui-org/input";
import Link from 'next/link';
import { useState } from "react";

const NavBar = (props: any) => {
    const [input, setInput] = useState("")

    function handleInput(e: any) {
        setInput(e.target.value)
        props.addBooksFilter(input)
    }

    return (
        <nav className="flex items-center bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Library</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/addBook" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Add Book
                    </Link>
                </div>
            </div>
            <div className="flex w-1/4 flex-wrap md:flex-nowrap gap-4">
                <Input size="sm" type="text" value={input} label="Search books by title or author...." onChange={handleInput} />
            </div>
        </nav>
    )
}

export default NavBar
