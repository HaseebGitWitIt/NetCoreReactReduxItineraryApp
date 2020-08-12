import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import './Setting.css';
import * as CounterStore from '../store/Counter';

type CounterProps =
    CounterStore.CounterState &
    typeof CounterStore.actionCreators &
    RouteComponentProps<{}>;

class Setting extends React.PureComponent<CounterProps> {
    public render() {
        return (
            <React.Fragment>
                <table>
                    <tr>
                        <td><h2>Pick your news settings:</h2></td>
                        <td className="td_alignment"><h2>Enter your location for weather:</h2>
                            <label>
                                Enter your postal code
                                <input type="text" maxLength={7} minLength={6} name="postal_code" />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="news" value="business" defaultChecked />Business<br /><br />
                            <input type="checkbox" name="news" value="entertainment" defaultChecked />Entertainment<br /><br />
                            <input type="checkbox" name="news" value="general" defaultChecked />General<br /><br />
                            <input type="checkbox" name="news" value="health" defaultChecked />Health<br /><br />
                            <input type="checkbox" name="news" value="science" defaultChecked />Science<br /><br />
                            <input type="checkbox" name="news" value="sports" defaultChecked />Sports<br /><br />
                            <input type="checkbox" name="news" value="technology" defaultChecked />Technology<br /><br />
                        </td>
                    </tr>

                </table>
                <button style={{ marginTop: 50 }} type="submit">Update Settings</button>

            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.counter,
    CounterStore.actionCreators
)(Setting);
