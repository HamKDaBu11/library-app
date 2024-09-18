import Link from 'next/link'

const NavBar = () => {
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
        </nav>
    )
}

export default NavBar
