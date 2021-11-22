import logo from './logo.svg';
import './App.css';


import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/router/AppRouter';
import { useEffect } from 'react';

function App() {

  let [state, setState] = useState(1);

  const changeApp = (display) => {
    displayApp = display;
    console.log(`changed from App, disp = ${displayApp}`);
    setState(state = displayApp)
    console.log('state: ', state);
  } 

  //const auth = localStorage.getItem('auth');
  const auth = useSelector(state => state.authReducer.auth);
  const [style, setStyle] = useState('');
  console.log('style', style);
  const dispatch = useDispatch();

  if (localStorage.getItem('auth')) {
    dispatch({type: "SET_AUTH", payload: true});
  }

  let displayApp;

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let st = auth ? 'Main' : 'MainAuth';
    setStyle(st);
    setLoading(false);
  }, [auth]);

  return (
    <BrowserRouter>
      <div className="FullApp">
        <AppRouter/>
      </div>
        
    </BrowserRouter>
  );
}
export default App;
