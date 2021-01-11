import { Switch, Route } from 'react-router-dom'
import './App.css';
import Contact from './components/Contact';
import Error404 from './Error404';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div >
        <Switch>
          <Route exact path="/contact" component = {Contact} />
          
          <Route exact path="/" component = {Mainpage} />
          <Route path='*' exact={true} component={Error404} />
          

        </Switch>
       
      </div>
  )
}

export default App;
