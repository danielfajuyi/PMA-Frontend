import '../ClientProfile/portfolio.css'

import portfolio1 from '../ClientProfile/assets/portfolio1.jpg'
import portfolio2 from '../ClientProfile/assets/portfolio2.jpg'
import portfolio3 from '../ClientProfile/assets/portfolio3.jpg'
import portfolio4 from '../ClientProfile/assets/portfolio4.jpg'
import portfolio5 from '../ClientProfile/assets/portfolio5.jpg'
import portfolio6 from '../ClientProfile/assets/portfolio6.jpg'


const Portfolio = () => {

  const portfolioImgs =[
    {image: portfolio1},
    {image: portfolio2},
    {image: portfolio3},
    {image: portfolio4},
    {image: portfolio5},
    {image: portfolio6},
  ]

  return (
    < div className='imgs'>
        {
          portfolioImgs.map(imgs=>(
            <img src={imgs.image} alt=""/>
          ))
        }
            
        
        
    </div>
  )
}

export default Portfolio