import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';

function App() {
  const dispath = useDispatch();

  dispath(updateToken(getToken()));

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;

