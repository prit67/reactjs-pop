import { useState } from "react"

const ReadMoreReadLess = ({children}) => {

    const text = children;

    const [isReadMoreShown,setReadMoreShown]=
    useState(false)

    const toggleBtn= () =>{
        setReadMoreShown(prevState=>!prevState)
    }

    return(
        <div className="read-more-read-less">
            {isReadMoreShown ? text : text.substr(0,35)}
            <p onClick={toggleBtn}>{isReadMoreShown ? 'Read Less': '...Read More'}</p>
        </div>
    )
}

export default ReadMoreReadLess