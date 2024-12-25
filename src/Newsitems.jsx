import React from 'react'
import "./App.css"

const Newsitems=(props)=>{

   
    const { mode, title, descrition, imgUrl, newurl, author, date, source } = props;
    return (<>
      <div className={`card minimized-card bg-${mode}`} style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        <img src={!imgUrl ? "https://techcrunch.com/wp-content/uploads/2024/07/microsoft-logo-office.jpg?resize=1200,798" : imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden"> unread messages </span>
   </span></h5>
          <p className="card-text">{descrition}</p>
          <p className='card-text'><small className='text'>By {!author?"Unknown":author} on {new Date(date).toGMTString() } </small></p>
          <a href={newurl} target='_black' className="btn btn-sm btn-primary">see more</a>
        </div>
      </div>
      
    </>
    )
  }
export default Newsitems