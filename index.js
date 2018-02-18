const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
const db = new Sequelize('ttr', 'ttr', 'ttr18', {
	host: 'localhost',
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 1,
		acquire: 30000,
		idle: 10000
	}
});

const Contact = db.define('contact', {
	name: Sequelize.STRING,
	email: Sequelize.STRING,
	birth: Sequelize.DATE,
	profession: Sequelize.STRING,
	company: Sequelize.STRING
});

const Address = db.define('address', {
	street: Sequelize.STRING,
	neighborhood: Sequelize.STRING,
	city: Sequelize.STRING,
	state: Sequelize.STRING,
	CEP: Sequelize.STRING
});

Contact.belongsTo(Address);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/contact', async (req, res, next) => {
	const dateFormat1 = /(\d){2}\/(\d){2}\/(\d){4}/;
	const dateFormat2 = /(\d){4}-(\d){2}-(\d){2}/;

	let birth = req.body.data_nasc;

	let matched = dateFormat1.exec(birth);

	if (matched === null) {
		matched = dateFormat2.exec(birth);
		if (matched === null) {
			res.send('Wrong date format');
			next();
		}
	}

	birth = matched[3] + '-' + matched[2] + '-' + matched[1];

	let address = await Address.create({
		street: req.body.rua,
		neighborhood: req.body.bairro,
		city: req.body.cidade,
		state: req.body.estado,
		CEP: req.body.cep
	});

	let contact = await Contact.create({
		name: req.body.nome,
		email: req.body.email,
		birth: birth,
		profession: req.body.profissao,
		company: req.body.empresa
	});

	await contact.setAddress(address);

	res.send('success');
});

app.listen(3000, async () => {
	await Contact.sync();
	await Address.sync();

	console.log('Server started');
});