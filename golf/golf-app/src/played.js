import React from 'react'
import Button from 'react-bootstrap/Button'

const Completed = (props) => {
    return (
        <div className="completedCourses">
            <h4>COMPLETED COURSES</h4>
            <ul className="completed">
                {
                    props.completedItems.map((golfs, index) => {
                        if (golfs.completed === true) {
                            return <li>
                              <p> {golfs.name} </p>
                              <p> {golfs.location} </p>
                              <p> {golfs.score} </p>
                              <p> {golfs.date} </p>
                                <a href={golfs.url} target="_blank" > GOLF COURSE WEBSITE </a>
                                <Button className="btn-dark btn-base" onClick={()=> props.removeFromCompleted(index)}>DELETE PLAYED COURSE</Button>
                            </li>
                        }
                        
                    })
                }
            </ul>
        </div>
    )
}

export default Completed;