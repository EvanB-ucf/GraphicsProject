const express = require('express');
const router = express.Router();
const mysql = require('../services/services');

router.post('/', async (req, res) => {
	console.log(req.body);

	try {
		const adminID = mysql.findUserIDFromUserName(req.body.username);

		res.status(200).send(await mysql.findEventByAdmin(adminID));
	}
	catch (e) {
		console.log(e);
        res.status(500).send({ message: e.message });
	}
})

module.exports = router;