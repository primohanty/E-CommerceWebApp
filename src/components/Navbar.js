import {AiOutlineShoppingCart} from "react-icons/ai"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navbar = () =>{

    const {cart} = useSelector( (state) => state);

    return (
        <div>
            <nav>
                <div className="text-slate-100 h-20 flex items-center max-w-6xl font-medium justify-around">
                    <NavLink to="/">
                        <p className=" hover:text-slate-300
                        transition duration-200 ease-out hover:ease-in">Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <div className="relative">
                            <AiOutlineShoppingCart className="text-2xl"/>
                            <div>
                                {
                                cart.length > 0 &&
                                <span className="absolute -top-1 -right-1
                                 bg-green-600 text-xs w-4 h-4 flex 
                                 justify-center items-center animate-bounce rounded-full">
                                    {cart.length}
                                </span>
                            }
                            </div>
                            
                            
                        </div>
                    </NavLink> 
                </div>
                    
                
            </nav>
        </div>
    )
}
export default Navbar
