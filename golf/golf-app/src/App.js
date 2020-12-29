import { useState, useEffect } from 'react';
import UpdateGolf from './UpdateGolf';
import './App.css';
import Golfs from './Golfs';
import { set } from 'mongoose';

function App() {
    const [golfs, setGolfs] = useState([]);
    const [name, setName] = useState('');
    const [form, toggleForm] = useState(false);
  
     // Read
     const fetchGolfs = async () => {
      try{
        const response = await fetch('http://localhost:3000/golfs');
        const data = await response.json();
        setGolfs(data)
      }catch (error) {
        console.error(error)
      }
    }
    // Update
    const updateGolfs = async (id) => {
      console.log(id);
      try {
        const response = await fetch(`http://localhost:3000/golfs/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type' : 'application/json', 
          },
          body: JSON.stringify({url: "google.com"})
        })
        const data= await response.json();
        const filteredGolfs = golfs.filter(golf => golf._id !== data._id)
        setGolfs([...filteredGolfs, data]);
      }catch(error){
        console.log(error)
      }
    }
    // Delete
    const deleteGolf = async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/golfs/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-type' : 'application/json', 
            
          }
        })
        const data = await response.json();
        const filteredGolfs = golfs.filter(golf => golf._id !== data._id)
        setGolfs(filteredGolfs);
      } catch(error) {
        console.error(error)
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newGolf= {
        name: name
        
      }
      setGolfs([...golfs, newGolf]);
    setName('');
    
    }
  
    
    
    
    
    useEffect(() => {
      fetchGolfs()
      console.log('use effect')
     }, []);
    
    
    return (
      <div className="App">
      <header>
       <h1>Love Golf, Remember Golf</h1>
       <h2>Scrapbook your golfing adventures</h2>
       <Golfs updateGolfs={setGolfs} golfs={golfs} />
       <ul>
         {
           golfs.map(golf => {
             return (
               <li key={golfs._id}> {golfs.title}<br/>
               <button onClick={
                 (event) => {
                   deleteGolf(golfs._id)
                 }
               }>DELETE {golfs.name.url}</button>
               <button onClick={
                 (event) => {
                   deleteGolf(golf._id)
                 }
               }>DELETE {golf.title.url}</button>
                  <UpdateGolf 
                  updateGolf={setGolfs} 
                  golfs={golfs}
                  id={golfs._id}
                  name={golfs.name}
                  url={golfs.url}
                   />
               </li>
             )
           })
         }
       </ul>
       </header>
      </div>
     
    );
  }
  
  export default App;
  

