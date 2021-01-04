import { useRef } from 'react';
// import { use } from '../../golf-app-api/controllers/golfs';

export default (props) => {
    const nameInput = useRef(null);
    const urlInput = useRef(null);
    const locationInput = useRef(null);
    const scoreInput = useRef(null);
    const dateInput = useRef(null);

    const createGolf = async (event) => {
        event.preventDefault()
        const url = urlInput.current.value;
        const name = nameInput.current.value;
        const score = scoreInput.current.value;
        const location = locationInput.current.value;
        const date = dateInput.current.value;
        const completed = false;
        const body = JSON.stringify({name, url, score, location, completed, date});
        event.currentTarget.reset();
        try {
            const response = await fetch('http://localhost:3000/golfs', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body 
            })
            const data = await response.json();
            props.updateGolfs([...props.golfs, data])
        } catch (error){
            console.log(error)
        }
    }
    
    
    
    return (
        <form onSubmit={createGolf}>
         <label>GOLF COURSE: <input type="text" name="title" ref={nameInput} /><br/></label> 
         <label>URL WEBSITE: <input type="text" name="url" ref={urlInput} /><br/></label> 
         <label>SCORE: <input type="number" name="score" ref={scoreInput} /><br/></label>
         <label>LOCATION: <input type="text" name="location" ref={locationInput}/><br/></label>
         <label>DATE PLAYED: <input type="date" name="date" ref={dateInput}/></label>
            <input type="submit" value="Create Bucket-List"/> 
        </form>
    )
}