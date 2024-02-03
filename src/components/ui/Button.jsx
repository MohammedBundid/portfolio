import React from 'react'
import { useTheme } from '../../ThemeContext'

const Button = ({ title, onClick }) => {
    const {scheme} = useTheme()

  return (
    <>
        <button onClick={onClick}  className={`py-1 px-4 rounded-md bg-zinc-500  ${scheme ? 'dark-mode' : 'light-mode'} `}>
            {title}
        </button>
    </>
  )
}

export default Button