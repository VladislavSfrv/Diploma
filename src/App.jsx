import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuNavigator from './MenuNavigator/MenuNavigator.jsx';
import "../src/css/main.css";

function App() {

  return (
    <>
    <MenuNavigator/>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App