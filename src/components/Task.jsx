import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'
import img from '../img/mama.png'

const Wrapper = styled.div`
    display: flex;
    margin: 40px 15px;
    padding:10px 12px;
    gap:12px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img{
      width: 100%;
      height: 100%;
    }
`

const Variants = styled.div`
    display: flex;
    flex-direction: column;
    gap:12px;
    width: 100%;
    margin-top:20%;
    button{
        width: 100%;
        border: 4px solid #44de53;
        background-color: #fff;
        border-radius: 20px;
        padding:12px;
        font-size: 15px;;
    }
`

const moveText = keyframes`
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(20px); }
`

const AnimatedText = styled.div`
    padding:30px 12px;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    color:#fff;
    margin-top:30%;
    h3{
        font-size: 22px;
        animation: ${moveText} 1s ease-in-out;
    }
`

const lessons = [
    {
        question:'What clothes am I wearing?',
        variants:['купальник','платье','шапка'],
        right_answer:'купальник'
    },
    {
        question:'What clothes am I wearing?',
        variants:['купальник','платье','шапка'],
        right_answer:'купальник'
    },
    {
        question:'What clothes am I wearing?',
        variants:['купальник','платье','шапка'],
        right_answer:'купальник'
    },
    {
        question:'What clothes am I wearing?',
        variants:['купальник','платье','шапка'],
        right_answer:'купальник'
    },
    {
        question:'What clothes am I wearing?',
        variants:['купальник','платье','шапка'],
        right_answer:'купальник'
    },
    {
        question:'What clothes am I wearing?',
        variants:['купальник','платье','шапка'],
        right_answer:'купальник'
    },
    {
        question:'What clothes am I wearing?',
        variants:['купальник','платье','шапка'],
        right_answer:'купальник'
    }
]
const Task = ({activeIndex,setActiveIndex}) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleAnswerClick = (answer) => {
        if (answer === lessons[activeIndex].right_answer) {
            setErrorMessage('')
            setSuccessMessage('Correct answer!')
            // Move to the next question if available
            if (activeIndex < lessons.length - 1) {
                setTimeout(()=>{
                    setActiveIndex(activeIndex + 1)
                    setErrorMessage('')
                    setSuccessMessage('')
                },1500)
            } //else {
             //   alert('You have completed all questions!')
            //}
        } else {
            setErrorMessage('Incorrect answer, please try again.')
            setSuccessMessage('')
        }
    }
  return (
    <Wrapper>
        <img
            src={img}
            alt=''
        />
        <h3>{lessons[activeIndex].question}</h3>
        <Variants>
            {lessons[activeIndex].variants.map((variant, index) => (
                <button key={index} onClick={() => handleAnswerClick(variant)}>
                    {variant}
                </button>
            ))}
        </Variants>
        {errorMessage && <AnimatedText style={{ backgroundColor: 'red' }}><h3>{errorMessage}</h3></AnimatedText>}
        {successMessage && <AnimatedText style={{ backgroundColor: 'green' }}><h3>{successMessage}</h3></AnimatedText>}
    </Wrapper>
  )
}

export default Task
