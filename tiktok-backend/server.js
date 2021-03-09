import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js'
import Videos from './dbModel.js';

const app = express();
const port = 8000;

app.use(express.json())


app.get('/', (req, res) =>
    res.status(200).send('Hello')
)

const connection_url = 'mongodb+srv://shoaib5023:Shoaib@@111@cluster0.2xk9y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.get('/v1/posts', (req, res) => res.status(200).send(Data))
app.get('/v2/posts', (req, res) => {

    Videos.find((err, data) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(data)
        }
    })

})
app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(201).send(data)
        }
    })

})

app.listen(port, () => console.log(`listening on :${port}`))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
        res.setHeader("Access-Control-Allow-Origin", "*"),
        next();

})