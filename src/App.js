
import { useEffect, useState } from 'react';
import './App.css';




function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}


function User(props) {
  return (
    <div style={{ border: '2px solid green', margin: '10px' }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(35);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}



// const nayoks = ['jasim', 'bappa', 'habib', 'jabib', 'labib', 'tuhin']
// {
//   nayoks.map(nayok => <li> Name: {nayok}</li>)
// }

// {
//   nayoks.map(nayok => <Person name={nayok}></Person>)
// }

// {/* <Person nayok="Mizan" nayika="Mohsina"></Person>
// <Person nayok="Bappa" nayika="Seka"></Person>
// <Person nayok="Alamgir" nayika="Sabina"></Person> */}
// <Friend movie="Janina" rate="5.6"></Friend>
// <Friend movie="Fazil" rate="0.56"></Friend>

// function Person(props) {
//   return (
//     <div className='person'>
//       <h1>{props.name}</h1>
//       <p>{props.nayika}</p>
//     </div>
//   )
// }

// function Friend(props) {
//   return (
//     <div className='container'>
//       <h1>Name: {props.movie}</h1>
//       <p>Rattings: {props.rate}</p>
//     </div>
//   )
// }

export default App;
