import React, {useState} from 'react';
import MainPage from "../../pages/mainPage/MainPage";
import {Form, Button} from "react-bootstrap"

function Users() {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState({
        name: "",
        username: "",
        email: ""
    })

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    const onChangeInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value


        })
    }

    const onSubmit = () => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }


        fetch('https://jsonplaceholder.typicode.com/usgers', options)
            .then(response => console.log(response));
    }



    return (
        <div>
            <Button
                    className="mt-4 mb-4"
                    onClick={getUsers}>get users</Button>

            <div className="row">



                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Control
                            type="text"
                            placeholder="name"
                            name="name"
                            onChange={onChangeInput}
                            value={data.name}
                        />
                    </Form.Group>
                </div>


                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Control
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={onChangeInput}
                            value={data.email}
                        />
                    </Form.Group>
                </div>


                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Control
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={onChangeInput}
                            value={data.username}
                        />
                    </Form.Group>
                </div>



                <div className="col-3">
                    <Button

                        className="w-100"
                        onClick={onSubmit}
                    >Create user</Button>
                </div>
            </div>


            <MainPage users={users}/>
        </div>
    );
}

export default Users;