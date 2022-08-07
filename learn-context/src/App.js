
import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
function App() {
  const [theme,setTheme] = useState()
  return (
    <div className="App">
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
