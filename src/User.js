import React from "react";


export const User = (props) => {
    const { name } = props;
    return (
        <div>
            <h1>User Component</h1>
            <h4>Name:{name.name}</h4>
            <h4>Age:{name.age}</h4>
            <h4>Gender:{name.gender}</h4>
        </div>
    );
}