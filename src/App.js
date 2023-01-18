import Counter from './components/Counter';
import Header from './components/Header'
import Authentication from './components/Auth'
import UserProfile from './components/UserProfile'
import {useSelector} from 'react-redux'

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
      <Header />
      {!isAuth && <Authentication />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
