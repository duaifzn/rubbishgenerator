//include module
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const generateRubbish = require('./generate_rubbish')

//set template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//set static file
app.use(express.static('public'))
//set body-parser
app.use(bodyParser.urlencoded({ extended: true}))

//set routing
app.get('/',(req, res) =>{
    res.render('index')
})
app.post('/',(req, res) =>{
    const Career = req.body.career
    //console.log(Career)
    //judge option checked
    let engineer = false
    let designer = false
    let entrepreneur = false
    if(Career === 'engineer') engineer = true
    if(Career === 'designer') designer = true
    if(Career === 'entrepreneur') entrepreneur = true

    //generateRubbish
    const rubbish = generateRubbish(Career)
    console.log(rubbish)
    res.render('index',{rubbish: rubbish, engineer:engineer,designer:designer,entrepreneur:entrepreneur})
})

//start and listen express server
app.listen(port, () =>{
    console.log(`Express server is running on http://localhost:${port}`)
}) 