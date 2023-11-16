import { useDispatch, useSelector } from "react-redux"
import {AiFillStar} from "react-icons/ai"
import { toast } from "react-hot-toast";
import {add , remove} from "../redux/slices/cartSlice"
import { NavLink } from "react-router-dom";

const Product = ({product}) => {

    const {cart} = useSelector( (state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(product));
        toast.success("Item added to cart");
    }

    const removeFromCart = () => {
        dispatch(remove(product.id));
        toast.error("Item removed from cart");
    }

 
    return(
        

            <div className="max-h-96 flex flex-col items-center justify-between 
                hover:scale-110 hover:shadow-2xl shadow-slate-900 p-2 gap-2
                transition duration-300 ease-in rounded-xl mt-10 ml-5 group">

                <NavLink to={`/products/${product.id}`}>
                    <div className="text-gray-700 font-semibold text-lg truncate w-40 mt-1 mx-auto">
                        <p>{product.title.split(" ").slice(0,3).join(" ") + "..."}</p>
                    </div>

                    <div className="w-40 text-gray-400 font-normal text-[10px] mx-auto">
                        <p>{product.description.split(" ").slice(0,10).join(" ") + "..."}</p>
                    </div>

                    <div className="h-[180px] mt-1">
                        <img src = {product.image} alt="Product" className="h-full w-full"/>
                    </div>

                    <div className="flex items-center justify-center font-medium text-yellow-400 gap-1 mt-1">
                        <p>{product.rating.rate.toFixed(1)}</p>
                        <span>
                            <AiFillStar/>
                        </span>
                        
                    </div>
                </NavLink>
                
            <div className="flex justify-around gap-12 items-center w-full mt-2 mb-4">
                <div className="text-green-600 font-semibold">
                    <p>${product.price.toFixed(2)}</p>
                </div>
                {
                    cart.some( (p) => p.id === product.id) ?
                    (
                    <button onClick={removeFromCart} className="text-gray-700 border-gray-700 rounded-xl font-semibold 
                    text-[12px] p-1 px-3 outline uppercase transition duration-300 ease-in group-hover:bg-slate-900 group-hover:text-white">
                        Remove Item
                    </button>) : 

                    (
                    <button onClick={addToCart} className="text-gray-700 border-gray-700 rounded-xl font-semibold 
                    text-[12px] p-1 px-3 uppercase transition duration-300 ease-in outline  group-hover:bg-slate-900 group-hover:text-white">
                        Add Item
                    </button>)
                }
                </div>
            
            </div>
        
        
    )
}

export default Product
