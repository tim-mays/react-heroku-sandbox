import React, { PropTypes, Component } from 'react';
import styles from './LessonsPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class LessonsPage extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  renderPeople (people){
    console.warn('fucking here');

    return people.map(({last_name:lastName}) =>
      <li>{lastName}</li>
    );
  }

  renderVIP({first_name, last_name}) {
    return <strong>`${first_name} ${last_name}`</strong>
  }

  render() {
    this.context.onSetTitle(this.props.title);

    // Get sample data from https://www.mockaroo.com/
    let people = [{
      "id": 1,
      "first_name": "Jennifer",
      "last_name": "Nelson",
      "email": "jnelson0@nsw.gov.au"
    }, {
      "id": 2,
      "first_name": "Jonathan",
      "last_name": "Gutierrez",
      "email": "jgutierrez1@sitemeter.com"
    }, {
      "id": 3,
      "first_name": "Ernest",
      "last_name": "Freeman",
      "email": "efreeman2@miitbeian.gov.cn"
    }, {
      "id": 4,
      "first_name": "Cheryl",
      "last_name": "Richardson",
      "email": "crichardson3@shinystat.com"
    }, {
      "id": 5,
      "first_name": "Elizabeth",
      "last_name": "Ferguson",
      "email": "eferguson4@bloglines.com"
    }];

    let [Nelson,,,,Ferguson] = people;

    return (
      <div className="LessonsPage">
        <div className="LessonsPage-container">
          {
            this.props.path === '/' ? null : <h1>{this.props.title}</h1>
          }
          <div>
            <h2>VIPS</h2>
            {this.renderVIP(Nelson)}
            {this.renderVIP(Ferguson)}
          </div>
          <ul>
            {this.renderPeople(people)}
          </ul>
        </div>
      </div>
    );
  }

}

export default LessonsPage;
