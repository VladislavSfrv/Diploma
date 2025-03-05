import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuNavigator from './MenuNavigator/MenuNavigator.jsx';

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