import { useState, useEffect } from 'react';
import './App.css';
import Golfs from './Golfs';
import Completed from './played';
// import Button from 'react-bootstrap/Button';
import IndivCourse from './IndivCourse';
// import { set } from 'mongoose';

function App() {
    const [golfs, setGolfs] = useState([]);
    const [name, setName] = useState('');
    
    const [completedList, updateCompleted] = useState([]);
    // const [completed, setCompleted] = useState(false);
   
     // Read
     const fetchGolfs = async () => {
      try{
        const response = await fetch('https://tyler-golf-app.herokuapp.com/golfs');
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
        const response = await fetch(`https://tyler-golf-app.herokuapp.com/${id}`, {
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
      // toggleForm(true);
      updateCompleted([...completedList, currentGolfs]);
}
    
const removeFromCompleted = (index) => {
  updateCompleted([...completedList.slice(0,index), ...completedList.slice(index + 1)]);
}
    
    
    
    useEffect(() => {
      fetchGolfs()
      // toggleForm()
      console.log('use effect')
     }, []);
    
    
    return (
      <div className="App">
      <header>
       <h1>Golf Bucket-List</h1>
       <h2>Scrapbook your golfing adventures.
       Remember the good times and the courses you've played!</h2>
        <Golfs updateGolfs={setGolfs} golfs={golfs} addToCompleted={addToCompleted}/> 
       {/* <Golfs golfs={golfs} */}
       {/* addToCompleted={addToCompleted}/> */}
       <ul>
         {
           golfs.map((golf, index) => {
             if(golf.completed === false) {
              return (
                <IndivCourse 
                  updateGolf={setGolfs} 
                  golfs={golfs}
                  id={golf._id}
                  name={golf.name}
                  url={golf.url}
                  score={golf.score}
                  location={golf.location}
                  date={golf.date}
                  deleteGolf={deleteGolf}
                  addToCompleted={addToCompleted}
                  index={index}
                />
              )
             }else {
               return
             }
             
           })
         }
       </ul>
       <Completed completedItems={completedList} removeFromCompleted={removeFromCompleted} />
       <h3>@TM TooGood Enterprises</h3>
       </header>
      </div>
     
    );
  }
  
  export default App;
  

