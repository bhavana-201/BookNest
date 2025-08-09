import { Outlet } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Outlet /> {/* Nested routes will render here */}
    </ThemeProvider>
  );
};

export default App;
