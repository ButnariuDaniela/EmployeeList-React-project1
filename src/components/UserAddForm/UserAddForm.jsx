import React from 'react';
import './UserAddForm.css';
import Form from '../../assets/images/form.jpg'

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
        console.log(this.state.name)
        const {name, email, isGoldClient, salary, photo} = this.state;

        return (
            <div className='d-flex row flex-fill'>
                <img className='col-4' src={Form} alt="img"/>
                <form
                    className="user-add-form d-flex col-8  justify-content-between"
                    onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient, salary, photo)}
                >
                    <h2 className='text-center'>Adauga utilizatori:</h2>
                    <div>
                        <label htmlFor="name"><strong>Nume:</strong></label>
                        <input
                            className='form-control border-light border-bottom border-danger'
                            type="text"
                            name="name"
                            required='yes'
                            onChange={(event) => this.updateName(event)}
                        />
                    </div>
                    <div>   
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input
                            className='form-control border-light'
                            placeholder="name@example.com"
                            type='email'
                            name="email"
                            onChange={(event) => this.updateEmail(event)}
                        />
                    </div>
                    <div>
                        <label className="me-3" htmlFor="is-gold-client"><strong>Client GOLD</strong></label>
                        <input
                            type="checkbox"
                            name="is-gold-client"
                            value="true"
                            onChange={(event) => this.updateIsGoldClient(event)}
                        />
                    </div>
                    <div>
                        <label htmlFor="salary"><strong>Salariu:</strong></label>
                        <input
                            className='form-control border-light' 
                            type="text" 
                            name="salary"
                            required='yes'  
                            onChange={(event) => this.updateSalary(event)}
                        />
                    </div>
                    <div>
                        <label htmlFor='myImage' className='form-label'><strong>Imagine:</strong></label>
                        <input type="file"
                                className='form-control'
                                name="myImage" 
                                accept="image/png, image/gif, image/jpeg" 
                                onChange={(event) => this.updatePhoto(event)}
                        />
                        <img src={this.state.photo} alt="..." width={"200px"}/>
                    </div>
                    {this.state.name && this.state.email.includes('@') && this.state.email.includes('.')
                    ? <input className='rounded-1 gb-color gf-color display-6 border-light' type="submit" value="Adauga utilizatorul"/> 
                    : <div className='fs-4'>Introduceti nume si email valide</div>}
                    
                </form>
            </div>
        )
    }
}

export default UserAddForm;