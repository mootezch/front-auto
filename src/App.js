import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'

import './App.css'

import { Container } from './components/index'
import { Header, Footer,} from './Sections/index'
import { Home,Audi, Mercedess,Bmw1} from './pages/index'







const App = () => {


return(
    <>
 <Router>
    <Header />
   <Container>
  <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/Bmw1' element = {<Bmw1/>}/>
    <Route path='/Mercedess' element = {<Mercedess/>}/>
    <Route path='/Audi' element = {<Audi/>}/>
  </Routes>
    </Container>
    <Footer/>
</Router>

    </>
)
}

export default App