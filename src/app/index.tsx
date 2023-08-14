import { Routes, Route } from 'react-router-dom';

import { baseLayout } from 'app/layout';
import { LeadsPage } from 'pages/leads';
import { TestPage } from 'pages/test';
import { withHocs } from './hocs';
import './index.css';

const App = () => {
  return (
    <div className='app'>
      <Routes
      // fallbackElement={}
      // exceptionElement={<GlobalErrorPage />}
      >
        <Route element={baseLayout}>
          <Route path='/' element={<LeadsPage />}></Route>
          <Route path='/test' element={<TestPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default withHocs(App);
