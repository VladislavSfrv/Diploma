import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuNavigator from './MenuNavigator/MenuNavigator.jsx';
import "../src/css/main.css";
import Dashboard from './Dashboard/Dashboard.jsx';

function App() {

  return (
    <>
    <MenuNavigator/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App