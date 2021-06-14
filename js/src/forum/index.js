import app from 'flarum/forum/app';
import SignInPage from './components/SignInPage';

app.initializers.add('nyu8-oauth2-server', () => {
  console.log('Hello, OAuth2 server!');
  app.routes['nyu8.sign-in'] = {
    path: '/sign-in',
    component: SignInPage,
  };
});
