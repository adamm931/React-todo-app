import React from 'react'
import { ISelectFilterTypeProps } from './States/ISelectFilterTypeProps'
import { ISelectFilterTypeDispatch } from './States/ISelectFilterTypeDispatch'
import { ActionCreator } from '../../actions/ActionCreator'
import { connect } from 'react-redux'
import { FilterType } from '../../constants/filterTypes'
import { ITodoState } from '../../model/ITodoState'

const SelectFilterType: React.FC<ISelectFilterTypeProps & ISelectFilterTypeDispatch> = (props) => {
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

const mapStateToProps = (state: ITodoState, ownProps: ISelectFilterTypeProps): ISelectFilterTypeProps => ({
    Checked: ownProps.FilterType === state.CurrentFilter,
    FilterType: ownProps.FilterType,
})

const mapDispatchToProps = (dispatch: any, ownProps: ISelectFilterTypeProps): ISelectFilterTypeDispatch => ({
    SetFilter: () => dispatch(ActionCreator.RequestSetFilter(ownProps.FilterType))
})

export default connect<ISelectFilterTypeProps, ISelectFilterTypeDispatch, ISelectFilterTypeProps, ITodoState>(
    mapStateToProps,
    mapDispatchToProps
)(SelectFilterType);
