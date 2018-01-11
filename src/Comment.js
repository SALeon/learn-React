import React from 'react';


export default function Comment({comment}){

    return(
        <div>
            <h5>{comment.user}</h5>
            <div>{comment.text}</div>
        </div>
    );
}
