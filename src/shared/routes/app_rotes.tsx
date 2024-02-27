import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "../../modules/homePage";
import { WhattsappLayout } from "../layouts/whattsapp";
import { LoginPage } from "../../modules/loginPage";
import { AdminCardsForm } from "../../modules/adminPages/changeCardsForm";
import { NavBarLayout } from "../../modules/adminPages/components/navBarLayout";
import { AdminShowClientsForm } from "../../modules/adminPages/clientsTables";

export function AppRoutes() {
  const navigate = useNavigate();

  const ProtectedRouter = ({ children }) => {
    const id = localStorage.getItem("userId");
    // if (id === undefined || id === null) {
    //   navigate("/login");
    // }

    console.log(id);

    return id ? children : <Navigate replace to="/login" />;
  };

  const routes = (
    <Routes>
      <Route
        path="/"
        element={
          <WhattsappLayout>
            <HomePage />
          </WhattsappLayout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/products"
        element={
          <ProtectedRouter>
            <NavBarLayout>
              <AdminCardsForm />
            </NavBarLayout>
          </ProtectedRouter>
        }
      />
      <Route
        path="/clients"
        element={
          <ProtectedRouter>
            <NavBarLayout>
              <AdminShowClientsForm />
            </NavBarLayout>
          </ProtectedRouter>
        }
      />
    </Routes>
  );

  return routes;
}
