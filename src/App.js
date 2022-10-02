import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav';
import Body from './Component/Body/Body';
import Bodynext from './Component/Body/Bodynext';
import Primium from './Component/Primumum/Primium';
import Fotter from './Component/Footer/Fotter';

function App() {
  return (
    <div className=' bg-gray-600'>
      <Nav></Nav>
      <Body></Body>
      <Bodynext></Bodynext>
      <Primium></Primium>
      <Fotter></Fotter>

    </div>
  );
}

export default App;
