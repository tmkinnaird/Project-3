import { useRef } from 'react';

export default (props) => {
    const nameInput = useRef(null);
    const urlInput = useRef(null);
    const scoreInput = useRef(null);
    const locationInput = useRef(null);
    

    const updateGolf = async (event) => {
        event.preventDefault()
        const url = urlInput.current.value;
        const name = nameInput.current.value;
        const score = scoreInput.current.value;
        const location = locationInput.current.value;
        const body = JSON.stringify({name, url});
        console.log(body);
       
        try {
            const response = await fetch(`http://localhost:3000/golfs/${props.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body 
            })
            const data = await response.json();
            const filteredGolfs = props.golfs.filter(golf => golf._id !== data._id)
            props.updateGolf([...filteredGolfs, data])
        } catch (error){
            console.log(error)
        }
    }
    
    
    
    return (
        <form onSubmit={updateGolf}>
         <label> UPDATE NAME: <input type="text" name="name" ref={nameInput} /><br/></label> 
         <label> UPDATE URL: <input type="text" name="url" ref={urlInput} /><br/></label> 
         <label> UPDATE SCORE: <input type="number" name="score" ref={scoreInput} /><br/></label>
         <label> UPDATE LOCATION: <input type="text" name="location" ref={locationInput} /></label>
            <input type="submit" value="Update Golf Course"/> 
        </form>
    )
}

