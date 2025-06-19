import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import { AuthProvider } from "./Context/AuthProvider";
import { JobProvider } from "./Context/JobProvider";
import MainLayout from "./Layouts/MainLayout";
import LoginLayout from "./Layouts/LoginLayout";
import StatsPage from "./Pages/StatsPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import NewPasswordPage from "./Pages/NewPasswordPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="/newpassword" element={<NewPasswordPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/verify"
            element={
              <Suspense fallback={<Spinner />}>
                <VerifyPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route element={<MainLayout />}>
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
            path="/stats"
            element={
              <Suspense fallback={<Spinner />}>
                <StatsPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </>
  )
);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <JobProvider>
          <RouterProvider router={router} />
        </JobProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
