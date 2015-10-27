import React, {Component} from 'react';
import {Link} from 'react-router';

class NotFound extends Component {
  componentWillMount() {
    this.context.metaData.setTitle('Whoops! Page not found');
    this.context.metaData.setDescription(
      'Sorry, but the page you were trying to view does not exist.');
  }

  render() {
    return (
      <div data-not-found className="error-screen">
        <div className="center-wrapper screen-table">
          <div className="screen-table__cell">
            <h1 className="error-screen__title">Oops, not found :(</h1>

            <p>Sorry, but the page you were trying to view does not exist.</p>

            <p>It looks like this was the result of either:</p>
            <ul>
              <li>a mistyped address</li>
              <li>an out-of-date link</li>
            </ul>
            <div className="button-group mt-50">
              <Link to="/" className="button button-group__item">Home</Link>
              <Link to="/case" className="button button-group__item">Work</Link>
              <Link to="/services" className="button button-group__item">Services</Link>
              <Link to="/team" className="button button-group__item">Team</Link>
              <Link to="/contact" className="button button-group__item">Contact</Link>
            </div>
            <div className="mt-50">
              <a href="mailto:hello@ephyros.com" className="mr-20">hello@ephyros.com</a>
              <span className="mr-20">+380 93 58-66-136</span>
              <span>Skype: darkfn</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NotFound.contextTypes = {
  metaData: React.PropTypes.object.isRequired
};

export default NotFound;