import React, { FunctionComponent } from 'react'
import { ISelectFilterTypeProps } from './States/ISelectFilterTypeProps'
import TodoState from '../../model/TodoStateModel'
import { ISelectFilterTypeDispatch } from './States/ISelectFilterTypeDispatch'
import { ActionCreator } from '../../actions/ActionCreator'
import { connect } from 'react-redux'
import { FilterType } from '../../constants/filterTypes'

const SelectFilterType: FunctionComponent<ISelectFilterTypeProps & ISelectFilterTypeDispatch> = (props) => {
    return (
        <label className="pointer">
            <input
                type="radio"
                name="filterType"
                value={props.FilterType}
                checked={props.Checked}
                onChange={props.SetFilter} 
            /> {FilterType[props.FilterType]} 
        </label>
    )
}

const mapStateToProps = (state: TodoState, ownProps: ISelectFilterTypeProps): ISelectFilterTypeProps => ({
    Checked: ownProps.FilterType === state.CurrentFilter,
    FilterType: ownProps.FilterType,
})

const mapDispatchToProps = (dispatch: any, ownProps: ISelectFilterTypeProps): ISelectFilterTypeDispatch => ({
    SetFilter: () => dispatch(ActionCreator.RequestSetFilter(ownProps.FilterType))
})

export default connect<ISelectFilterTypeProps, ISelectFilterTypeDispatch, ISelectFilterTypeProps, TodoState>(
    mapStateToProps,
    mapDispatchToProps
)(SelectFilterType);
