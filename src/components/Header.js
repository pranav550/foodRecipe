import React from 'react';

const Header = (props) => {
    const {search, onInputChange, onSearchClick}=props
    return (
        <div className="jumbotron" >
            <div className="display-1">
                <span className="material-icons brand-icon">
                    fastfood
                </span>
                Food Recipe</div>

            <div className="input-group mb-3 w-50 mx-auto">
                <input type="text"
                    className="form-control"
                    placeholder="Search Your Recipe"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={search}
                    onChange={onInputChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-dark" onClick={onSearchClick}>Search Recipe</button>
                </div>
            </div>
        </div>
    )

}

export default Header