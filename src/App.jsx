import ApplicationForm from "./Components/ApplicationForm";
import { ApplicationTitle } from "./Components/ApplicationTitle";
import JobList from "./Components/JobList";
import NavBar from "./Components/NavBar";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/applications" element={<ApplicationsPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/verify" element={<VerifyPage />} />
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
