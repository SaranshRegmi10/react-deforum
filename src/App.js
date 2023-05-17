import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div> 
      <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<News pageSize={20} key="general" country = 'gb' category = 'general'/>}></Route>
          <Route exact path="/business" element={<News pageSize={20} key="business" country = 'gb' category = 'business'/>}></Route>
          <Route exact path="/entertainment" element={<News pageSize={20} key="entertainment"country = 'gb' category = 'entertainment'/>}></Route>
          <Route exact path="/health" element={<News pageSize={20} key="health" country = 'gb' category = 'health'/>}></Route>
          <Route exact path="/science" element={<News pageSize={20} key="science" country = 'gb' category = 'science'/>}></Route>
          <Route exact path="/sports" element={<News pageSize={20} key="sports" country = 'gb' category = 'sports'/>}></Route>
          <Route exact path="/technology" element={<News pageSize={20} key="technology" country = 'gb' category = 'technology'/>}></Route>          
        </Routes>
      </Router>
     </div> 
  );
} 

export default App; 
