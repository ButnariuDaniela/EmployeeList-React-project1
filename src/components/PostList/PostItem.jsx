import React from "react";

function PostItem(props){
    const{title, body} = props;
    return (
        <div>
            <h1>{ title }</h1>
            <p>{ body }</p>
        </div>
    );
}

export default PostItem;