import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
// import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/Layout';
import { makeStyles } from '@material-ui/core/styles';
import atoms from '../../components/atoms';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import SendIcon from '@material-ui/icons/Send';

const { Typography, Button } = atoms;

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(4)
  }
}));

const CustomTextField = props => {
  return <TextField margin='normal' required={true} {...props} />;
};

const SubmitButton = props => {
  const classes = useStyles();
  return <Button className={classes.button} {...props} />;
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
        ...values
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <Helmet>
        <title>
          联系我 |
          我叫Sheva，居于加拿大温哥华，是一名有UI/UX背景的前端开发工程师
        </title>
      </Helmet>
      <Box my={5}>
        <Typography variant='h3' component='h1' gutterBottom>
          留言联系我
        </Typography>
        <form
          name='contact'
          method='post'
          action='/contact/thanks'
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
          <Box display='flex' flexDirection='column' maxWidth={480}>
            <CustomTextField
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              id='name'
              label='名字'
              placeholder='名字'
            />
            <CustomTextField
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              id='email'
              label='邮箱'
              placeholder='邮箱'
            />
            <CustomTextField
              multiline
              rows='4'
              name='message'
              value={values.message}
              onChange={handleChange}
              id='message'
              label='留言'
              placeholder='留言'
            />
          </Box>
          <SubmitButton variant='outlined' size='large' type='submit'>
            发送
            <SendIcon style={{ marginLeft: 8 }} />
          </SubmitButton>
        </form>
      </Box>
    </Layout>
  );
};

export default ContactUsPage;

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query contactUsPageQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => <ContactUsPage data={data} />}
//   />
// );
