import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {

  return (
    <div className="App">
    {/* <Counter></Counter> */}
      <Comments></Comments>
    </div>
  );
}


const Counter =()=>{

  const [count , setCount] = useState(0)
  const increaseCount = ()=> setCount(count+1);
  const decreaseCount = () => setCount(count-1);
  return(
    <div>
      <h1>Counter :{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}




const Comments = () => {
  const [comment,setComment] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.ir/comments')
    .then(res=>res.json())
    .then(data=>setComment(data))
  },[])
  return (
    <div>
      <h1>Comments:{comment.length}</h1>
      {
        comment.map(comment=><Comment name={comment.name} email={comment.email}body={comment.body}></Comment>)
      }
      <p></p>
    </div>
  );
};

function Comment(props){
  return(
    <div>
      <h1>Name: {props.name}</h1>
      <h4>Email : {props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}

export default App;
