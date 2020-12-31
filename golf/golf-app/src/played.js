import React from 'react'

const Completed = (props) => {
    return (
        <div>
            <h2>Completed Courses</h2>
            <ul>
                {
                    props.completedItems.map((golfs, index) => {
                        if (golfs.completed === true) {
                            return <li>
                              <p>  {golfs.name} </p>
                              <p> {golfs.location} </p>
                              <p> {golfs.score} </p>
                                <a href={golfs.url} > GOLF COURSE WEBSITE </a>
                                <button onClick={()=> props.removeFromCompleted(index)}>Delete Played Course</button>
                            </li>
                        }
                        
                    })
                }
            </ul>
        </div>
    )
}

export default Completed;