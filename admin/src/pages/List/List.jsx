import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from "react-toastify"

const List = ({url}) => {


  const [list,setList] = useState([]);

  const removeFood = async(foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success){
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const sendData= async (_id, meal) =>{
    const response = await axios.post(`${url}/api/food/dailyFoods`,{_id:_id,meal:meal});
    if (response.data.success){
      fetchList();
      toast.success("Done")
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>Minden étel megjelenítése</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Kép</b>
          <b>Név</b>
          <b>Kategória</b>
          <b>Ár</b>
          <b></b>
          <b>Napi ajánlatok</b>
          <b></b>
          <b>Törlés</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price} Ft</p>
              {item.status==1?<button className="daily_deal_picked">Ajánlva</button>:<button className="daily_deal" onClick={()=>sendData(item._id,1)}>Első ajánlat</button>}
              
              {item.status==2?<button className="daily_deal_picked">Ajánlva</button>:<button className="daily_deal" onClick={()=>sendData(item._id,2)}>Második ajánlat</button>}
              {item.status==3?<button className="daily_deal_picked">Ajánlva</button>:<button className="daily_deal" onClick={()=>sendData(item._id,3)}>Haramadik ajánlat</button>}
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default List;
