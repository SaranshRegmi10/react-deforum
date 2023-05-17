import React from "react";

function Newsitem(props) {

  let { title, description, imageUrl, newsurl, author, date, source } = props
  return (
    <div>
      <div className="card my-3">
        <img src={imageUrl} className="card-img-top" alt="DE FORUM" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>     
          <p className="card-text">{description}</p>
          <span className="badge text-bg-info">{source}</span>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author}-{new Date(date).toDateString()}</small></p>
          <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark">See More</a>
        </div>
      </div>
    </div>
  )
}
export default Newsitem;
