import Button from 'react-bootstrap/Button';
import UpdateGolf from './UpdateGolf';
import {useState} from 'react'

const IndivCourse = (props) => {
    const [form, toggleForm] = useState(false);
    const handleToggle = () => {
        toggleForm(!form)
      }
    return (
        <li key={props.id}> {props.name}<br/>
               {/* <button onClick={
                 (event) => {
                   deleteGolf(golfs._id)
                 } */}
               {/* }>DELETE {golfs.name}</button> */}
               <Button onClick={
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
                   <Button onClick={
                       (event) => {
                           handleToggle()
                       }
                   } >CLOSE EDIT FORM</Button>
                   </>
                    : <Button onClick={
                     (event) => {
                       handleToggle()
                     }
                   }>EDIT INFO</Button>}
                   <Button onClick={
                     (event) => {
                       props.addToCompleted(props.index)
                     }
                   }>MOVE TO COMPLETED COURSES</Button>
               </li>
    )
}


export default IndivCourse;