var express = require('express');
var router = express.Router();

// const Sequelize = require('sequelize');
const { Op, Sequelize } = require('sequelize');
const Cliente = require('../models').cliente;
const Servicio = require('../models').servicio;
// const ServicioCliente = require('../models').servicioclientes;


// ----------- JSON



// clientes
router.get('/cjson',
    function (req, res, next) {
        Cliente.findAll({
            attributes:
            {
                exclude: ["updatedAt", "createdAt"],
            },
        })
            .then(clientes => {
                res.json(clientes);
            })
            .catch(error =>
                res.status(400).send(error))
    });

// filtro id
router.get('/cjson/:id',
    function (req, res, next) {
        const id = req.params.id;

        Cliente.findAll({
            attributes: {
                exclude: ["updatedAt", "createdAt"],
            },
            where: {
                id: { [Op.and]: [id] }
            }
        })
            .then(clientes => {
                res.json(clientes);
            })
            .catch(error => res.status(400).send(error));
    });

// -------- VISTAS

// clientes

router.get('/clientes',
    function (req, res, next) {
        Cliente.findAll({
            attributes:
            {
                exclude: ["updatedAt", "createdAt"],
            },
        })
            .then(clientes => {
                res.render('clientes', { clientes: clientes });
            })
            .catch(error =>
                res.status(400).send(error))
    });
// filtro id
router.get('/clientes/:id', function (req, res, next) {
    const id = req.params.id;

    Cliente.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt"],
        },
        where: {
            id: { [Op.and]: [id] }
        }
    })
        .then(clientesid => {
            res.render('clientes', { clientesid: clientesid });
        })
        .catch(error => res.status(400).send(error));
});


module.exports = router;