import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useMovieContext } from '../context/MovieContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const { setMovies, movies } = useMovieContext();
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8F5FF] min-h-screen p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6 border border-[#E0D7F9]">
        <h2 className="text-2xl font-bold text-[#6D28D9] mb-6 text-center">🎬 Add a New Movie</h2>

        <Formik
          initialValues={{
            title: '',
            director: '',
            genre: '',
            year: '',
            rating: '',
            synopsis: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.title) errors.title = 'Required';
            if (!values.director) errors.director = 'Required';
            if (!values.genre) errors.genre = 'Required';
            if (!values.year || +values.year < 1900) errors.year = 'Invalid year';
            if (!values.rating || values.rating < 1 || values.rating > 10)
              errors.rating = 'Rating 1-10';
            return errors;
          }}
          onSubmit={(values) => {
            const newMovie = { ...values, id: Date.now().toString() };
            setMovies([...movies, newMovie]);
            toast.success('Movie Added!');
            navigate('/');
          }}
        >
          <Form className="space-y-5">
            {/* First Row: Title + Director */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#4C1D95] mb-1">Title</label>
                <Field
                  name="title"
                  placeholder="Movie title"
                  className="w-full p-2 rounded-md border border-[#D8B4FE] focus:ring-2 focus:ring-[#C084FC] focus:outline-none"
                />
                <ErrorMessage name="title" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4C1D95] mb-1">Director</label>
                <Field
                  name="director"
                  placeholder="Director"
                  className="w-full p-2 rounded-md border border-[#D8B4FE] focus:ring-2 focus:ring-[#C084FC] focus:outline-none"
                />
                <ErrorMessage name="director" component="div" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            {/* Second Row: Genre + Year */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#4C1D95] mb-1">Genre</label>
                <Field
                  name="genre"
                  placeholder="Genre"
                  className="w-full p-2 rounded-md border border-[#D8B4FE] focus:ring-2 focus:ring-[#C084FC] focus:outline-none"
                />
                <ErrorMessage name="genre" component="div" className="text-red-500 text-xs mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4C1D95] mb-1">Year</label>
                <Field
                  name="year"
                  placeholder="Year"
                  type="number"
                  className="w-full p-2 rounded-md border border-[#D8B4FE] focus:ring-2 focus:ring-[#C084FC] focus:outline-none"
                />
                <ErrorMessage name="year" component="div" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            {/* Third Row: Rating */}
            <div>
              <label className="block text-sm font-medium text-[#4C1D95] mb-1">Rating (1–10)</label>
              <Field
                name="rating"
                placeholder="Rating"
                type="number"
                className="w-full p-2 rounded-md border border-[#D8B4FE] focus:ring-2 focus:ring-[#C084FC] focus:outline-none"
              />
              <ErrorMessage name="rating" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Synopsis – full width */}
            <div>
              <label className="block text-sm font-medium text-[#4C1D95] mb-1">Synopsis</label>
              <Field
                name="synopsis"
                as="textarea"
                placeholder="Short description"
                rows="3"
                className="w-full p-2 rounded-md border border-[#D8B4FE] focus:ring-2 focus:ring-[#C084FC] focus:outline-none resize-none"
              />
              <ErrorMessage name="synopsis" component="div" className="text-red-500 text-xs mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-[#C084FC] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#A855F7] transition"
            >
              ➕ Add Movie
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddMovie;
