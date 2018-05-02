import React, {Component} from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

class GoalSetter extends Component {

  handleToggle = () => {
    this.props.toggleGoal();
  }
  handleSetGoal = (newGoal) => {
    this.props.setGoal(newGoal);
  }

  handleClickOutside() {
    this.handleToggle();
  }

  render() {
    const {setGoal, toggleGoal, goalsOpen} = this.props;

    return (
      <div className="goal-setter">
        <button className="button" onClick={this.handleToggle}>Cancel</button>
        <button className="button awareness" onClick={() => this.handleSetGoal('awareness')}>Set awareness</button>
        <button className="button consideration" onClick={() => this.handleSetGoal('consideration')}>Set consideration
        </button>
        <button className="button conversions" onClick={() => this.handleSetGoal('conversions')}>Set conversions
        </button>
      </div>
    );
  }
}

GoalSetter.propTypes = {
  goalsOpen: PropTypes.bool,
  item: PropTypes.object.isRequired,
  toggleGoal: PropTypes.func,
  setGoal: PropTypes.string,
};

export default (onClickOutside(GoalSetter));
