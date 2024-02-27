import { Theme } from "./shared/styles/theme";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./shared/routes/app_rotes";
import { GlobalStyle } from "./shared/styles/globalStyles";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <AppRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
