import { useState, createContext } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const TestContext = createContext({} as any );

function App() {
  const [value, setValue] = useState('Teste'); 

   return (
    <div>
      <BrowserRouter>
        
        <Switch>
        <TestContext.Provider value = {{value, setValue}}>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
        </TestContext.Provider>
       </Switch>
      </BrowserRouter>
    </div>
    );
}

export default App;
