import React from 'react';
import { Button } from 'primereact/button';
import './UserItem.css'

class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props);
        const { name, email, isGoldClient, salary, photo } = this.props;
        return (
            <div className='user-item mt-30 col-12 col-md-6 my-3 border border-light d-flex flex-column'>
                <div className='d-flex flex-column align-items-start'>
                    <div>
                        <h3 className='mb-3'>{name}</h3>

                    </div>
                    <div className='mx-2 d-flex'>
                        <img height="200px" alt='img' src={photo}></img>
                        <div className='ms-3'>
                            <span>
                                {isGoldClient
                                    ? <div className='d-flex justify-content-start my-3'>
                                        <div className='me-5 fs-4'><b>Client GOLD</b></div>
                                        <div className='diamon'>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    : null
                                }
                            </span>
                            <p><span className="font-weight-bold"><strong>Email</strong></span>: {email}</p>
                            <p><span className="font-weight-bold"><strong>Salariu</strong></span>: {salary}</p>
                        </div>
                    </div>
                </div>
                <Button className='' id='delete-button' label="Sterge" icon="pi pi-trash" onClick={() => this.props.delete(name)} />
            </div>
        );
    }

}

export default UserItem;