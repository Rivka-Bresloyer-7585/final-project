import React from 'react';
import './App.css';
import HomePage from './components/homePage.js';
import FamiliarUser from './components/familiarUser.js';
import Registration from './components/registration.js';
import ByCategory from './components/search/byCategory/byCategory.js';
import ByProducts from './components/search/byProduct/byProducts.js';
import ByRecipes from './components/search/byRecipes/byRecipes.js';
import UploadingRecipe from './components/familiarUser/uploadingRecipe';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const token=localStorage.getItem("token");
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/search/byRecipes">
              <ByRecipes />
            </Route>
            <Route path="/search/byProducts">
              <ByProducts />
            </Route>
            <Route path="/search/byCategory">
              <ByCategory />
            </Route>
            <Route path="/familiarUser">
              <FamiliarUser />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/familiarUser/uploadingRecipe">
              <UploadingRecipe />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
