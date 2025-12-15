import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard';
import CreateContext from './pages/CreateContext';
import ContextDetail from './pages/ContextDetail';
import Landing from './pages/Landing';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/create" element={<CreateContext />} />
                        <Route path="/context/:id" element={<ContextDetail />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
