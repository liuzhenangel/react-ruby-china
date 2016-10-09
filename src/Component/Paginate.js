import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import '../Stylesheets/Paginate.css';

export default class Paginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      pageNum: 20,
      perPage: 20
    }
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);

    this.setState({offset: offset}, () => {
      let options = this.props.options
      options.offset = this.state.offset
      this.props.actions.fetchTopics(options)
    });
    ReactDOM.findDOMNode(this).parentNode.scrollIntoView()
  }

  render () {
    return (
      <div className='panel-footer'>
        <ReactPaginate previousLabel={"上一页"}
          nextLabel={"下一页"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageNum={this.state.pageNum}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          clickCallback={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
      </div>
    )
  }
}
