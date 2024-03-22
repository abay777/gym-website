
import './App.css'
import { Descibe, Footer, Form, Navbar, TopBanner,QuotesBanner } from './components'
import { LastBanner } from './components/LastBanner'

function App() {
  
  return (
    <>
      <Navbar text={'#1470af'} bg={'black'} anime={true}/>
      <TopBanner/>
      <Descibe />
      <Form text={'black'} bg={'white'}/>
      <QuotesBanner/>
      <LastBanner/>
      <Footer/>
    </>
  )
}

export default App
