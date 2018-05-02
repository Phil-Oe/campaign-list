import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) return;
    const { count } = nextProps;
    this.setState({ count });
  }

  onPageChange = e => {
    const index =
      Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
    this.props.onPageChange(index + this.state.startPage);
  }

  goPrevPage = () => {
    this.props.onPageChange(this.props.page - 1);
  }

  goNextPage = () => {
    this.props.onPageChange(this.props.page + 1);
  }

  render() {
    const { count } = this.state;
    const { page } = this.props;

    const prevPage = page === 1 ? null :
      <button
        className="pagination__button button"
        onClick={this.goPrevPage}
      >prev</button>;
    const nextPage = page === count ? null :
      <button
        className="pagination__button button"
        onClick={this.goNextPage}
      >next</button>;

    return (
      <div className="pagination col-group">
        <div className="pagination__col left col-6">{prevPage}</div>
        <div className="pagination__col right col-6">{nextPage}</div>
        <div className="clearfix"/>
      </div>
    );
  }
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  count: PropTypes.number,
  page: PropTypes.number,
};


export {Pagination as PureComponent};
export default (Pagination);
