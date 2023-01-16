import portfolio1 from '../ClientProfile/assets/clientimg.jpg'
import './jobs.css'



const About = () => {
  const jobData= [
    {image: portfolio1,
      title: 'Female Model Needed For a Fashion Shoot',
      location: 'worldwide',
      date: '22 May 2022',
      time : 'Fast',
      button: 'More details'

    },
    {image: portfolio1,
      title: 'Female Model Needed For a Fashion Shoot',
      location: 'worldwide',
      date: '22 May 2022',
      time : 'Fast',
      button: 'More details'

    },
    {image: portfolio1,
      title: 'Female Model Needed For a Fashion Shoot',
      location: 'worldwide',
      date: '22 May 2022',
      time : 'Fast',
      button: 'More details'

    },
    {image: portfolio1,
      title: 'Female Model Needed For a Fashion Shoot',
      location: 'worldwide',
      date: '22 May 2022',
      time : 'Fast',
      button: 'More details'

    },
    {image: portfolio1,
      title: 'Female Model Needed For a Fashion Shoot',
      location: 'worldwide',
      date: '22 May 2022',
      time : 'Fast',
      button: 'More details'

    },
    {image: portfolio1,
      title: 'Female Model Needed For a Fashion Shoot',
      location: 'worldwide',
      date: '22 May 2022',
      time : 'Fast',
      button: 'More details'

    },
  ]


    return (
      <div className ='jobCard'>
        {jobData.map(data=>(
           <div className="jobContent">
            <img src={data.image} alt="" className='jobImg' />
            <div className="jobDetails">
            <h4>{data.title}</h4>
            <p>{data.location}</p>
            <p>{data.date}</p>
            <p>{data.time}</p>
            <button className='jobBtn'>{data.button}</button>
            </div>
            </div>
        ))}
      </div>
    )
  }
  
  export default About