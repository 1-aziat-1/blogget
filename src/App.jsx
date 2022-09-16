import Header from './components/Header';
import Main from './components/Main';
import {useToken} from './hooks/useToken';

function App() {
  const [token, deltoken] = useToken('');

  return (
    <>
      <Header token={token} deltoken={deltoken}/>
      <Main />
    </>
  );
}

export default App;

