import * as yup from "yup";

export const bookSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup
    .string()
    .matches(/^[a-zA-Z. ]*$/, { message: "Please enter only alphabets" })
    .required(),
  publishedDate: yup.string().required(),
  genre: yup
    .string()
    .matches(/^[a-zA-Z. ]*$/, { message: "Please enter only alphabets" })
    .required(),
});
