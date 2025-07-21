import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./styles/Theme";
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </ThemeProvider>
    );
};

export default App;