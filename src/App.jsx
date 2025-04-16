import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import Task from './components/Task'
import BottomNavigation from './components/BottomNavigation';
import {useState} from 'react'

const AppWrapper = styled.div`
  position:absolute;
  width:100%;
  min-height: 100vh;
  height:${props => props.welcomeOpen ? '100vh' : '100%'};
  overflow:${props => props.welcomeOpen ? 'hidden' : 'auto'} ;
`

function App() {
  const [pickedPage,setPickedPage] = useState(1)
  const [activeIndex,setActiveIndex] = useState(0)

  return (
    <AppWrapper>
      <Header activeIndex={activeIndex} pickedPage={pickedPage} setPickedPage={setPickedPage}/>
      {pickedPage === 1 ? 
      <>
        <Main setPickedPage={setPickedPage}/>
        <BottomNavigation/>
      </>
      : 
        <>
          <Task activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
        </>
      }
    </AppWrapper>
  );
}

export default App;