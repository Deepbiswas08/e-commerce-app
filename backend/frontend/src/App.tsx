
// import './index.css'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { sampleProducts } from './data'
import { Outlet } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { Store } from './Store'

function App() {
  const{
    state:{mode},
    dispatch,
  } = useContext(Store)
  
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' > 
          <Container>
          <Navbar.Brand> Ts Amajona</Navbar.Brand>
        </Container>
        <Nav>
        <Button variant={mode} onClick={switchModeHandler}>
               <i
                 className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}
               ></i>
             </Button>
          <a href='/cart' className="nav-link">
          Cart
          </a>
          <a href='/signin' className= "nav-link">Signin</a>

        </Nav>
        </Navbar>
  
      </header>
    <main>
      <Container className='mt-3'>
        <Outlet/>
      </Container>
      
    </main>
    <footer>
     <div className="text-center"> All right reserved</div>
    </footer>

    </div>
  )
}

export default App
