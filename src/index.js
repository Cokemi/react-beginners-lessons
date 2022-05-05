import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// LESSON 1: classes old way - NO HOOKS
import CounterClass from "./Lesson1_classes_without_HOOKS/CounterClass";
import VisibilityToggleClass from "./Lesson1_classes_without_HOOKS/VisibilityToggleClass";
import IndecisionAppClass from "./Lesson1_classes_without_HOOKS/IndecisionAppClass";

// LESSON 2: new way - HOOKS
import Counter from "./Lesson2_components_with_HOOKS/Counter";
import ToggleShowHideDetails from "./Lesson2_components_with_HOOKS/ToggleShowHideDetails";
import IndecisionApp from "./Lesson2_components_with_HOOKS/IndecisionApp";

// LESSON 3: forms
import BasicFormHooks from "./Lesson3_forms/BasicFormHooks";
import BasicFormReactHookForm from "./Lesson3_forms/BasicFormReactHookForm";
import ShoppingListForm from "./Lesson3_forms/ShoppingListForm";

// LESSON 4: props
import HelloMaster from "./Lesson4_props_between_components/HelloMaster";
import CommentMaster from "./Lesson4_props_between_components/CommentMaster";

// LESSON 5: CRUD (Create Read Update Delete) App
import CrudApp from "./Lesson5_CRUD_App/CrudApp";

// LESSON 6: Router-DOM
import MainRouter from "./Lesson6_Router/MainRouter";

// LESSON 7: useEffect
import MainUseEffect from "./Lesson7_UseEffect/MainUseEffect";
import MainUseEffectv2 from "./Lesson7_UseEffect/MainUseEffectv2";

// Choose exercise. If you stablish to 13 you have the menu router
const exercise = 13;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {exercise === 0 && <App />}
    {exercise === 1 && <IndecisionAppClass />}
    {exercise === 2 && <CounterClass />}
    {exercise === 3 && <VisibilityToggleClass />}
    {exercise === 4 && <Counter />}
    {exercise === 5 && <ToggleShowHideDetails />}
    {exercise === 6 && <IndecisionApp />}
    {exercise === 7 && <BasicFormHooks />}
    {exercise === 8 && <BasicFormReactHookForm />}
    {exercise === 9 && <ShoppingListForm />}
    {exercise === 10 && <HelloMaster />}
    {exercise === 11 && <CommentMaster />}
    {exercise === 12 && <CrudApp />}
    {exercise === 13 && <MainRouter />}
    {exercise === 14 && <MainUseEffect />}
    {exercise === 15 && <MainUseEffectv2 />}
  </React.StrictMode>
);
