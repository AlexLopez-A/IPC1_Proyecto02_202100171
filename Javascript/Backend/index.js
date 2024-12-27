const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productsRoutes')
const clientRoutes = require('./routes/clientRoutes')
const statsRoutes = require('./routes/statsRoutes')

const app = express();
app.use(cors())
app.use(bodyParser.json())

//rutas
app.use('/auth', authRoutes)
app.use('/products', productRoutes)
app.use('/clients', clientRoutes)
app.use('/stats', statsRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

