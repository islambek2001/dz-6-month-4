import React from 'react';
import {Card} from "react-bootstrap";

const MainPage = ({users}) => (
    <>
        {
            users.map((user, i) => (
                <Card key={user.id} className="mt-4" >
                    <Card.Body >
                        <div className="title">
                            <Card.Text>{i+1}</Card.Text>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>{user.email}</Card.Text>
                            <Card.Text>{user.username}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            ))
        }
    </>
);

export default MainPage;