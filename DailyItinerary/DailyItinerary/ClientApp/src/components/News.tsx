import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as SettingStore from '../store/Settings';
import { Card } from 'react-bootstrap';


type SettingProps =
    SettingStore.SettingState &
    typeof SettingStore.actionCreators &
    RouteComponentProps<{}>;


class News extends React.PureComponent<SettingProps> {

    componentDidMount() {
        var newsTopics = this.props.newsTopics;
        var t = "";
        for (var topic in newsTopics) {
            t += "-" + newsTopics[topic];
        }
        //fetch("news/" + t).then(response => response.json())
        //    .then(data => {
        //        console.log(data);
        //    });

    }

    example = () => {
        const [count, setCount] = React.useState(50);
        return (
            <h1>{count}</h1>
        )
    }

    public render() {
        return this.example(
        
    //        <React.Fragment>
    //            <Card style={{ width: '18rem' }}>

    //                <Card.Body>
    //                    <Card.Title>Card Title</Card.Title>
    //                    <Card.Text>
    //                        Some quick example text to build on the card title and make up the bulk of
    //                        the card's content.
    //</Card.Text>

    //                </Card.Body>
    //            </Card>
    //            <Card style={{ width: '18rem' }}>

    //                <Card.Body>
    //                    <Card.Title>Card Title</Card.Title>
    //                    <Card.Text>
    //                        Some quick example text to build on the card title and make up the bulk of
    //                        the card's content.
    //</Card.Text>

    //                </Card.Body>
    //            </Card>
    //        </React.Fragment>
        //);
    }
};

export default connect(
    (state: ApplicationState) => state.setting,
    SettingStore.actionCreators
)(News);
