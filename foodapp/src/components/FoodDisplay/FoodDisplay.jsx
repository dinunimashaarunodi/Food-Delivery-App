import './FoodDisplay.css'
import { useContext } from 'react'; // Fix: Import useContext
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext); // Make sure useContext is used

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list.map((item, index) => {
                  
                  if(category==='All' ||category===item.category){
                    return (  // Fix: Place return on the same line
                      <FoodItem
                          key={index}
                          id={item._id}
                          name={item.name}
                          description={item.description}
                          price={item.price}
                          image={item.image}
                      />
                  );
                  }
                    
                })}
            </div>
        </div>
    )
}

export default FoodDisplay;
