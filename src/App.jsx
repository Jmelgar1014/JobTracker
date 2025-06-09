import HomePage from "./Pages/HomePage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ApplicationsPage from "./Pages/ApplicationsPage";
import SignUpPage from "./Pages/SignUpPage";
import VerifyPage from "./Pages/VerifyPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/verify" element={<VerifyPage />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
