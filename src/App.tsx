import { Theme } from "./shared/styles/theme";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./shared/routes/app_routes";
import { GlobalStyle } from "./shared/styles/globalStyles";
import { AuthProvider } from "./shared/providers/authProvider";

function App() {
  return (
    <Theme>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
          <GlobalStyle />
        </BrowserRouter>
      </AuthProvider>
    </Theme>
  );
}

export default App;
