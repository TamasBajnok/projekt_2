import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {

    
    const [image, setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category: "Salad"
    })

    const onChangeHandler= (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]: value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image",image)
        const response =await axios.post(`${url}/api/food/add`,formData);
        if (response.data.success){
            
            setData(
                {
                    name:"",
                    description:"",
                    price:"",
                    category: "Salad"
                })
            setImage(false);
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)

        }
        
    }

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-image-upload flex-col">
                <p>Kép feltöltés</p>
                <label htmlFor="image">
                    <img src={image? URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>
            <div className="add-product-name flex-col">
                <p>Étel neve</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Név' />
            </div>
            <div className="add-product-description flex-col">
                <textarea  onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Leírás' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Termék kategóriája</p>
                    <select  onChange={onChangeHandler} name="category">
                        <option value="Salad">Saláta</option>
                        <option value="Rolls">Tekercs</option>
                        <option value="Deserts">Desszert</option>
                        <option value="Sandwich">Szenvics</option>
                        <option value="Cake">Torta</option>
                        <option value="Pure Veg">Vegetáriánus</option>
                        <option value="Pasta">Amerikai tészta</option>
                        <option value="Noodles">Ázsia tészta</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Termék ára</p>
                    <input  onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20'/>
                </div>
            </div>
            <button type='submit' className='add-btn'>Hozzáadás</button>
        </form>
      
    </div>
  )
}

export default Add
