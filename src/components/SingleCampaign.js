import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import GoalSetter from './GoalSetter';

class SingleCampaign extends Component {

  constructor(props) {
    super(props);

    this.state = {
      goalsOpen: false,
    };
  }

  toggleGoal = () => {
    this.setState({
      goalsOpen: !this.state.goalsOpen,
    });
  }
  setGoal = (newGoal) => {
    const { item } = this.props;
    item.goal = newGoal;
    this.setState({
      goalsOpen: !this.state.goalsOpen,
    });
  }

  render() {
    const { item } = this.props;
    const { goalsOpen } = this.state;

    return (
      <div className="single-campaign col-group">
        <div className="single-campaign__head">
          <div className="single-campaign__title" title={item.title}>{item.title}</div>
          <div className="single-campaign__times">
            <div className="single-campaign__timedata"><strong>Event period: </strong>
              {moment(item.start_date).format("dddd, MMMM Do YYYY")} -&nbsp;
              {moment(item.end_date).format("dddd, MMMM Do YYYY")}<br/>
              <strong>Created at: </strong>
              {moment(item.created_at).format("dddd, MMMM Do YYYY, h:mm a")}
            </div>
            <div className="single-campaign__goal">
              {item.goal ? <p className={`single-campaign__goalset ${item.goal}`}>Goal: {item.goal}</p> :
                <div className="single-campaign__goalless">
                  {goalsOpen ?
                    <GoalSetter
                      goalsOpen
                      item
                      toggleGoal={this.toggleGoal}
                      setGoal={this.setGoal}
                    /> :
                    <button className="button" onClick={this.toggleGoal}>Set a goal!</button>
                  }
                </div>}
            </div>
          </div>
        </div>
        <div className="single-campaign__table col-group">
          <div className="single-campaign__value col-2 col-m-12" title="Event days">
            <span className="single-campaign__label">Event days:</span>
            <div className="single-campaign__totalvalue">{item.days}</div>
          </div>
          <div className="single-campaign__value col-2 col-m-12" title="Lead conversion amount and value">
            <span className="single-campaign__label">Lead conversion:</span>
            <div
              className="single-campaign__totalvalue">{item.lead_conversion_amount ? item.lead_conversion_amount.toLocaleString('en-GB') : '-'}
              {item.lead_conversion_value_cents ?
                <span className="single-campaign__subvalue">
                  / €{item.lead_conversion_value_cents / 100}
                </span> : '-'
              }
            </div>
          </div>
          <div className="single-campaign__value col-2 col-m-12" title="Sales conversion amount and value">
            <span className="single-campaign__label">Sales conversion:</span>
            <div
              className="single-campaign__totalvalue">{item.sales_conversion_amount ? item.sales_conversion_amount.toLocaleString('en-GB') : '-'}
              {item.sales_conversion_value_cents ?
                <span className="single-campaign__subvalue">
                  / €{item.sales_conversion_value_cents / 100}
                </span> : '-'
              }
            </div>
          </div>
          <div className="single-campaign__value col-2 col-m-12" title="Reach">
            <span className="single-campaign__label">Reach:</span>
            <div className="single-campaign__totalvalue">{item.reach ? item.reach.toLocaleString('en-GB') : '-'}</div>
          </div>
          <div className="single-campaign__value col-2 col-m-12" title="Views (capture rate)">
            <span className="single-campaign__label">Views:</span>
            <div className="single-campaign__totalvalue">{item.views ? item.views.toLocaleString('en-GB') : '-'}
              {item.capture_rate ?
                <span className="single-campaign__subvalue">
                  {item.capture_rate.toFixed(2)}%
                </span> : '-'
              }
            </div>
          </div>
          <div className="single-campaign__value col-2 col-m-12" title="Interactions (interaction rate)">
            <span className="single-campaign__label">Interactions:</span>
            <div
              className="single-campaign__totalvalue">{item.interactions ? item.interactions.toLocaleString('en-GB') : '-'}
              {item.interaction_rate ?
                <span className="single-campaign__subvalue">
                  {item.interaction_rate.toFixed(2)}%
                </span> : '-'
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SingleCampaign.propTypes = {
  item: PropTypes.object.isRequired,
};

export default (SingleCampaign);
