import express from 'express';
import {
    v4 as uuidv4
} from 'uuid';

const router = express.Router();

const users = [{
    "type": "makanan",
    "name": "nasi goreng",
    "ingredients": [
        "nasi", "cabai", "bawang putih", "bawang merah", "telur ayam"
    ],
    "price": 12000,
    "stock": 24
}, {
    "type": "makanan",
    "name": "nasi bakar",
    "ingredients": [
        "nasi", "cabai", "bawang putih", "daun pisang", "ayam suir"
    ],
    "price": 15000,
    "stock": 12
}, , {
    "type": "makanan",
    "name": "nasi lemak",
    "ingredients": [
        "nasi", "cabai", "bawang putih", "daging sapi", "santan"
    ],
    "price": 12000,
    "stock": 52
}, {
    "type": "minuman",
    "name": "es teh manis",
    "ingredients": [
        "air", "teh", "gula pasir"
    ],
    "price": 4000,
    "stock": 12
}, {
    "type": "minuman",
    "name": "es jeruk",
    "ingredients": [
        "air", "jeruk limau", "gula pasir"
    ],
    "price": 8000,
    "stock": 18
}];

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