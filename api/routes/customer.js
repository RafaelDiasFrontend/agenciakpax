const router = require('express').Router();
const Customer = require('../models/customer');

router.post('/customers', async (req, res) => {
    try {
        const customer = new Customer();
        customer.name = req.body.name,
        customer.email = req.body.email,
        customer.cpf = req.body.cpf,
        customer.cellPhone = req.body.phone,
        customer.address = req.body.address,
        customer.car = req.body.car,
        customer.licensePlate = req.body.licensePlate,
        customer.carbrand = req.body.carBrand,
        customer.carModel = req.body.carModel,
        customer.carYear = req.body.carYear,
        customer.repairType = req.body.repairType,
        customer.observation = req.body.observation;

        await customer.save();

        res.json({
            success: true,
            message: "Cliente cadastrado com Sucesso"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get('/customers', async (req, res) => {
    try {
        let customer = await Customer.find();
        res.json({
            success: true,
            customer: customer
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;