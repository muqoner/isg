import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Data from './components/Data'
import Details from './components/Details'
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/data" element={<Data/>} />
          <Route path="details" element={<Details/>} >
            <Route path=":data"  />
          </Route>
          <Route path="/edit/:id" element={<Edit/>} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
