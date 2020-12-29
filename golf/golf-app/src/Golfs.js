import { useRef } from 'react';

export default (props) => {
    const nameInput = useRef(null);
    const urlInput = useRef(null);
    

    const createGolf = async (event) => {
        event.preventDefault()
        const url = urlInput.current.value;
        const name = nameInput.current.value;
        const body = JSON.stringify({name, url});
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
         <label>URL: <input type="text" name="url" ref={urlInput} /><br/></label> 
            <input type="submit" value="Create Bucket-List"/> 
        </form>
    )
}