import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./home/Home";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes , Navigate} from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
