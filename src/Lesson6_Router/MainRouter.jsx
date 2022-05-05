import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CounterClass from "../Lesson1_classes_without_HOOKS/CounterClass";
import IndecisionAppClass from "../Lesson1_classes_without_HOOKS/IndecisionAppClass";
import VisibilityToggleClass from "../Lesson1_classes_without_HOOKS/VisibilityToggleClass";
import Counter from "../Lesson2_components_with_HOOKS/Counter";
import IndecisionApp from "../Lesson2_components_with_HOOKS/IndecisionApp";
import ToggleShowHideDetails from "../Lesson2_components_with_HOOKS/ToggleShowHideDetails";
import BasicFormHooks from "../Lesson3_forms/BasicFormHooks";
import BasicFormReactHookForm from "../Lesson3_forms/BasicFormReactHookForm";
import ShoppingListForm from "../Lesson3_forms/ShoppingListForm";
import CommentMaster from "../Lesson4_props_between_components/CommentMaster";
import HelloMaster from "../Lesson4_props_between_components/HelloMaster";
import CrudApp from "../Lesson5_CRUD_App/CrudApp";
import MainUseEffect from "../Lesson7_UseEffect/MainUseEffect";
import MainUseEffectv2 from "../Lesson7_UseEffect/MainUseEffectv2";
import Home from "./Home";

const MainRouter = () => {
  return (
    <Router>
      <div>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ol>
          <li>
            <b>LESSON 1: CLASSES</b>
          </li>
          <ol>
            <li>
              <Link to="/counterClass">Counter</Link>
            </li>
            <li>
              <Link to="/toggleClass">Toggle Show/Hide</Link>
            </li>
            <li>
              <Link to="/indecisionAppClass">Indecision App</Link>
            </li>
          </ol>
          <li>
            <b>LESSON 2: HOOKS</b>
          </li>
          <ol>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/toggle">Toggle Show/Hide</Link>
            </li>
            <li>
              <Link to="/indecisionApp">Indecision App</Link>
            </li>
          </ol>
          <li>
            <b>LESSON 3: FORMS</b>
          </li>
          <ol>
            <li>
              <Link to="/basicForm">Basicc Form</Link>
            </li>
            <li>
              <Link to="/reactHookForm">Form using npm react-hook-form</Link>
            </li>
            <li>
              <Link to="/shoppinglist">Shopping List</Link>
            </li>
          </ol>
          <li>
            <b>LESSON 4: Props between Components</b>
          </li>
          <ol>
            <li>
              <Link to="/helloMaster">Hello components</Link>
            </li>
            <li>
              <Link to="/commentMaster">Comment components</Link>
            </li>
          </ol>
          <li>
            <b>LESSON 5: CRUD App</b>
          </li>
          <ol>
            <li>
              <Link to="/crud">CRUD App</Link>
            </li>
          </ol>
          <li>
            <b>LESSON 6: Route</b>
          </li>
          <ol>
            <li>This file :D ( MainRouter.jsx )</li>
          </ol>
          <li>
            <b>LESSON 7: UseEffect</b>
          </li>
          <ol>
            <li>
              <Link to="/mainUseEffect">UseEffect with API</Link>
            </li>
            <li>
              <Link to="/mainUseEffectv2">UseEffect with API</Link>
            </li>
          </ol>
        </ol>

        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/counterClass" element={<CounterClass />} />
          <Route path="/toggleClass" element={<VisibilityToggleClass />} />
          <Route path="/indecisionAppClass" element={<IndecisionAppClass />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/toggle" element={<ToggleShowHideDetails />} />
          <Route path="/indecisionApp" element={<IndecisionApp />} />
          <Route path="/basicForm" element={<BasicFormHooks />} />
          <Route path="/reactHookForm" element={<BasicFormReactHookForm />} />
          <Route path="/shoppinglist" element={<ShoppingListForm />} />
          <Route path="/helloMaster" element={<HelloMaster />} />
          <Route path="/commentMaster" element={<CommentMaster />} />
          <Route path="/crud" element={<CrudApp />} />
          <Route path="/mainUseEffectv2" element={<MainUseEffectv2 />} />
          <Route path="/mainUseEffect" element={<MainUseEffect />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainRouter;
