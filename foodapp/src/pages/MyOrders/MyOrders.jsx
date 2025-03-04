import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import './MyOrders.css'
import {useContext, useEffect, useState} from 'react'
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const {url,token}=useContext(StoreContext);
    const[data,setData]=useState([]);


    const fetchOreders =async ()=>{
        const response=await axios.post(url+'/api/order/userorders',{},{headers:{token}});
        setData(response.data.data);
        
    }


    useEffect(()=>{
        if(token){
            fetchOreders();
        }
    },[token])



  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className='container'>
            {data.map((order,index)=>{
                return(
                    <div  key ={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt='' />
                        <p>{order.items.map((item,index)=>{
                            if(index===order.items.lengh-1){
                                return item.name+' x '+item.quantity
                            }
                            else{
                                 return item.name+' x '+item.quantity+', '
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items:{order.items.length}</p>
                        <p><span>&#x25cf;</span>{order.status}</p>
                        <button onClick={fetchOreders}>Track Order</button>

                    </div>
                )

            })}
        </div>
    </div>
  )
}

export default MyOrders