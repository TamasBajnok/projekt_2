import React, { useState } from 'react'
import './Menu.css'
import Header from '../../components/Header/HEader'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Menu = () => {
    const [category, setCategory] = useState("All");

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
