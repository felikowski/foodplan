import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('This will be the future backend of the foodplan app');
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});