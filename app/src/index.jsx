import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { getOrCreateStore } from '@/hooks/getOrCreateStore';
import { Root as RootPage } from '@/pages/Root';
import { Another as AnotherPage} from '@/pages/Another';
import { Header } from '@/containers/app/Header';

// 全体に適用されるスタイル
import '@/scss/index.scss';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
const store = getOrCreateStore({});
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <RootPage /> } />
        <Route path="/another" element={ <AnotherPage /> } />
      </Routes>
    </BrowserRouter>
  </Provider>
);