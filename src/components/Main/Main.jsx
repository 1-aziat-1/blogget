import React from 'react';
import style from './Main.module.css';
import Layout from '../Layout';
import List from './List';
import Tabs from './Tabs';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <List/>
    </Layout>
  </main>
);

