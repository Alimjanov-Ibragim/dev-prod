import { Routes, Route } from 'react-router-dom';

import { LeadsPage } from 'pages/leads';
import { baseLayout } from './layout/baseLayout';
import './index.css';

const App = () => {
  return (
    <div className='app'>
      Dev CRM New Front
      <Routes
      // fallbackElement={}
      // exceptionElement={<GlobalErrorPage />}
      >
        <Route element={baseLayout}>
          <Route path='/' element={<LeadsPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
