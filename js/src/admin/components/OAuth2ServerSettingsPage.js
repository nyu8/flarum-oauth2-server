import ExtensionPage from 'flarum/admin/components/ExtensionPage';

import {settings} from '@fof-components';

const {
  items: {BooleanItem, SelectItem, StringItem, NumberItem},
} = settings;

export default class OAuth2ServerSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
    this.setting = this.setting.bind(this);
  }

  content() {
    return [
      <div className="container">
        <div className="BestAnswerSettingsPage">
          <div className="GeneralPreferences">
            <h3>Test</h3>
            <div className="Form-group">
              <BooleanItem
                name="nyu8-oauth2-server.test_boolean"
                setting={this.setting}
              >
                Test Boolean
              </BooleanItem>
            </div>
            <div className="Form-group">
              <StringItem
                name="nyu8-oauth2-server.test_string"
                setting={this.setting}
              >
                Test String
              </StringItem>
            </div>
            <div className="Form-group">
              <NumberItem
                name="nyu8-oauth2-server.test_number"
                placeholder="0"
                min="0"
                setting={this.setting}
              >
                Test number
              </NumberItem>
            </div>
          </div>
          <hr />
          {this.submitButton()}
        </div>
      </div>,
    ];
  }
}
``;
