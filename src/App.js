
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Formm from './Component/Form';
import Thanks from './Component/Thanks';


function App() {
  return (
    <BrowserRouter>
     
      <Switch>

        <Route exact path={"/"} component={Formm} />
        <Route exact path={"/thanks"} component={Thanks} />


      </Switch>

    </BrowserRouter>

  );
}

export default App;
