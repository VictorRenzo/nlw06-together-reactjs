import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <div>
      <BrowserRouter>
       <Switch>
         <AuthContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
         </AuthContextProvider>
       </Switch>
      </BrowserRouter>
    </div>
    );
}

export default App;
