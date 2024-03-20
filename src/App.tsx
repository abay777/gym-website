
import './App.css'
import { Descibe, Footer, Form, Navbar, TopBanner } from './components'
import { LastBanner } from './components/LastBanner'

function App() {
  
  return (
    <>
      <Navbar text={'#1470af'} bg={'black'}/>
      <TopBanner/>
      <Descibe />
      <Form />
      <LastBanner/>
      <Footer/>
    </>
  )
}

export default App
