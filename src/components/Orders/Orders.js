import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import AddCart from "../AddCart/AddCart";
import Cart from "../Cart/Cart";
import './Orders.css'


const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart,setCart] =useCart(products);

  const handleRemoveItem = product => {
    const rest = cart.filter(pd => pd.id !== product.id)
    setCart(rest);
    removeFromDb(product.id)
  }

  return (
    <div>
      <div className="shop-container">
        <div>
            {
                cart.map(cartItem => <AddCart 
                  cartItem={cartItem}
                  handleRemoveItem = {handleRemoveItem}></AddCart>)
            }
        </div>
        <div className="cart-container">
            <Cart cart={cart}>
              <Link to='/inventory'>
                <button className="review-btn">Proceed Orders</button>
              </Link>
            </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
