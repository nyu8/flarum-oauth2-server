import app from 'flarum/forum/app';

app.initializers.add('nyu8-oauth2-server', () => {
  console.log('Hello, OAuth2 server!');
});