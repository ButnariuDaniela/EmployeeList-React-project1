import React from 'react';
import UserList from '../../components/UserList/UserList'
import UserAddForm from '../../components/UserAddForm/UserAddForm';
import PostList from '../../components/PostList/PostList';
import '../../App.css';
import Layout from '../../components/Layout/Layout';
import {Button} from 'primereact/button';
import user1 from '../../assets/images/a1.jpg';
import user2 from '../../assets/images/a2.jpg';
import user3 from '../../assets/images/a3.jpg';
import user4 from '../../assets/images/a4.jpg';
import user5 from '../../assets/images/a5.jpg';
import user6 from '../../assets/images/a6.jpg';


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      showPosts: false,
      users: [],
      photos: [user1, user2, user3, user4, user5, user6],
      salaries: [5000, 4890, 6500, 10000, 7100, 9600]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 7);
        data.forEach(user => {
          user.isGoldClient = true;
          user.photo = this.state.photos[user.id-1];
          user.salary = this.state.salaries[user.id-1]
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
      <div className="home container-fluid" style={{background: this.state.background, color:this.state.color}}>
        <Layout>
          <div className="container-fluid container-min-max-width p-0">
              <div className='buttons-color container justify-content-center'>
                <div className='row'>
                  <label htmlFor='background-color' className='col-4'>Background color: </label>
                  <input name="background-color" type="color" className="form-control form-control-color col-2" value='#faf8f2' onChange={(event) => this.changeColor(event)}/><br/>
                  <label htmlFor="font-color" className='col-4'>Font color: </label>
                  <input name="font-color" type="color" className="form-control form-control-color col-2" value="#354857" onChange={(event) => this.handleColorChange(event)}/><br/>
                </div>
              </div>
              <div className='row m-0'>
                <Button id="arata-post" className="switch-button p-button fs-2 mb-3" onClick={() => this.handlePost()}>
                  {this.state.showPosts?"APASA PENTRU USERI":"APASA PENTRU POSTARI"}
                </Button> 
              </div>
              <div className='row base-form'>
                  {this.state.showPosts ? null : <UserAddForm submitAddForm={(event, name, email, isGoldClient, salary, photo) => this.submitAddForm(event, name, email, isGoldClient, salary, photo)}/>}
              </div>
              <div className='list-title gb-color gf-color rounded-0 row m-0 mt-5'>
                <h1 className='col-12 text-md-center display-3'>{this.state.showPosts ? "POSTARI" : "USERI"}</h1>
              </div>
              {/* {this.state.showPosts ? <PostList /> : <UserList users={this.state.users} deleteUsers={(event) => this.deleteUsers(event)}/>} */}
              <div className='row m-0'>
                {this.state.showPosts ? <PostList /> : <UserList users={this.state.users} delete={(name) => this.delete(name)}/>}
              </div>
          </div>
          </Layout>
      </div>
    );
  }
}

export default Home;
