import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/notFound'; // Убедитесь, что имя файла соответствует
import { Layout } from './layout/layout';
import { Category } from './pages/Category';
import { MealInfo } from './components/MealInfo';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<Layout />}> 
              <Route index element={<Home />} /> 
              <Route path='/categories/:name' element={<Category />} />
              <Route path='/meals/:id' element={<MealInfo />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
    </div>
  );
}

export default App;
