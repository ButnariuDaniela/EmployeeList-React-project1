import React from 'react';
import UserList from '../../components/UserList/UserList'
import UserAddForm from '../../components/UserAddForm/UserAddForm';
import PostList from '../../components/PostList/PostList';
import '../../App.css';
import Layout from '../../components/Layout/Layout';
import {Button} from 'primereact/button';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      showPosts: false,
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  handlePost() {
    this.setState({ showPosts: !this.state.showPosts });
  }

  handleColorChange(event){
    const userColor = event.target.value;
    this.setState({color: userColor});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient, salary, photo) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary,
            photo
          }
        ]
      }
    });
  }

  deleteUsers(userToDelete){  
    const newUsers = this.state.users.filter((obj) => obj.name !== userToDelete);
    this.setState({users : newUsers})
  };

delete(name){
  const usersCopy = [...this.state.users];
  
  const index = usersCopy.findIndex((user) => user.name === name);
  if (index !== -1){
    usersCopy.splice(index, 1);
    this.setState({users: usersCopy});
  }
  
}

  render() {
    return(
      <div className="app" style={{background: this.state.background, color:this.state.color}}>
        <Layout>
              <h1>INCARCARE DINAMICA UTILIZATORI</h1>
              <div className='buttons-color'>
                <label htmlFor='background-color'>Background color: </label>
                <input name="background-color" type="color" className="form-control form-control-color" value='#faf8f2' onChange={(event) => this.changeColor(event)}/><br/>
                <label htmlFor="font-color">Font color: </label>
                <input name="font-color" type="color" className="form-control form-control-color" value="#563d7c" onChange={(event) => this.handleColorChange(event)}/><br/>
              </div>
              <Button className="switch-button p-button-raised p-button-rounded" onClick={() => this.handlePost()}>
                {this.state.showPosts?"Arata Useri":"Arata Postari"}
              </Button> 
              {this.state.showPosts ? null : <UserAddForm submitAddForm={(event, name, email, isGoldClient, salary, photo) => this.submitAddForm(event, name, email, isGoldClient, salary, photo)}/>}
              <h1>{this.state.showPosts ? "POSTARI" : "USERI"}</h1>
              {/* {this.state.showPosts ? <PostList /> : <UserList users={this.state.users} deleteUsers={(event) => this.deleteUsers(event)}/>} */}
              {this.state.showPosts ? <PostList /> : <UserList users={this.state.users} delete={(name) => this.delete(name)}/>}
          </Layout>
      </div>
    );
  }
}

export default Home;
