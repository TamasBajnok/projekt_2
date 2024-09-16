import React, { useContext, useState } from 'react'
import './Menu.css'
import Header from '../../components/Header/HEader'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import { StoreContext } from '../../context/StoreContext'

const Menu = () => {
    const [category, setCategory] = useState("All");
    const {setMenu} =useContext(StoreContext)
    setMenu("menu")
    return (
      <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
      </div>
    )
}

export default Menu
