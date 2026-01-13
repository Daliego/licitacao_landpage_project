import { Theme } from "./shared/styles/theme";
import { HashRouter } from "react-router-dom";
import { AppRoutes } from "./shared/routes/app_routes";
import { GlobalStyle } from "./shared/styles/globalStyles";
import { AuthProvider } from "./shared/providers/authProvider";

function App() {
  return (
    <Theme>
      <AuthProvider>
        <HashRouter>
          <AppRoutes />
          <GlobalStyle />
        </HashRouter>
      </AuthProvider>
    </Theme>
  );
}

export default App;
