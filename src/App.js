//This is called as the root/main/initial/app Component
import './App.css';
import {Route} from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component'
import SigninPage from './pages/signin-page/signin-page.component'
import CartPage from './pages/cart-page/cart-page.component'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={SigninPage}/>
      <Route path="/cart" component={CartPage}/>
    </div>
  );
}

export default App;
