
import React from 'react';

function Single(props) {
    const {id, activity, status} = props.item
    //console.log(props.item);
    console.log(status);
    console.log(activity);
    //console.log(props);
    const activityname = status ? <strike><span>{activity}</span></strike>:activity
    return ( 
        <div>
             <div data-testid={`single-${id}`}>{activityname}</div>
        </div>
       
     );
}

export default Single;