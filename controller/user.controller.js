import express from 'express';
import sha256 from 'sha256';
import {User} from '../database/models';

const userController = express.Router();

userController.get('/', (req, res) => {
    User.find({}, (err, result) => {
        res.status (200).json({
            data: result,
        })
    })
})

userController.post('/add-user', (req, res) => {
    const {email, password} = req.body;

    const userData = {
        email,
        hashedPassword: sha256(password),
    };

    const newUser = new User(newData);
    newUser
    .save()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(400).send('unable to save to database');
    });
});

userController.get('/', (res, res) => {
    res.status(200).json({
        status: 'user Controller API call successfully'
    });
});

export default userController;