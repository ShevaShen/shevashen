import React from 'react';
import { navigate } from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactUsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Contact | {this.props.data.site.siteMetadata.title}</title>
        </Helmet>
        <section>
          <h1 className="text-underline d-inline-block mb-4 mb-lg-6">
            contact
          </h1>
          <h3 className="mt-3">Give me a shout</h3>
          <form
            name="contact-us"
            method="post"
            action="/contact-us/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            className="mt-4 mb-5"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              id="name"
              placeholder="Your name"
              required={true}
            />
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              id="email"
              placeholder="Your email"
              required={true}
              className="mt-3"
            />
            <input
              type="textarea"
              name="message"
              onChange={this.handleChange}
              id="message"
              placeholder="Your message"
              required={true}
              className="mt-3"
            />
            <button className="display-block mt-4" type="submit">
              Send
              <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
            </button>
          </form>
        </section>
      </Layout>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query contactUsPageQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <ContactUsPage data={data} />}
  />
);
