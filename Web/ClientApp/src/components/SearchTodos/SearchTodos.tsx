import React, { FunctionComponent } from 'react';
import { FilterType } from '../../constants/filterTypes'
import SelectFilterType from './SelectFilterType';

const SearchTodos: FunctionComponent<{}> = () => {
    return (
        <div className="search-todos">
            <SelectFilterType 
                FilterType={FilterType.All}
            />
            <SelectFilterType
                FilterType={FilterType.Completed}
            />
            <SelectFilterType
                FilterType={FilterType.Uncompleted}
            />
        </div>
    )
}

export default SearchTodos