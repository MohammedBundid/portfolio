import React from 'react'
import { useTheme } from '../../ThemeContext'

const Main = ({children, bg}) => {
    const {scheme} = useTheme()

    const mainStyle =  {
        backgroundImage: `url(${bg})`
    }

  return (
        <main className={`px-10 py-5 ${scheme ? 'dark-mode' : 'light-mode'}`} style={mainStyle}>
            <section className='min-h-screen'>
                {children}
            </section>
        </main>
  )
}

export default Main