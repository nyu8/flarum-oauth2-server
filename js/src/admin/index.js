import app from 'flarum/admin/app';
import OAuth2ServerSettingsPage from './components/OAuth2ServerSettingsPage';

app.initializers.add('nyu8-oauth2-server', () => {
  console.log('Hello, OAuth2 server!');
  app.extensionData
    .for('nyu8-oauth2-server')
    .registerPage(OAuth2ServerSettingsPage);
});
