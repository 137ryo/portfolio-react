import { BrowserRouter } from "react-router-dom";
import Header from "./components/molecules/Header";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}
