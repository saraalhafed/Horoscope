
import './App.scss'

import Navbar from "./copmonent/Navbar/Navbar.jsx";
import Header from "./copmonent/Header/Header.jsx"
import Main from './copmonent/Main/Main.jsx';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Header title="ZODIAC SIGNS"/>
      <Main/>
    </div>
  )
}

export default App
