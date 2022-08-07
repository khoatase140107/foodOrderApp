import React from 'react'
import '../../App.css'
import YourCart from './YourCart'
import { themeContext } from '../../App'
import { useContext } from 'react'
export default function Header() {
const theme = useContext(themeContext)

  return (
    <div className='header' theme={theme}>
    <div className='title'><h3>Realmeats</h3></div>
    <YourCart/>
    </div>
  )
}
