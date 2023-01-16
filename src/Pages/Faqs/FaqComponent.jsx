import {React, useState} from 'react'
import UilPlus from "@iconscout/react-unicons/icons/uil-plus";
import UilMinus from "@iconscout/react-unicons/icons/uil-minus";



const FaqComponent = ({question, answer}) => {
const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const HandleClick = () => {
     setIsAnswerShowing(prev => !prev)
  }
  return (
   <article className="faqs-question"  onClick={HandleClick} >
        <div className="faqs-question-title" >
            <h4>{question}</h4>
            <button className="faq__icon">
            {isAnswerShowing ? <UilMinus /> : <UilPlus />}
            </button>
        </div>

        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FaqComponent