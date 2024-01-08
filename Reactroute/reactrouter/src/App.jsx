import{ BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';


export default function App() {
  
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />} />

     </Routes>
     </BrowserRouter>
    </div>
  )
}
