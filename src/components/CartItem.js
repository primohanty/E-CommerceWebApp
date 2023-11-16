import {MdOutlineDeleteOutline} from "react-icons/md"
import { useDispatch} from "react-redux";
import {remove } from "../redux/slices/cartSlice"
import {toast} from "react-hot-toast"

const CartItem = ({item}) =>{
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from cart");
    }

    return(
        <div className="flex flex-col sm:flex-row max-w-xl w-full md:w-[500px] h-auto md:h-[200px] p-2 gap-x-2 gap-y-5 border-b-2">

            <div className="h-full min-w-[150px] p-1">
                <img src={item.image} alt="Cart Item" className="h-full w-full max-h-96 max-w-xs mx-auto"/>
            </div>

            <div className="flex flex-col w-full p-2">

                <h1 className="text-gray-700 font-semibold text-lg">{item.title}</h1>
                <h1 className="text-gray-400 font-normal text-[10px] mt-2">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>

                <div className="flex justify-between mb-2 mt-7 items-center">

                    <p className="text-green-600 font-semibold">${item.price.toFixed(2)}</p>

                    <div onClick={removeFromCart} className="flex items-center justify-center rounded-full 
                    w-7 h-7 bg-red-300 hover:bg-red-500 group cursor-pointer">
                        <MdOutlineDeleteOutline className="text-black group-hover:text-white"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default CartItem
