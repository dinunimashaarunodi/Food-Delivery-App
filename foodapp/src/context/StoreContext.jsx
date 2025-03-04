import { createContext,  useEffect,  useState } from "react";
export const StoreContext = createContext(null);
import axios from 'axios'

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});
  const url='http://localhost:4000'
  const [token,setToken]= useState('');
  const [food_list,setFoodList]=useState([])

  const addToCart =  async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
    }
  };



  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token){
      await axios.post(url+'/api/cart/remove',{itemId},{headers:{token}})
    }
  };



  const getTotalCartAmount = () => {
    let totalAmonut = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmonut += itemInfo.price * cartItems[item];
      }
    }
    return totalAmonut;
  }
  const fetchFoodList =async()=>{
    const response =await axios.get(url+'/api/food/list');
    setFoodList(response.data.data)
  }
//modified
  const localCartData = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
      if (response.data && response.data.cartData) {
        setCartItems(response.data.cartData);
      } else {
        setCartItems({}); // ✅ Default to empty object if no data
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setCartItems({}); // ✅ Ensure cartItems is always an object
    }
  };
  

  useEffect(()=>{
    
    async function loadData() {
      await  fetchFoodList();
      if(localStorage.getItem('token')){
        setToken(localStorage.getItem('token'));
        await localCartData(localStorage.getItem('token'));
      }
    }
    loadData();
  },[])

  useEffect(() => {
    console.log("Updated cartItems:", cartItems); // ✅ Debugging log
  }, [cartItems]);


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;


