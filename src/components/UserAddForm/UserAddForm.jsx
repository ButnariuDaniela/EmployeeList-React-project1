import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salary: '',
            photo: ''
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    updatePhoto(event) {
        let path = event.target.value.split('\\')[2];
        console.log(path)
        this.setState({photo: path})
    }
    updateSalary(event) {
        this.setState({salary: event.target.value})
    }

    render() {
        const {name, email, isGoldClient, salary, photo} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, salary, photo)}
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />
                <label htmlFor="salary">Salary:</label>
                <input 
                    type="text" 
                    name="salary"  
                    onChange={(event) => this.updateSalary(event)}
                />

                <label htmlFor='myImage'>Photo:</label>
                <input type="file" 
                        name="myImage" 
                        accept="image/png, image/gif, image/jpeg" 
                        onChange={(event) => this.updatePhoto(event)}
                />
                <img src={this.state.photo} alt="imagine" width={"200px"}/>
                
                <input type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;