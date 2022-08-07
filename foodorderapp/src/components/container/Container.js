import React, { useState } from 'react'
import '../../App.css'
import { useEffect } from 'react'
import Amount from './Amount'
import { themeContext } from '../../App'
import { useContext } from 'react'
export default function Container() {
    const [meals,setMeals]=useState([])
    const theme = useContext(themeContext)

    useEffect(() => {
          fetch('https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals')
          .then(res => res.json())
          .then(meals => {
           setMeals(meals.splice(0,4))
          })
        
    },[])
  return (
    <div className='container' theme={theme}>
        <div className='menu-container'>
        <div className='menu-wrap'>
        {meals.map((meal,index) => (
            <div className='menu'>
            <div className='wrapped'>
            <div className='img-memu'>
               <img src={meal.image} alt=''/>
            </div>

            <div className='info-menu'>
               <p> {meal.name}</p>
               <p><i>{meal.description}</i></p>
               <p>${meal.price}</p>
            </div>
            </div>
            <Amount/>
            </div>
        ))}
        
        </div>
        </div>
    </div>
  )
}
