import React, { Component } from 'react'
import ReadMoreReadLess from './ReadMoreReadLess';

export class MenuItem extends Component {
  render() {
      let {price,title,description,urlToImage,url}=this.props;
    return (
      <><div className='my-3 menuitem'>
        <div className="card " style={{width:'20rem',height:'auto'}}>
            <img className="card-img-top" src={urlToImage} alt="Title"/>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <ReadMoreReadLess>{description}</ReadMoreReadLess>
                <a href="/" className='btn btn-outline-light mr-1'>{price}</a>
                <a href={url} className='btn btn-outline-light btn-space' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to Order">Order Now</a>
            </div>
        </div>
        </div>
      </>
    )
  }
}

export default MenuItem