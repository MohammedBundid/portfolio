import { Link } from 'react-router-dom'
import Main from '../components/ui/Main'

const About = () => {
  return (
    <>
      <Main>
        <div className="w-3/4 m-auto rounded-md p-4 leading-10">
          <h2 className="text-center text-3xl">hello world</h2>
          <p>I am a passionate software developer who loves playing with code. Coding has been a wonderful journey of mine that has led me to so many opportunities as a learner . It has taken me from the deep depths of not knowing how the web works, how systems communicate and manage hardware resources and how games are made to making my own websites , programming my own system apps and making games. Headover to the <Link to="/skills" className='underline text-xl text-green-500 capitalize'>skills</Link> tab to see what i have acquired throughout my journey </p>
        </div>
      </Main>
    </>
  )
}

export default About