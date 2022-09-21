import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(respons => respons.json())
        .then((objectPhotos) => {
            const photosFiltered = objectPhotos.filter((photo) => photo.id < 4);
            const photoOnly = photosFiltered.map((photoObj) => photoObj.url);
            return this.setState({photos: photoOnly});
        })
    };

    deleteUser(event){
        let userForDelete = event.target.value;
        this.props.deleteUsers(userForDelete);
        // const newUsers = this.props.users.filter((obj) => obj.name !== userForDelete)
    }



    render(){
        return (
            <div className='users-list'>
                <h2>Lista utilizatorilor:</h2>
                { this.props.users.map((user, index) => {
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        salary={user.salary}
                        photo={(user.id < 4)?this.state.photos[index]:user.photo}
                        key={ index }
                        delete={(name) => this.props.delete(name)}
                        // deleteUser={(event) => this.deleteUser(event)}
                    />
                })}
            </div>
        );
    }
}

export default UserList;