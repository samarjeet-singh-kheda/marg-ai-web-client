import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import HomePage from "./pages/home-page";
import "./utils/i18n";
import UserPage from "./pages/user-page";
import AssessmentsPage from "./pages/assessments-list-page";
import EventsPage from "./pages/events-page";
import ResourcesPage from "./pages/resources-page";
import StudentsPage from "./pages/students-page";
import ResultsAnalyticsPage from "./pages/result-analytics-page";
import CreateAssessmentPage from "./pages/create-assessment-page";
import NotFoundPage from "./pages/not-found-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/assessments/create",
    element: <CreateAssessmentPage />,
  },
  {
    path: "/assessments",
    element: <AssessmentsPage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/resources",
    element: <ResourcesPage />,
  },
  {
    path: "/students",
    element: <StudentsPage />,
  },
  {
    path: "/result-analytics",
    element: <ResultsAnalyticsPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
