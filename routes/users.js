import express from 'express';
import {
    v4 as uuidv4
} from 'uuid';

const router = express.Router();

const users = [];

// starting with users
router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push({
        ...user,
        id: uuidv4()
    })
    res.send(`User with the name ${user.firstName} added to the databse!`);
});

router.get('/:id', (req, res) => {
    res.send('The get id route');
})

export default router;