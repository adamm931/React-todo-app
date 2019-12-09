import React from 'react'

export default (props) => 
    <label className="pointer">
        <input
            type="radio"
            name="filterType"
            value={props.filter}
            checked={props.currentFilter === props.filter}
            onChange={() => props.setFilter(props.filter)} 
        /> {props.label}: 
    </label>