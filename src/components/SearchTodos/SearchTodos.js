import React, { Component } from 'react';
import { All, Completed, Uncompleted } from '../../constants/filterTypes'
import { connect } from 'react-redux'
import * as actions from '../../actions/actionsFactory'

class SearchTodos extends Component {

    render() {
        return <div className="search-todos">
            <input
                type="radio"
                name="filterType"
                value={All}
                checked={this.props.filter === All}
                onChange={() => this.props.setFilter(All)} />
            <label >All: </label>

            <input
                type="radio"
                name="filterType"
                value={Completed}
                checked={this.props.filter === Completed}
                onChange={() => this.props.setFilter(Completed)} />
            <label >Completed: </label>

            <input
                type="radio"
                name="filterType"
                value={Uncompleted}
                checked={this.props.filter === Uncompleted}
                onChange={() => this.props.setFilter(Uncompleted)} />
            <label >Uncompleted: </label>
        </div>
    }
}

const mapStateToProps = state => ({
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    setFilter: type => dispatch(actions.setFilter(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchTodos)