import "./app.scss";
import AppRouter from "./app-router";
import HeaderComponent from "./features/header-component/header-component";

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <AppRouter />
    </div>
  );
}

export default App;
