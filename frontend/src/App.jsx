import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import AuthContext, { AuthProvider } from './context/AuthContext';
import { UIProvider, useUI } from './context/UIContext';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';
import TransactionList from './pages/TransactionList';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Features from './pages/Features';
import Demo from './pages/Demo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Disclaimer from './pages/Disclaimer';
import Contact from './pages/Contact';
import AdminInquiries from './pages/AdminInquiries';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import CookiePolicy from './pages/CookiePolicy';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TitleManager from './components/TitleManager';
import ScrollToTop from './components/ScrollToTop';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) return null; // Or a loading spinner
  
  if (!user) return <Navigate to="/login" />;
  if (adminOnly && user.role !== 'admin') return <Navigate to="/dashboard" />;
  return children;
};

const GuestRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) return null;
  
  if (user) return <Navigate to="/dashboard" />;
  return children;
};

function App() {
  return (
    <UIProvider>
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <TitleManager />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
                <Route path="/register" element={<GuestRoute><Signup /></GuestRoute>} />
                <Route path="/" element={<AuthContext.Consumer>{({ user, loading }) => {
                  if (loading) return null;
                  return user ? <Navigate to="/dashboard" replace /> : <Features />;
                }}</AuthContext.Consumer>} />
                <Route path="/features" element={<Features />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/add" element={<ProtectedRoute><AddTransaction /></ProtectedRoute>} />
                <Route path="/transactions" element={<ProtectedRoute><TransactionList /></ProtectedRoute>} />
                <Route path="/about" element={<About />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/admin/inquiries" element={<ProtectedRoute adminOnly><AdminInquiries /></ProtectedRoute>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </Router>
    </UIProvider>
  );
}

export default App;
