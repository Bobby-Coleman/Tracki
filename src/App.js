import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from "./components/navbar";
import ExercisesList from "./components/exercise-list";
import EditExercise from "./components/edit-exercises";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";


let App = () => {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
