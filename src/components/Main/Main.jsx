import React from 'react';
import style from './Main.module.css';
import Layout from '../Layout';
import List from './List';
import Tabs from './Tabs';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';
import StartPage from './StartPage';
import {Error} from './Error/Error';

// ready
export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/auth' element={<StartPage/>}/>
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal/>} />
        </Route>
        <Route path='*' element={<Error/>} />
      </Routes>
    </Layout>
  </main>
);


