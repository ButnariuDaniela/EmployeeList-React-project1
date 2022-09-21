import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Page404 from "./pages/Page404/Page404";


class App extends React.Component{
  constructor() {
    super();
    this.state = {}
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={Page404} />
        </Switch>
        {/* <Link to="/about">About</Link> */}
      </div>
    )
  }
}

export default App;



// import React from 'react';
// import UserList from './components/UserList';
// import UserAddForm from './components/UserAddForm';
// import PostList from './components/PostList/PostList';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       background: 'white',
//       color: 'black',
//       showPosts: false,
//       users: []
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => {
//         // console.log(data);
//         data = data.filter(user => user.id < 4);
//         data.forEach(user => {
//           user.isGoldClient = false;
//         });
//         this.setState({users: data});
//       })
//   }

//   changeColor(event) {
//     this.setState({background: event.target.value});
//   }

//   handlePost() {
//     this.setState({ showPosts: !this.state.showPosts });
//   }

//   handleColorChange(event){
//     const userColor = event.target.value;
//     // console.log(userColor)
//     this.setState({color: userColor});
//   }

//   getMaxId(users) {
//     let maxId = 0;

//     users.forEach(user => {
//       if (user.id > maxId) {
//         maxId = user.id;
//       }
//     });

//     return maxId;
//   }

//   submitAddForm(event, name, email, isGoldClient, salary, photo) {
//     event.preventDefault();
//     this.setState(prevState => {
//       return {
//         users: [
//           ...prevState.users,
//           {
//             id: this.getMaxId(prevState.users) + 1,
//             name,
//             email,
//             isGoldClient,
//             salary,
//             photo
//           }
//         ]
//       }
//     });
//   }

//   deleteUsers(userToDelete){  
//     const newUsers = this.state.users.filter((obj) => obj.name !== userToDelete);
//     this.setState({users : newUsers})
//   };

// delete(name){
//   const usersCopy = [...this.state.users];
  
//   const index = usersCopy.findIndex((user) => user.name === name);
//   if (index !== -1){
//     usersCopy.splice(index, 1);
//     this.setState({users: usersCopy});
//   }
//   console.log(index);
  
// }

//   render() {
//     return(
//       <div className="app" style={{background: this.state.background, color:this.state.color}}>
//         <h1>Proiectul 1</h1>
//         <div className='buttons-color'>
//           <label htmlFor='background-color'>Background color: </label>
//           <input name="background-color" type="color" onChange={(event) => this.changeColor(event)}/><br/>
//           <label htmlFor="font-color">Font color: </label>
//           <input name="font-color" type="color" onChange={(event) => this.handleColorChange(event)}/><br/>
//         </div>
//         <button className="switch-button" onClick={() => this.handlePost()}>{this.state.showPosts?"Arata Useri":"Arata Postari"}</button> 
//         {this.state.showPosts ? null : <UserAddForm submitAddForm={(event, name, email, isGoldClient, salary, photo) => this.submitAddForm(event, name, email, isGoldClient, salary, photo)}/>}
//         <h1>{this.state.showPosts ? "POSTARI" : "USERI"}</h1>
//         {/* {this.state.showPosts ? <PostList /> : <UserList users={this.state.users} deleteUsers={(event) => this.deleteUsers(event)}/>} */}
//         {this.state.showPosts ? <PostList /> : <UserList users={this.state.users} delete={(name) => this.delete(name)}/>}
//       </div>
//     );
//   }
// }

// export default App;
