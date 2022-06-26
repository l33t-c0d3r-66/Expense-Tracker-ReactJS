import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AddExpense from './pages/AddExpense';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/add" component={AddExpense}/>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
      
  );
}

export default App;
