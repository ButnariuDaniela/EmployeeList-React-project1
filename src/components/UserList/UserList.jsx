import React from 'react';
import UserItem from '../UserItem/UserItem';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){

        // fetch('https://jsonplaceholder.typicode.com/photos')
        // .then(respons => respons.json())
        // .then((objectPhotos) => {
        //     const photosFiltered = objectPhotos.filter((photo) => photo.id < 4);
        //     const photoOnly = photosFiltered.map((photoObj) => photoObj.url);
        //     return this.setState({photos: photoOnly});
        // })
        
    };

    deleteUser(event){
        let userForDelete = event.target.value;
        this.props.deleteUsers(userForDelete);
    }



    render(){
        console.log(this.state)
        return (
            <div className='users-list container-fluid container-min-max-width m-0 p-0'>
                <div className='content row m-0'>
                    { this.props.users.map((user, index) => {
                        return <UserItem
                            id={ user.id }
                            name={ user.name }
                            email={ user.email }
                            isGoldClient={ user.isGoldClient }
                            salary={user.salary}
                            photo={user.photo}
                            key={ index }
                            delete={(name) => this.props.delete(name)}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default UserList;