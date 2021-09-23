const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`success on http://localhost:${PORT}`)
)

app.get('/menu', (req, res) => {
    res.status(200).send({
        "result": [{
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
        }]
    })
});