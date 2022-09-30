import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';

import './App.scss';
import GlobalContext from './context/GlobalContext';
import Routers from './Routers';

function App() {
  const { setMovieData, setLoader, setFilterMovieData } = useContext(GlobalContext);

  useEffect(() => {
    setLoader(true);
    axios.get('https://api.jikan.moe/v4/anime')
      .then((response) => {
        setMovieData(response.data.data);
        setFilterMovieData(response.data.data)
        setLoader(false);
      })
  }, []);

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
