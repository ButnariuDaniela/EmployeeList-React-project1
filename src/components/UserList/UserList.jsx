import React from 'react';
import UserItem from '../UserItem/UserItem';
// import { PhotoService } from '../../PhotoService/PhotoService';
import user1 from '../../assets/images/a1.jpg';
import user2 from '../../assets/images/a2.jpg';
import user3 from '../../assets/images/a3.jpg';
import user4 from '../../assets/images/a4.jpg';
import user5 from '../../assets/images/a5.jpg';
import user6 from '../../assets/images/a6.jpg';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [user1, user2, user3, user4, user5, user6],
            salaries: [5000, 4890, 6500, 10000, 7100, 9600]
        };
        // this.photoService = new PhotoService();
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
                            salary={(user.id < 7)?this.state.salaries[index]:user.salary}
                            photo={(user.id < 7)?this.state.photos[index]:user.photo}
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