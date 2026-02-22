var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var db = require('../db');

router.get('/', function(req, res, next) {
  db.query('SELECT * FROM profesionales', function(err, results) {
    if (err) {
      return next(err);
    }
    res.render('index', { profesionales: results });
  });
});

router.get('/eventos', function(req, res, next) {
  db.query('SELECT * FROM eventos', function(err, results) {
    if (err) {
      return next(err);
    }
    res.render('eventos', { eventos: results });
  });
});

/* GET asociate. */
router.get('/asociate', function(req, res, next) {
  res.render('asociate');
});

/* GET contacto. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto');
});

/* POST contacto. */
router.post('/contacto', async function(req, res, next) {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var mensaje = req.body.mensaje;

  var obj = {
    from: 'guiacomercial@test.com',
    to: 'tu_correo@gmail.com',
    subject: 'Nuevo mensaje de la Guía Comercial',
    html: nombre + " se contactó a través de la web y quiere más información a este correo: " + email + ". <br> Además, hizo el siguiente comentario: " + mensaje
  };

  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "53df92d3fb4285",
      pass: "6cf3613bf8a8e6" 
    }
  });

  var info = await transporter.sendMail(obj);

  res.render('contacto', {
    message: '¡Mensaje enviado correctamente!'
  });
});

/* POST asociate. */
router.post('/asociate', async function(req, res, next) {
  var nombre = req.body.nombre;
  var rubro = req.body.rubro;
  var descripcion = req.body.descripcion;
  var telefono = req.body.telefono;
  var email = req.body.email;
  var web = req.body.web;

  var obj = {
    from: 'guiacomercial@test.com',
    to: 'tu_correo@gmail.com',
    subject: 'Nueva solicitud de asociado - Guía Comercial',
    html: '<b>Nombre:</b> ' + nombre + '<br><b>Rubro:</b> ' + rubro + '<br><b>Descripción:</b> ' + descripcion + '<br><b>Teléfono:</b> ' + telefono + '<br><b>Email:</b> ' + email + (web ? '<br><b>Web:</b> ' + web : '')
  };

  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "53df92d3fb4285",
      pass: "6cf3613bf8a8e6"
    }
  });

  await transporter.sendMail(obj);

  res.render('asociate', {
    message: '¡Solicitud enviada! Nos pondremos en contacto pronto.'
  });
});

/* GET admin. */
router.get('/admin', function(req, res, next) {
  if (!req.session.admin) {
    return res.redirect('/login');
  }
  db.query('SELECT * FROM profesionales', function(err, results) {
    if (err) return next(err);
    res.render('admin', { profesionales: results });
  });
});

/* POST admin - agregar profesional. */
router.post('/admin', function(req, res, next) {
  if (!req.session.admin) {
    return res.redirect('/login');
  }
  var nombre = req.body.nombre;
  var rubro = req.body.rubro;
  var descripcion = req.body.descripcion;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var web = req.body.web;

  db.query(
    'INSERT INTO profesionales (nombre, rubro, descripcion, email, telefono, web) VALUES (?, ?, ?, ?, ?, ?)',
    [nombre, rubro, descripcion, email, telefono || null, web || null],
    function(err, results) {
      if (err) return next(err);
      db.query('SELECT * FROM profesionales', function(err, profesionales) {
        if (err) return next(err);
        res.render('admin', {
          profesionales: profesionales,
          message: '¡Profesional agregado exitosamente!'
        });
      });
    }
  );
});

/* POST admin - eliminar profesional. */
router.post('/admin/eliminar/:id', function(req, res, next) {
  var id = req.params.id;
  db.query('DELETE FROM profesionales WHERE id = ?', [id], function(err) {
    if (err) return next(err);
    res.redirect('/admin');
  });
});
/* GET login. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* POST login. */
router.post('/login', function(req, res, next) {
  var usuario = req.body.usuario;
  var password = req.body.password;

  if (usuario === 'admin' && password === 'admin123') {
    req.session.admin = true;
    res.redirect('/admin');
  } else {
    res.render('login', { error: 'Usuario o contraseña incorrectos' });
  }
});

/* GET logout. */
router.get('/salir', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;