import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import atoms from '../../components/atoms';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const { Typography, Button } = atoms;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 20
  }
}));

const CustomTextField = props => {
  const classes = useStyles();
  return <TextField className={classes.textField} {...props} />;
};

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactUsPage = props => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
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

  return (
    <Layout>
      <Helmet>
        <title>Contact | {props.data.site.siteMetadata.title}</title>
      </Helmet>
      <Box my={5}>
        <Typography variant='h1' gutterBottom>
          Contact
        </Typography>
        <Typography variant='h3'>Give me a shout</Typography>
        <form
          name='contact-us'
          method='post'
          action='/contact-us/thanks/'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type='hidden' name='form-name' value='contact' />
          <div hidden>
            <label>
              Don’t fill this out: <input name='bot-field' />
            </label>
          </div>
          <CustomTextField
            variant='outlined'
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
            id='name'
            label='Your name'
            placeholder='Your name'
            margin='normal'
            required={true}
          />
          <CustomTextField
            variant='outlined'
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            id='email'
            label='Your email'
            placeholder='Your email'
            margin='normal'
            required={true}
          />
          <CustomTextField
            variant='outlined'
            type='textarea'
            name='message'
            value={values.message}
            onChange={handleChange}
            id='message'
            label='Your message'
            placeholder='Your message'
            margin='normal'
            required={true}
          />
          <Button type='submit'>
            Send
            <FontAwesomeIcon icon={faPaperPlane} className='ml-2' />
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

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
