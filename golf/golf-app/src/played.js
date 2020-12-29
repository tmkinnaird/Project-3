import React from 'react'

const Completed = (props) => {
    return (
        <div>
            <h2>Completed</h2>
            <ul>
                {
                    props.completedItems.map((golfs, index) => {
                        if (golfs.completed === true) {
                            return <li>
                              <p>  {golfs.name} </p>
                              <p> {golfs.location} </p>
                              <p> {golfs.score} </p>
                                <a href={golfs.url} > GOLF COURSE WEBSITE </a>
                                <button onClick={()=> props.removeFromCompleted(index)}>Played Courses</button>
                            </li>
                        }
                        
                    })
                }
            </ul>
        </div>
    )
}

export default Completed;