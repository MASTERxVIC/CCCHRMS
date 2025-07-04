// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Layout/Login/LoginPage";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { protectedRoutes } from "./routes";

function App() {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Login />
        }
      />

      {protectedRoutes.map(({ path, element, layout: Layout }) => (
        <Route
          key={path}
          path={path}
          element={
            <PrivateRoute>
              <Layout>{element}</Layout>
            </PrivateRoute>
          }
        />
      ))}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
