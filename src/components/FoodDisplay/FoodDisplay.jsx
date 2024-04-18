import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = () => {
    const{food_list} = useContext(StoreContext) 
  return (
    <div className='food-display' id='food-display' >
        <br />
        <hr />
        <br />
        <h2 style={{marginLeft:"20px"}}>Top Restaurants near you:</h2>
        <div className="food-display-list">
            {food_list.map((item,index) =>{
                return <FoodItem key={index} id={item._id} name={item.name} cuisine={item.cuisine} phone={item.phone} image={item.image} />
            })
            }

        </div>
      
    </div>
  )
}

export default FoodDisplay;
