import { useRef } from 'react';

export default (props) => {
    const nameInput = useRef(null);
    const urlInput = useRef(null);
    const scoreInput = useRef(null);
    const locationInput = useRef(null);
    const dateInput = useRef(null);
    

    const updateGolf = async (event) => {
        event.preventDefault()
        const url = urlInput.current.value;
        const name = nameInput.current.value;
        const score = scoreInput.current.value;
        const location = locationInput.current.value;
        const date = dateInput.current.value;
        const body = JSON.stringify({name, url, score, location, date});
        // console.log(body);
       
        try {
            const response = await fetch(`https://tyler-golf-app.herokuapp.com/${props.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body 
            })
            const data = await response.json();
            const filteredGolfs = props.golfs.filter(golf => golf._id !== data._id)
            props.updateGolf([...filteredGolfs, data])
            props.handleToggle()
        } catch (error){
            console.log(error)
        }
    }
    
    
    
    return (
        <form onSubmit={updateGolf}>
         <label> UPDATE NAME: <input type="text" name="name" ref={nameInput} /><br/></label> 
         <label> UPDATE URL: <input type="text" name="url" ref={urlInput} /><br/></label> 
         <label> UPDATE SCORE: <input type="number" name="score" ref={scoreInput} /><br/></label>
         <label> UPDATE LOCATION: <input type="text" name="location" ref={locationInput} /><br/></label>
         <label> UPDATE DATE PLAYED: <input type="date" name="location" ref={dateInput} /></label>
            <input type="submit" value="Update Golf Course"/> 
        </form>
    )
}

