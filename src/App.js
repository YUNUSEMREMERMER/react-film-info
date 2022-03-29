import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';


function App() {
  return (
    <BrowserRouter>
      
      <div className="app">
        <Header/>
        <Content/>
        <SimpleBottomNavigation/>

      </div>
    </BrowserRouter>
  );
}

export default App;
