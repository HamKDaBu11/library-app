'use client'

import Card from "@/components/Card/Card";
import Form from "@/components/Form/Form";
import NavBar from "@/components/NavBar/NavBar";
import { useSearchParams } from "next/navigation";

export default function editBook(props: any) {
    const searchParams = useSearchParams();
    let book_data = JSON.parse(searchParams.get("book_item")!);

    console.log("BOOK DATA: ", book_data);

    return (
        <>
            <NavBar />
            <div className="flex justify-center mt-4">
                <Card className="w-3/4">
                    <h1 className="text-center">Edit Book</h1>
                    <Form book_data={book_data} />
                </Card>
            </div>
        </>
    )
}