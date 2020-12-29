import { useRef } from 'react';

export default (props) => {
    const nameInput = useRef(null);
    const urlInput = useRef(null);
    

    const updateGolf = async (event) => {
        event.preventDefault()
        const url = urlInput.current.value;
        const name = nameInput.current.value;
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
            props.updateGolfs([...filteredGolfs, data])
        } catch (error){
            console.log(error)
        }
    }
    
    
    
    return (
        <form onSubmit={updateGolf}>
         <label> UPDATE NAME: <input type="text" name="name" ref={nameInput} /><br/></label> 
         <label> UPDATE URL: <input type="text" name="url" ref={urlInput} /><br/></label> 
            <input type="submit" value="Update Golf Course"/> 
        </form>
    )
}

