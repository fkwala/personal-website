import { BrowserRouter } from 'react-router-dom';
import { About, Experience, Hero, Navbar, Tech, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <About></About>
      <Experience></Experience>
      <Tech></Tech>
      <Works></Works>
      <div className="relative z-0">
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
