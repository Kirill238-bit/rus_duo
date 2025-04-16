import React from 'react'
import styled from 'styled-components'
import img from '../img/cat.png'
import finger from '../img/finger.png'

const Wrapper = styled.div`
    display: flex;
    margin: 40px 15px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .title{
      background-color: #44de53;
      padding:6px;
      margin: 20px 0;
      font-size: 13px;
      border-radius: 10px;

      h2{
        color:#fff;
      }
    }
`

const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 

    img{
      width:300px;
      height:300px;
    }

    button{
      background-color: #44de53;
      border:none;
      padding: 12px;
      border-radius: 50%;
      position: absolute;

      img{
        height: 32px;
        width:32px;
      }
    }

    .buttons_wrap{
      position: absolute;
      width: 100px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .cat{
      margin-left: 100px;
      margin-top: 100px;
    }

    .button1 { transform: translate(-200px, -200px) rotate(45deg) translate(150px) rotate(-45deg); }
    .button2 { transform: translate(-150px, -170px) rotate(90deg) translate(150px) rotate(-90deg); }
    .button3 { transform: translate(-150px, 70px) rotate(135deg) rotate(-135deg); }
    .button4 { transform: translate(-130px, 150px) rotate(180deg)rotate(-180deg); }
    .button5 { transform: translate(-80px, 230px) rotate(180deg)rotate(-180deg); }
`
const Main = ({setPickedPage}) => {
  return (
    <Wrapper>
      <div className='title'>
        <h2>ОБСУЖДАЕМ ОДЕЖДУ С ГЕРОЯМИ ИЗ ПРОСТОКВАШИНО</h2>
      </div>
      <InfoWrapper>
      <div className='buttons_wrap'>
          <button className="button1" onClick={()=>setPickedPage(2)}>
            <img
              src={finger}
              alt=""
            />
          </button>
          <button className="button2" style={{background:'grey', opacity:'0.5'}}>
            <img
              src={finger}
              alt=""
            />
          </button>
          <button className="button3" style={{background:'grey', opacity:'0.5'}}>
            <img
              src={finger}
              alt=""
            />
          </button>
          <button className="button4" style={{background:'grey', opacity:'0.5'}}>
            <img
              src={finger}
              alt=""
            />
          </button>
          <button className="button5" style={{background:'grey', opacity:'0.5'}}>
            <img
              src={finger}
              alt=""
            />
          </button>
        </div>

        <img
          className='cat'
          src={img}
          alt=""
        />
      </InfoWrapper>
    </Wrapper>
  )
}

export default Main