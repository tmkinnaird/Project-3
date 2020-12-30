import { useState, useEffect } from 'react';
import UpdateGolf from './UpdateGolf';
import './App.css';
import Golfs from './Golfs';
import Completed from './played';
// import { set } from 'mongoose';

function App() {
    const [golfs, setGolfs] = useState([]);
    const [name, setName] = useState('');
    const [form, toggleForm] = useState(false);
    const [completedList, updateCompleted] = useState([]);
    // const [completed, setCompleted] = useState(false);
  
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
    // // Update
    // const updateGolfs = async (id) => {
    //   console.log(id);
    //   try {
    //     const response = await fetch(`http://localhost:3000/golfs/${id}`, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-type' : 'application/json', 
    //       },
    //       body: JSON.stringify({url: "google.com"})
    //     })
    //     const data= await response.json();
    //     const filteredGolfs = golfs.filter(golf => golf._id !== data._id)
    //     setGolfs([...filteredGolfs, data]);
    //   }catch(error){
    //     console.log(error)
    //   }
    // }
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
        name: name,
        completed: false
        
        
      }
      setGolfs([...golfs, newGolf]);
    setName('');
    
    }
  
    const addToCompleted = (index) => {
        
      const currentGolfs = golfs[index];
      console.log(currentGolfs);
      currentGolfs.completed = true;
      toggleForm(true);
      updateCompleted([...completedList, currentGolfs]);
}
    
const removeFromCompleted = (index) => {
  updateCompleted([...completedList.slice(0,index), ...completedList.slice(index + 1)]);
}
    
    
    
    useEffect(() => {
      fetchGolfs()
      toggleForm()
      console.log('use effect')
     }, []);
    
    
    return (
      <div className="App">
      <header>
       <h1>Love Golf. Remember Golf.</h1>
       <h2>Scrapbook your golfing adventures. <br/>
       Remember your friends, <br/> good times,<br/> and the courses you've played!</h2>
        <Golfs updateGolfs={setGolfs} golfs={golfs} addToCompleted={addToCompleted}/> 
       {/* <Golfs golfs={golfs} */}
       {/* addToCompleted={addToCompleted}/> */}
       <ul>
         {
           golfs.map((golf, index) => {
             if(golf.completed === false) {
              return (
               <li key={golf._id}> {golf.name}<br/>
               {/* <button onClick={
                 (event) => {
                   deleteGolf(golfs._id)
                 } */}
               {/* }>DELETE {golfs.name}</button> */}
               <button onClick={
                 (event) => {
                   deleteGolf(golf._id)
                 }
               }>DELETE {golf.name}</button>
               <button onClick={
                 (event) => {
                   
                 }
               }>Update Golf Course</button>
                 <UpdateGolf 
                  updateGolf={setGolfs} 
                  golfs={golfs}
                  id={golf._id}
                  name={golf.name}
                  url={golf.url}
                  score={golf.score}
                  location={golf.location}
                   />
                   <button onClick={
                     (event) => {
                       addToCompleted(index)
                     }
                   }>Played Courses</button>
               </li>
              )
             }else {
               return
             }
             
           })
         }
       </ul>
       <Completed completedItems={completedList} removeFromCompleted={removeFromCompleted} />
       <h3>@TM TooGood</h3>
       </header>
      </div>
     
    );
  }
  
  export default App;
  

