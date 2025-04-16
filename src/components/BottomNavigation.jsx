import styled from 'styled-components'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'
import img6 from '../img/6.png'


const Bottom = styled.div`
    position: fixed;
    width:100%;
    z-index: 100;
    bottom:0;
    left:0;
`
const Wrapper = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    margin: 0 3%;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    margin-bottom: 10px;
    padding:10px 12px;
    border: 4px solid #44de53;
    background-repeat: no-repeat;
    background-size:cover;
    background-blend-mode: luminosity;

    img{
      width:32px;
      height:32px
    }
`


const BottomNavigation = () => {
  return (
    <Bottom>
      <Wrapper>
        <img
          className='cat'
          src={img1}
          alt=""
        />
        <img
          className='cat'
          src={img2}
          alt=""
        />
        <img
          className='cat'
          src={img3}
          alt=""
        />
        <img
          className='cat'
          src={img4}
          alt=""
        />
        <img
          className='cat'
          src={img5}
          alt=""
        />
        <img
          className='cat'
          src={img6}
          alt=""
        />
      </Wrapper>
    </Bottom>
  )
}

export default BottomNavigation