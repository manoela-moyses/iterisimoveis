import './App.css';
import SobrePage from './pages/SobrePage';
import HomePage from './pages/HomePage';
import ImoveisPage from './pages/ImoveisPage/ImoveisPage';
import MenuPageTemplate from './pageTemplates/MenuPageTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MenuPageTemplate>
        <Routes>
          <Route path='/' exact={true} element={<HomePage />} />
          <Route path='/sobre' exact={true} element={<SobrePage />} />
          <Route path='/imoveis' exact={true} element={<ImoveisPage />} />
        </Routes>
      </MenuPageTemplate>
    </BrowserRouter>
  );
}

export default App;
