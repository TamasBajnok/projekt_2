import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Tekintse meg a menüt!</h1>
        <p className='explore-menu-text'>Válasszon a változatos étlapról, amely a legfinomabb alapanyagokból és kulináris szakértelemmel elkészített ételek finom választékát tartalmazza. Küldetésünk, hogy kielégítsük vágyait és fokozzuk étkezési élményét, egy-egy ízletes étellel.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                        {console.log(item.menu_name)}
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
