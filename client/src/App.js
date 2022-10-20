import React from 'react';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Nav from './components/Nav';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [name, setName] = React.useState('');

  React.useEffect(() => {
    (
      //вызыываем асинхронно

      async () => {
        console.log('useEffect')
        const response = await fetch("http://localhost:8000/", {
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include', //получаем куки
        });

        if (response.ok === true) {
          console.log('good auth')
        }
        else {
          console.log('Status: ', response.status)
        }
        const content = await response.json();

        setName(content.name);

      }
    )();
  });


  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />
        <main className="form-signin w-100 m-auto">
          <Routes>
            {/* exact убирает совпадание путей (главный путь начинается на /, и если перейти на /login то там будет и /home) */}
            <Route path='/' exact element={<Home name={name} />} />
            <Route path='/login' element={<Login setName={setName} />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
