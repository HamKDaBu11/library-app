import Card from "@/components/Card/Card";
import Form from "@/components/Form/Form";
import NavBar from "@/components/NavBar/NavBar";

export default function addBook() {
    return (
        <>
            <NavBar />
            <div className="flex justify-center mt-4">
                <Card className="w-3/4">
                    <h1 className="text-center">Add Book</h1>
                    <Form />
                </Card>
            </div>
        </>
    )
}