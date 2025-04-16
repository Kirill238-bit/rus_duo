import React from 'react'
import styled from 'styled-components'
import img from '../img/flag.png'
import img1 from '../img/fire.png'
import img2 from '../img/gem.png'
import img3 from '../img/light.png'
import close from '../img/close.png'
import star from '../img/star_full.png'
import start_not from '../img/star_not_full.png'

const Head = styled.div`
    position: absolute;
    width:100%;
    z-index: 100;
    left:0;
`
const Wrapper = styled.div`
    display: flex;
    margin: 0 15px;
    padding:10px 12px;
    justify-content: space-between;
    align-items: center;

    img{
      width: 32px;
      height:32px;
    }
`
const Header = ({setPickedPage,pickedPage,activeIndex}) => {
  return (
    <Head>
      {pickedPage === 1 ? 
      <Wrapper>
        <img
          src={img}
          alt=""
        />
        <img
          src={img1}
          alt=""
        />
        <img
          src={img2}
          alt=""
        />
        <img
          src={img3}
          alt=""
        />
      </Wrapper>
      :
      <Wrapper>
        <img
          src={close}
          alt=""
          onClick={()=> setPickedPage(1)}
        />
        {Array.from({ length: 7 }).map((_, index) => (
          <img
            key={index}
            src={activeIndex > index ? star: start_not}
            alt=""
            onClick={() => setPickedPage(1)}
          />
        ))}
      </Wrapper>
      }
    </Head>
  )
}

export default Header