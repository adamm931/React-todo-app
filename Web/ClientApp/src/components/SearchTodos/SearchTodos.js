import React, { Component } from 'react';
import { FilterType } from '../../constants/filterTypes'
import { connect } from 'react-redux'
import * as actions from '../../actions/actionsFactory'
import SelectFilterType from './SelectFilterType'

class SearchTodos extends Component {

    render() {
        return <div className="search-todos">
            <SelectFilterType
                setFilter={this.props.setFilter} 
                currentFilter={this.props.filter}
                filter={FilterType.All}
                label={'All'} 
            />
            <SelectFilterType
                setFilter={this.props.setFilter} 
                currentFilter={this.props.filter}
                filter={FilterType.Completed}
                label={'Completed'}  
            />
            <SelectFilterType
                setFilter={this.props.setFilter} 
                currentFilter={this.props.filter}
                filter={FilterType.All}
                label={'Uncompleted'}  
            />
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