import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const saveBookToStorage = (book) => {
  const existing = JSON.parse(localStorage.getItem("books")) || [];
  localStorage.setItem("books", JSON.stringify([...existing, book]));
};

const AddBook = () => {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    author: "",
    genre: "",
    price: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    genre: Yup.string().required("Genre is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be greater than 0"),
    description: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newBook = {
      ...values,
      id: Date.now(),
    };
    saveBookToStorage(newBook);
    resetForm();
    navigate("/"); 
    toast.success("Book added successfully!");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-indigoPrimary mb-6">Add a New Book</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 bg-white p-6 rounded-xl shadow-md">
           
            <div>
              <label className="block font-medium text-gray-700">Title</label>
              <Field
                name="title"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigoPrimary"
              />
              <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Author</label>
              <Field
                name="author"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigoPrimary"
              />
              <ErrorMessage name="author" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Genre</label>
              <Field
                name="genre"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigoPrimary"
              />
              <ErrorMessage name="genre" component="div" className="text-red-500 text-sm" />
            </div>

            
            <div>
              <label className="block font-medium text-gray-700">Price (₹)</label>
              <Field
                name="price"
                type="number"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigoPrimary"
              />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Description (optional)</label>
              <Field
                as="textarea"
                name="description"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigoPrimary"
              />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-indigoPrimary text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
            >
              {isSubmitting ? "Adding..." : "Add Book"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBook;
