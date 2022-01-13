import React from 'react';


export default function AddProductForm(props){
    return(
        <form onSubmit={props.onFormSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                placeholder="Enter the name"
                className="ui-textfield"
                value={props.name}
                onChange={(e) => props.onNameChange(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <input
                id="description"
                type="text"
                placeholder="Enter the description"
                className="ui-textfield"
                value={props.description}
                onChange={(e) => props.onDescriptionChange(e.target.value)}
            />
        </div>
        <div className="form-footer">
            <div className="validation-msg">{props.validationMsg}</div>
            <input
                type="submit"
                className="ui-button"
                value="Add product"
            />
        </div>
    </form>
    );
}