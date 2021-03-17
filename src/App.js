import React, { useEffect } from 'react'
import logo from './logo.svg';
import MainPage from 'Pages/MainPage'
import store from 'Store'
import './App.css';

function App() {
  // useEffect(() => alert('ahoy'), [])
  useEffect(() => {
      store.fetchData()
  }, [])

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
