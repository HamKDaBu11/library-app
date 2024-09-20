const express = require('express');
const app = express();

app.use(express.json());

app.use('/api', require('./routes/bookRoutes'));
// app.get('/', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         message: 'Its working!'
//     })
// })
app.listen(5000, () => {
    console.log('server up and running!')
})