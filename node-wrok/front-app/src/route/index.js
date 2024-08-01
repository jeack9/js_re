import { useRoutes } from "react-router-dom";
import Condition from "../Comp02_Condition";
import Event from "../Comp03_Event";
import Book from "../Comp05_Book";
import ProductStateComponent from "../Comp06_ProductStateComponent";
import EffectComponent from "../Comp07_EffectComponent";
import FormRef from "../Comp08_Form_Ref";
import Router from "../Comp09_Router";
import BoardComponent from "../BoardComponent";

let route = [
  { path: "/", element: <Condition /> },
  { path: "/condition", element: <Condition /> },
  { path: "/event", element: <Event /> },
  { path: "/book", element: <Book /> },
  { path: "/prodstate", element: <ProductStateComponent /> },
  { path: "/effect", element: <EffectComponent /> },
  { path: "/formref", element: <FormRef /> },
  { path: "/router", element: <Router /> },
  { path: "/boardcomp/*", element: <BoardComponent /> },
];

export default route;
