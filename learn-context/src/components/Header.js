import React from 'react';
import '../App.css'

export const Header = (props) => {

      const changeColor = () => {
      console.log('change')
    }
    
    return (
        <button 
            onClick={changeColor}
            className='changeTheme '>Change theme</button>
    )
}