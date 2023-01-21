import '../ClientProfile/client.css'
import clientimg from '../ClientProfile/assets/clientimg.jpg'
import {GrLocation} from 'react-icons/gr'
import {SlSocialInstagram} from 'react-icons/sl'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsFillBagFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {AiOutlineIdcard} from 'react-icons/ai'
import {SlUserFollow} from 'react-icons/sl'
import {SiWebauthn} from 'react-icons/si'
import About from '../ClientProfile/About'
import Jobs from '../ClientProfile/Jobs'
import Portfolio from '../ClientProfile/Portfolio'
import { Link, Route, Routes } from 'react-router-dom'
import header from '../ClientProfile/assets/header.png'



const clientProfile = () => {
  return (
    <div className='client-profile'>
        <div className='top-nav'>
            <img src={header} alt="" className='nav-img' />
        <div className='client-nav'>
            <div className='client-img'>
            <img src={clientimg} alt="placeholder" />
            </div>
            <div className='nav-links'>
            <Link to='/'><p className='about-nav'><AiOutlineInfoCircle/>About</p></Link>
            <Link to='/jobs'><p className='jobs-nav'><BsFillBagFill />Jobs</p></Link>
            <Link to='/portfolio'><p className='portfolio-nav'><AiOutlineIdcard />potfolio</p></Link>
            </div>
        </div>
        </div>
        <div className='cbox'>
        <div className='clientBox-1'>
            <h2>Fourwall Magazine</h2>
            <p><GrLocation /> Lagos, Nigeria</p>
            <p><SiWebauthn />www.fourwallmag.com</p>
            <Link><button><SlUserFollow /> Follow</button></Link>
            <div className='followSection'>
                <div className='following'>
                    <p>Following</p>
                    <p>106</p> 
                </div>
                <div className='followers'>   
                    <p>Followers</p>
                    <p>547</p>
                </div>
            </div>
            <div className="socialMediaButtons">
            <Link><SlSocialInstagram /></Link>
            <Link><AiFillFacebook /></Link>
            <Link><AiFillTwitterCircle /></Link>
            </div>
        </div>
        <div className="clientBox-2">

            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/jobs' element={<Jobs />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
    
        </div>
        </div>
    </div>
  )
}

export default clientProfile