import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import './Setting.css';
import * as SettingStore from '../store/Settings';

type SettingProps =
    SettingStore.SettingState &
    typeof SettingStore.actionCreators &
    RouteComponentProps<{}>;

class Setting extends React.PureComponent<SettingProps> {

    saveSettings = () => {
        this.props.saveSettings();
    }

    public render() {
        return (
            <React.Fragment>
                <div className="parent">
                    <div className="news">
                        <h2>Pick your news settings:</h2>
                        <input type="checkbox" name="news" value="business" defaultChecked />Business<br /><br />
                        <input type="checkbox" name="news" value="entertainment" defaultChecked />Entertainment<br /><br />
                        <input type="checkbox" name="news" value="general" defaultChecked />General<br /><br />
                        <input type="checkbox" name="news" value="health" defaultChecked />Health<br /><br />
                        <input type="checkbox" name="news" value="science" defaultChecked />Science<br /><br />
                        <input type="checkbox" name="news" value="sports" defaultChecked />Sports<br /><br />
                        <input type="checkbox" name="news" value="technology" defaultChecked />Technology<br /><br />

                        <button style={{ marginTop: 50 }} type="submit" onClick={this.saveSettings} > Update Settings</button>

                    </div>
                    <div className="weather">
                        <h2>Enter your location for weather:</h2>
                        <label>
                            Enter your postal code
                                <input type="text" maxLength={7} minLength={6} name="postal_code" />
                        </label>
                    </div>
                </div>
                <h1>{this.props.msg}</h1>
                <h1>{this.props.newsTopics}</h1>
                <h1>{this.props.postalCode}</h1>

            </React.Fragment >
        );
    }
};

export default connect(
    (state: ApplicationState) => state.setting,
    SettingStore.actionCreators
)(Setting);
