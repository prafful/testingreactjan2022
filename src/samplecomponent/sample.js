import React from 'react';
import Single from './single';


function Sample() {

    const collection = [
        {id: 1, activity:"Learn React", status: true},
        {id: 2, activity:"Learn Redux", status: true},
        {id: 3, activity:"Learn Flutter", status: false},
        {id: 4, activity:"Learn Blockchain", status: true}
    ]

    return ( 
        <div>
        <div data-testid="test-sample1">Hello from Sample</div>
        <div>
            {collection.map(item=>{
                return (<Single key={item.id} item={item}></Single>)
            })}
        </div>
        </div>
     );
}

export default Sample;