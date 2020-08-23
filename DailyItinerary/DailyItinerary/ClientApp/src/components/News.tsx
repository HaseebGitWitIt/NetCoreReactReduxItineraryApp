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


class News extends React.PureComponent<SettingProps, {articles: any[]}> {

    constructor(props: any) {
        super(props);
        this.state = { articles: [] }
    }

    componentDidMount() {
        this.getNewsArticles();
    }

    getNewsArticles = (): void => {
        var newsTopics = this.props.newsTopics;
        var t = "";
        for (var topic in newsTopics) {
            t += "-" + newsTopics[topic];
        }
        fetch("news/" + t).then(response => response.json())
            .then(data => {
                this.setState({ "articles": data });
            });
    }

    public render() {
        if (this.state.articles && this.state.articles.length > 0) {


            return (
                <React.Fragment>
                    <Card style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>A Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>

                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>

                        </Card.Body>
                    </Card>
                </React.Fragment>
            );
        } else {
            return (<h1>Make sure you have news categories checked in settings!</h1>);
        }
    }
};

export default connect(
    (state: ApplicationState) => state.setting,
    SettingStore.actionCreators
)(News);
