import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Completed = (props) => {
    return (
        <div className="completedCourses">
            <h4>COMPLETED COURSES</h4>
            <ul className="completed">
                {
                    props.completedItems.map((golfs, index) => {
                        if (golfs.completed === true) {
                            return <li>
                                <Card>
                                    <Card.Body>
                                        <Card.Title> COURSE: {golfs.name} </Card.Title>
                                        <Card.Text> LOCATION: {golfs.location} </Card.Text>
                                        <Card.Text> SCORE: {golfs.score} </Card.Text>
                                        <Card.Text> DATE PLAYED:{golfs.date} </Card.Text>
                                        <Card.Text><a href={golfs.url} target="_blank" > GOLF COURSE WEBSITE </a></Card.Text>
                                        <Button className="btn-dark btn-base" onClick={()=> props.removeFromCompleted(index)}>DELETE PLAYED COURSE</Button>
                                    </Card.Body>
                                </Card>
                            </li>
                        }
                        
                    })
                }
            </ul>
        </div>
    )
}

export default Completed;