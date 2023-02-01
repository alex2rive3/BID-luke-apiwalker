import React from "react";

const Films = ({ title, director, producer, release_date }) => {
    return (
        <div className="card">
            <h2>Title: {title}</h2>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
            <p>Release Date: {release_date}</p>
        </div>
    );
};

export default Films;
