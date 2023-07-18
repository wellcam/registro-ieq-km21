const {Router} = require('express')
const router = Router()

router.get("/", (req, res) =>{
    console.log(__dirname);
    res.sendFile("/home/wellington/well-project/registro-ieq-km21/api/index.html");
});

module.exports = router