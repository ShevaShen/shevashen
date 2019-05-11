import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'open'
            })
          : this.setState({
              navBarActiveClass: ''
            });
      }
    );
  };

  render() {
    const { active, navBarActiveClass } = this.state;

    return (
      <nav className="fancynavbar bg-dark position-relative position-lg-fixed">
        <div className="fancynavbar-togglerbar">
          <Link className="fancynavbar-brand" to="/">
            <span className="logo-nav">SS</span>
          </Link>
          <button
            className="navbar-toggler text-white mr-3 mr-lg-0"
            onClick={this.toggleHamburger}
            aria-controls="navbarSupportedContent"
            aria-expanded={active}
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="fancynavbar-addon" />
        </div>
        <div className={`fancynavbar-collapse ${navBarActiveClass}`}>
          <ul className="fancynavbar-nav">
            {/* <li className="fancynav-item">
              <Link className="fancynav-link" to="/portfolio">
                <span className="fancynav-link-content">portfolio</span>
              </Link>
            </li> */}
            <li className="fancynav-item">
              <Link className="fancynav-link" to="/contact">
                <span className="fancynav-link-content">contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
