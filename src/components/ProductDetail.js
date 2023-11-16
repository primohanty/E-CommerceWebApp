import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { productID } = useParams();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  const fetchProductDetails = async () => {
    setLoading(true);

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productID}`);
      const data = await response.json();

      setProduct(data);
    } catch (error) {
      console.log("Product data not found", error);
      setProduct({});
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div className="flex items-center justify-center h-full w-full">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col sm:flex-row max-w-screen-xl 
            mx-8 p-4 h-full my-10 sm:gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center p-2  border-none sm:border-b-2 lg:border-r-2 ">
            <img src={product.image} alt="Product" className="h-auto max-h-[60vh] object-cover" />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col p-2">
            <div className="text-gray-700 font-semibold text-xl sm:text-2xl mt-4">
              {product.title}
            </div>

            <div className="mt-4">
                <p className="text-green-600 font-semibold 
                text-lg">
                    ${product.price.toFixed(2)}
                </p>
            </div>
            <div className="text-gray-400 font-normal 
            text-base mt-4">
                {product.description}
            </div>

            <div className="flex items-center text-lg 
                font-medium text-yellow-400 my-4">
              <p>{product.rating.rate.toFixed(1)}</p>
              <span>
                <AiFillStar />
              </span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
