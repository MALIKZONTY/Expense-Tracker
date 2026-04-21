import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Expensico — Track your money";

    if (path === '/login') title = "Login | Expensico";
    else if (path === '/register') title = "Sign Up | Expensico";
    else if (path === '/about') title = "About Us | Expensico";
    else if (path === '/blog') title = "Financial Literacy Blog | Expensico";
    else if (path === '/faq') title = "Knowledge Hub (FAQ) | Expensico";
    else if (path === '/contact') title = "Contact Me | Expensico";
    else if (path === '/privacy-policy') title = "Privacy Policy | Expensico";
    else if (path === '/terms-and-conditions') title = "Terms of Service | Expensico";
    else if (path === '/cookie-policy') title = "Cookie Policy | Expensico";
    else if (path === '/disclaimer') title = "Disclaimer | Expensico";
    else if (path === '/add') title = "Log Transaction | Expensico";
    else if (path === '/transactions') title = "Transaction History | Expensico";
    else if (path === '/') title = "Dashboard | Expensico — Track your money";

    document.title = title;
  }, [location]);

  return null;
};

export default TitleManager;
