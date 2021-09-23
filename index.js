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
                "nasi", "cabai", "bawang putih", "bawang merah"
            ],
            "price": 12000,
            "stock": 24
        }, {
            "type": "minuman",
            "name": "es teh manis",
            "ingredients": [
                "air", "teh", "gula pasir"
            ],
            "price": 4000,
            "stock": 12
        }]
    })
});