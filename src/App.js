import 'bootstrap/dist/css/bootstrap.min.css';
import Catagori from './Component/Catagori1';
import NavBar from './Component/NavBar1';
import Heading from './Component/Heading';
import './index.css'
import Footer from './Component/Footer';





function App() {
  return (
    <div className="App "> 
      <NavBar/>
      <Heading/>
      <Catagori/>
      <Footer/>
    </div>
  );
}

export default App;


