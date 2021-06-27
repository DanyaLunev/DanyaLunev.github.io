const { resolve } = require('path')
const express = require('express');
const app = express();

app.use('/imgs', express.static(resolve(__dirname, './imgs')))
app.use('/fonts', express.static(resolve(__dirname, './fonts')))
app.use('/styles', express.static(resolve(__dirname, './styles')))
app.use('/bundle', express.static(resolve(__dirname, './bundle')))


app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, './html/index.html'));
})


app.listen(5000, () => console.log('App listening on port 5000'))