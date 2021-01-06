import Button from 'react-bootstrap/Button';
import UpdateGolf from './UpdateGolf';
import {useState} from 'react'

const IndivCourse = (props) => {
    const [form, toggleForm] = useState(false);
    const handleToggle = () => {
        toggleForm(!form)
      }
    return (
        <li key={props.id} className="Courses"> {props.name}<br/>
               {/* <button onClick={
                 (event) => {
                   deleteGolf(golfs._id)
                 } */}
               {/* }>DELETE {golfs.name}</button> */}
               <Button  className="btn-dark btn-base" onClick={
                 (event) => {
                   props.deleteGolf(props.id)
                 }
               }>DELETE {props.name}</Button>
               {/* <button onClick={
                 (event) => {
                   
                 }
               }>Update Golf Stuff</button> */}
               { form ? <>
                 <UpdateGolf 
                  updateGolf={props.updateGolf} 
                  golfs={props.golfs}
                  id={props.id}
                  name={props.name}
                  url={props.url}
                  score={props.score}
                  location={props.location}
                  date={props.date}
                  deleteGolf={props.deleteGolf}
                  handleToggle={handleToggle}
                   /> 
                   <Button className="btn-dark btn-base" onClick={
                       (event) => {
                           handleToggle()
                       }
                   } >CLOSE EDIT FORM</Button>
                   </>
                    : <Button className="btn-dark btn-base" onClick={
                     (event) => {
                       handleToggle()
                     }
                   } >EDIT INFO</Button>}
                   <Button className="btn-dark btn-base" onClick={
                     (event) => {
                       props.addToCompleted(props.index)
                     }
                   } >MOVE TO COMPLETED COURSES</Button>
               </li>
    )
}


export default IndivCourse;