import AppDownload from '../../components/AppDownload/AppDownload';
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/foodDisplay'
import Header from '../../components/Header/Header'
import './Home.css'
import  { useState } from "react"; 


export const Home = () => {

     const[category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
