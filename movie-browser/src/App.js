import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
