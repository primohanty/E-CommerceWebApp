import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import FilterData from "../components/FilterData";

const Home = () => {
  let allCategories = [];
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  

  async function fetchProductsData() {

    setLoading(true);
    try {
      
        const response = await fetch(API_URL);
        const data = await response.json();

        setProducts(data);

    }catch(error){

      console.log("Data not found", error);
      setProducts([]);

    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  if (products.length > 0) {

    allCategories.push("All");

    for (let i = 0; i < products.length; i++) {

      if (!allCategories.includes(products[i].category.toString())) {
        allCategories.push(String(products[i].category));
      }

    }

  } else {
    allCategories = [];
  }
  

  

  return (
    <div className="flex flex-col gap-y-4 mb-6 w-full h-full">

        <FilterData allCategories={allCategories} setLoading={setLoading} setProducts={setProducts}/>

        <div>

            {
                loading ? <Spinner />  :

                products.length > 0 ? 
                    (<div className="grid sm:grid-cols-2 md:grid-cols-3
                        lg:grid-cols-4 max-w-6xl p-4 mx-auto min-h-[80vh]">
                    {
                        products.map( (product) => (
                        <Product key = {product.id} product={product}/>
                    ) )
                    }
                    </div>) :
                    <div className="flex justify-center items-center">
                        <p>No Data Found</p>
                    </div> 
            }
        </div>

    </div>
  );
};    

export default Home
