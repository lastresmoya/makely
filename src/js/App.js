import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AOS from 'aos';

import {
    activateGeod,
    closeGeod,
} from './redux';

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

// Public Routes
import LandingPage from "./pages/public/LandingPage";
import FindCreatorsPage from "./pages/public/FindCreatorsPage";
import AboutPage from "./pages/public/AboutPage";
import FAQsPage from "./pages/public/FAQsPage";
import ContactPage from "./pages/public/ContactPage";
import LoginPage from "./pages/public/LoginPage";
import SignupPage from "./pages/public/SignupPage";


// Logged Routes
import MessagesPage from "./pages/private/Profile/MessagesPage";
import MyJobsPage from "./pages/private/Profile/MyJobsPage";
import ContactUserPage from "./pages/private/Profile/ContactUserPage";

// Components
import Main from "Components/Main";

class AppContainer extends Component {
    componentDidMount() {
        AOS.init({
            offset: 50,
            duration: 600,
            easing: 'ease-in-out-sine',
            delay: 100,
        })
    }

    render() {
        return (
            <Router>
                <Main>
                    <Route component={ScrollToTop} />
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/find-creators' component={FindCreatorsPage} />
                    <Route exact path='/about' component={AboutPage} />
                    <Route exact path='/faqs' component={FAQsPage} />
                    <Route exact path='/contact' component={ContactPage} />
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/signup' component={SignupPage} />

                    {/* Profile Routes */}
                    <Route exact path='/profile/messages' component={MessagesPage} />
                    <Route exact path='/profile/my-jobs' component={MyJobsPage} />
                    <Route exact path='/profile/contact' component={ContactUserPage} />

                    {/* <Route path="/clinician" render={() => <Dashboard {...{ currentDash: 'clinician' }} />} />
                    <Route path="/doctor" render={() => <Dashboard {...{ currentDash: 'doctor' }} />} /> */}

                    {/* Test Redux */}
                    {/* {this.props.geod.title || 'hello world'}
                    {this.props.geod.title ?
                        <button onClick={this.props.closeGeod}>
                            Exit Geod
                        </button> :
                        <button onClick={() => this.props.activateGeod({ title: 'I am a geo dude!' })}>
                            Click Me!
                        </button>
                    } */}
                </Main>
            </Router>
        );
    }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
    geod: state.geod,
});

const mapDispatchToProps = {
    activateGeod,
    closeGeod,
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);

export default App;