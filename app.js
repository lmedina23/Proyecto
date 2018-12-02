const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const url = 'mongodb://localhost/mitiendita';
const User = require('./model/user');
const Producto = require( './model/Producto' ) ;
const multer = require('multer');
const path = require('path');
var upload = multer({ dest: 'public/images/' });


const app = express();
app.use("/public",express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.post('/api/user/login', (req, res) => {
	mongoose.connect(url,{ useNewUrlParser: true }, function(err){
		if(err) throw err;
		User.find({
			username : req.body.username, password : req.body.password
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					message: 'Error en Login'
				})
			}
			
		})
	});
})

app.post('/api/user/create', (req, res) => {
	mongoose.connect(url, { useNewUrlParser: true }, function(err){
		if(err) throw err;
		const user = new User({
			name: req.body.name,
			username: req.body.username,
			password: req.body.password
		})
		user.save((err, res) => {
			if(err) throw err;
			return res.status(200).json({
				status: 'success',
				data: res
			})
		})
	});
})


app.post('/api/user/newproducto', (req, res) => {
	console.log(req.body);
	var file = req.body.imagen;
    mongoose.connect(url, { useNewUrlParser: true }, function(err){
        if(err) throw err;
        const producto = new Producto({
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			precio: req.body.precio,
			categoria: req.body.categoria,
			detalles: req.body.detalles,
			imagen: file[0].filename,//req.body.imagen,
			vendedor: req.body.vendedor,
			rutaimagen: req.body.rutaimagen
        })
        producto.save((err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.listen(3000, () => console.log('Blog server running on port 3000!'))