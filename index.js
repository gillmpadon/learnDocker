import express from 'express';
import cors from 'cors'
import 'dotenv/config'

const app = express();
app.use(cors())
const PORT = process.env.PORT; // Use a default port (e.g., 3000) if the environment variable is not set

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});

app.get('/', (req,res) => {
    return res.status(200).send({ message: `Working on port ${PORT}`})   
})

app.get('/greeting', (req, res) => {
    console.log("Hope you study well")
    return res.status(200).send({message: "Hope you study well"})
})