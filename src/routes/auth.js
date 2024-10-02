const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    console.log("[LOGIN] Username: " + username + " Password: " + password);

    res.send('43214')
})

module.exports = router;