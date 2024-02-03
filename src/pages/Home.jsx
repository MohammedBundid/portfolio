import { useTheme } from '../ThemeContext';
import avatar from '../assets/gamer.png'
import {AiFillLinkedin ,AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'

const Home = () => {
    const { scheme } = useTheme()

    return ( 
        <>
            
            <main className={`px-10 py-5 ${scheme ? 'dark-mode' : 'light-mode'}`}>
                <section className='min-h-screen'>
                    
                    <div className='text-center p-10 bg-gradient-to-r from-sky-950 to-cyan-900 text-white rounded-md text-xs md:text-xl w-full md:m-auto md:w-2/3'>
                        <div className="w-full h-full flex justify-center items-center  p-2">
                        <img src={avatar} 
                            className='w-20 h-20'
                        />
                        </div>
                        <h2 className='text-3xl md:text-5xl py-2 font-medium'>mohammed</h2>
                        <h3 className='text-2xl py-2'>developer</h3>
                        <p className='text-md leading-8 text-gray-200'>Hi, I&apos;m Mohammed, a passionate software developer and aspiring game developer with a love for crafting digital experiences.</p>
                    </div>
                    <div className="text-5xl flex justify-center gap-16 text-sky-950 py-3">
                        <AiFillLinkedin />
                        <AiFillTwitterCircle />
                        <AiFillYoutube />
                    </div>
                </section>
            </main>
        </>
    );
}
 
export default Home;