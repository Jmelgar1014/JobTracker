import { lazy, Suspense } from "react";
import Spinner from "./Components/Spinner";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const ApplicationsPage = lazy(() => import("./Pages/ApplicationsPage"));
const VerifyPage = lazy(() => import("./Pages/VerifyPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/home"
          element={
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/applications"
          element={
            <Suspense fallback={<Spinner />}>
              <ApplicationsPage />
            </Suspense>
          }
        />
        <Route
          path="/verify"
          element={
            <Suspense fallback={<Spinner />}>
              <VerifyPage />
            </Suspense>
          }
        />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
