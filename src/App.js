
import './App.css';
import Features from './Components/Features';
// import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
    <Features/>
    <div className='body'></div>
    </>
  );
}

export default App;
