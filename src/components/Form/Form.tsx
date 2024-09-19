'use client'

import { bookSchema } from '@/schemas';
import { useFormik } from 'formik';

const Form = (props: any) => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            title: props.book_data.title,
            author: props.book_data.author,
            publishedDate: props.book_data.publishedDate,
            genre: props.book_data.genre
        },
        validationSchema: bookSchema,
        onSubmit: () => {
            console.log("Submitted")
        },
    });

    console.log(formik.errors)

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='title' className='block text-xs font-medium text-gray-700 mt-2'>Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.title}
                className={`${formik.errors.title && formik.touched.title ? 'border-rose-600' : ""} mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm p-2`}
            />
            {formik.errors.title && formik.touched.title && <p className='text-rose-600 text-xs'>{formik.errors.title as String}</p>}
            <label htmlFor='author' className='block text-xs font-medium text-gray-700 mt-2'>Author</label>
            <input
                id="author"
                name="author"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.author}
                className={`${formik.errors.author && formik.touched.author ? "border-rose-600" : ""} mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm p-2`}
            />
            {formik.errors.author && formik.touched.author && <p className='text-rose-600 text-xs'>{formik.errors.author as String}</p>}
            <label htmlFor='publishedDate' className='block text-xs font-medium text-gray-700 mt-2'>Published Date</label>
            <input
                id="publishedDate"
                name="publishedDate"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.publishedDate}
                className={`${formik.errors.publishedDate && formik.touched.publishedDate ? 'border-rose-600' : ""} mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm p-2`}
            />
            {formik.errors.publishedDate && formik.touched.publishedDate && <p className='text-rose-600 text-xs'>{formik.errors.publishedDate as String}</p>}
            <label htmlFor='genre' className='block text-xs font-medium text-gray-700 mt-2'>Genre</label>
            <input
                id="genre"
                name="genre"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.genre}
                className={`${formik.errors.genre && formik.touched.genre ? 'border-rose-600' : ""} mt-1 w-full rounded-md border border-gray-200 shadow-sm sm:text-sm p-2`}
            />
            {formik.errors.genre && formik.touched.genre && <p className='text-rose-600 text-xs'>{formik.errors.genre as String}</p>}
            <button type="submit" className='border w-full rounded-full my-4 py-2 bg-teal-400'>
                <span>Submit</span>
            </button>
        </form>
    );
};

export default Form;