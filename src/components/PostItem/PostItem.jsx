import React from "react";

function PostItem(props){
    const{title, body, photo} = props;
    return (
        <div className="col-12 col-md-6 my-3">
            <div className="d-flex flex-row align-items-center mb-5">
                <img src={photo} alt='img' width='300px'></img>
                <h1 className="display-6 fs-3">{ title }</h1>
            </div>
            <p>{ body }</p>
        </div>
    );
}

export default PostItem;