import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import RootLayout from "./components/RootLayout/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route to="/" element={<RootLayout />}>
        <Route index element={<Main />}></Route>
        <Route to="/movie-detail" element={<MovieDetail />}></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
