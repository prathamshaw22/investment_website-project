import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import InvestmentsPage from '../pages/InvestmentsPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import AdminPage from '../pages/AdminPage';
import Chatbot from '../components/common/Chatbot';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/investments" component={InvestmentsPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/admin" component={AdminPage} roles={['admin']} />
                <PrivateRoute path="/chatbot" component={Chatbot} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Routes;