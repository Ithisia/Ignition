import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import IgnitionInfo from './IgnitionInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

class Main extends Component {
    
    render() {
                
        const HomePage = () => {
            return (
                <Home
                    campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                    partner2={this.props.partners.filter(partner => partner.featured)[1]}
                />
            );
        };
        
        const CampsiteWithId = ({ match }) => {
            return (
                <IgnitionInfo campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} />
            );
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                            <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                            <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> } />
                            <Route exact path='/aboutus' render={() => <About partners={this.props.partners} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));