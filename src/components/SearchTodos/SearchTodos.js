import React, { Component } from 'react';
import { All, Completed, Uncompleted } from '../../constants/filterTypes'
import { connect } from 'react-redux'
import * as actions from '../../actions/actionsFactory'

class SearchTodos extends Component {

    render() {
        return <div className="search-todos">
            <label className="pointer">
                <input
                    type="radio"
                    name="filterType"
                    value={All}
                    checked={this.props.filter === All}
                    onChange={() => this.props.setFilter(All)} 
                    /> All: 
            </label>
            <label className="pointer">
                <input
                    type="radio"
                    name="filterType"
                    value={Completed}
                    checked={this.props.filter === Completed}
                    onChange={() => this.props.setFilter(Completed)} 
                    /> Completed: 
            </label>
            <label className="pointer">
                <input
                    type="radio"
                    name="filterType"
                    value={Uncompleted}
                    checked={this.props.filter === Uncompleted}
                    onChange={() => this.props.setFilter(Uncompleted)} 
                    /> Uncompleted: 
            </label>
        </div>
    }
}

const mapStateToProps = state => ({
    filter: state.filter
})

const mapDispatchToProps = dispatch => ({
    setFilter: type => dispatch(actions.requestSetFilter(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchTodos)