// import logo from './logo.svg';
// import './App.css';
import { CssBaseline , ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard  from 'scenes/dashboard';
import Layout  from "scenes/layout";
import { useMemo } from "react";
// import { Routes } from "react-router-dom";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return (
    <div className="app">

      {/* setup nav bar */}
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />          
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
