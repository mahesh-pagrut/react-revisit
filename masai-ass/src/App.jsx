import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./components/productCard";

function App() {
  const [data, setData] = useState([]);
  // const [filteredProd, setFilteredProd] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const finalFetch = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const final = await res.json();
      setData(final);
    } catch (error) {
      console.log(error, "error in fetching the data");
    }
  };

  useEffect(() => {
    finalFetch();
  }, []);

  // useEffect(() =>{
  //   const timeoutId = setTimeout(()  => {

  //   })
  // })

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 bg-slate-200">
      <div className="flex justify-center m-4" >
      <h1 className="text-3xl font-bold m-4 text-blue-500 ">
        Products Dashboard
      </h1>
      <input 
      type="text"
      placeholder="Search Products by title"
      className="border px-4 py-2 m-4 rounded w-80"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
