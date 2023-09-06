import { useDispatch,useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

export function useCartActions() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.products);
  
    const handleAddToCart=(item)=> {
      const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
  

    if (!isItemInCart) {
      dispatch(addToCart(item));
      toast.success(item.name + " adlı ürün sepete eklendi", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  const handleRemoveFromCart =(item)=> {
    dispatch(removeFromCart(item.id));
    toast.info(item.name + " adlı ürün sepetten çıkarıldı", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return { handleAddToCart, handleRemoveFromCart };
}