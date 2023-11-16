import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="mt-4">
      {cart.length > 0 ? (
        <div className="max-w-screen-xl mx-auto p-4 md:p-0 
        flex flex-col md:flex-row md:justify-between gap-y-4 my-6">
          <div className="md:w-2/3 flex flex-col items-center">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="w-full md:w-1/3 p-2 md:mt-0">
            <div className="text-medium text-green-600 font-medium">
              <p>Your Cart</p>
              <h1 className="text-2xl md:text-3xl mt-3 md:mt-0">SUMMARY</h1>
            </div>

            <div className="font-medium">
              <span>Total Items: {cart.length}</span>
            </div>

            <p className="font-medium mt-4">
              Total Amount : <span className="font-bold"> ${totalAmount.toFixed(2)}</span>
            </p>

            <div className="flex flex-col items-center justify-center mt-4">
              <button className=" p-2 w-full md:w-auto h-10 rounded-lg bg-green-600 text-white font-bold">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-2 font-medium p-4">
          <p>Your Cart is Empty</p>
          <NavLink to="/">
            <button className="flex items-center justify-center w-full md:w-[100px] h-10 md:h-[35px] bg-green-600 rounded-lg text-white p-2">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
