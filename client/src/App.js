import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Settings from './components/Settings';
import Questions from './components/Questions';
import FinalScreen from './components/FinalScreen';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from './components/Navbar/Navbar';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import UserForm from './components/UserForm/UserForm';
import CatList from './components/Cat/CatList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route
            path="/auth"
            element={
              <RestrictedRoute>
                <UserForm />
              </RestrictedRoute>
            }
          />
        </Routes>
        <Typography variant="h3"></Typography>
      </Box>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/posts" element={<CatList />} />
            <Route path="/shock" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
}

export default App;
