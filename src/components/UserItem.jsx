import React from 'react';

class UserItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        console.log(this.props);
        const {name, email, isGoldClient, salary, photo} = this.props;
        return (
            <div>
                <h3>{ name }</h3>
                <p>{ email }</p>
                { isGoldClient
                    ? <h3>Client GOLD</h3>
                    : null
                }
                <p>{ salary }</p>
                <img width="150px" alt='img' src={photo}></img>
                {/* <button value={name} onClick={(event) => this.props.deleteUser(event)}>del</button> */}
                <button onClick={() => this.props.delete(name)}>delet</button>
                {/* <button>DEL</button> */}
            </div>
        );
    }

}
// function UserItem(props) {
//     const {name, email, isGoldClient, salary, photo} = props;
//     console.log(photo)

    // return (
    //     <div>
    //         <h3>{ name }</h3>
    //         <p>{ email }</p>
    //         { isGoldClient
    //             ? <h3>Client GOLD</h3>
    //             : null
    //         }
    //         <p>{ salary }</p>
    //         <img width="150px" alt='img' src={photo}></img>
    //         {/* <button onCl/ick>DEL</button> */}
    //         <button onClick={(event) => this.props.deleteUsers(event)}>DEL</button>
    //         {/* <button>DEL</button> */}
    //     </div>
    // );
// }

export default UserItem;