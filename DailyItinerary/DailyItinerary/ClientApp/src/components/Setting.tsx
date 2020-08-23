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

    UpdateNewsSettingFromRedux = (topic: string) => {
        var topics = this.props.newsTopics;
        if (topics.includes(topic)) return true;
        return false;
    }

    UpdatePostalSettingFromRedux = () => {
        return this.props.postalCode;
    }

    SaveSettings = () => {

        //Get news topics
        var newsTopics = document.getElementsByName("news");
        var topics = [];
        for (var topic = 0; topic < newsTopics.length; topic++) {
            if ((newsTopics[topic] as HTMLInputElement).checked) {
                topics.push((newsTopics[topic] as HTMLInputElement).value);
            }
        }

        var postalCode = (document.getElementById("pc") as HTMLInputElement).value

        this.props.saveSettings(postalCode, topics);
    }

    public render() {
        return (
            <React.Fragment>
                <div className="parent">
                    <div className="news">
                        <h2>Pick your news settings:</h2>
                        <input type="checkbox" name="news" value="business" defaultChecked={this.UpdateNewsSettingFromRedux("business")} />Business<br /><br />
                        <input type="checkbox" name="news" value="entertainment" defaultChecked={this.UpdateNewsSettingFromRedux("entertainment")}/>Entertainment<br /><br />
                        <input type="checkbox" name="news" value="health" defaultChecked={this.UpdateNewsSettingFromRedux("health")}/>Health<br /><br />
                        <input type="checkbox" name="news" value="science" defaultChecked={this.UpdateNewsSettingFromRedux("science")}/>Science<br /><br />
                        <input type="checkbox" name="news" value="sports" defaultChecked={this.UpdateNewsSettingFromRedux("sports")}/>Sports<br /><br />
                        <input type="checkbox" name="news" value="technology" defaultChecked={this.UpdateNewsSettingFromRedux("technology")}/>Technology<br /><br />               

                    </div>
                    <div className="weather">
                        <h2>Enter your location for weather:</h2>
                        <label>
                            Enter your postal code
                                <input style={{ marginLeft: 20 }} id="pc" type="text" maxLength={7} minLength={6} name="postal_code" defaultValue={this.UpdatePostalSettingFromRedux()} />
                        </label>
                    </div>

                    <button type="submit" onClick={this.SaveSettings} > Update Settings</button>

                </div>

            </React.Fragment >
        );
    }
};

export default connect(
    (state: ApplicationState) => state.setting,
    SettingStore.actionCreators
)(Setting);
