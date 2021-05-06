const router = require('express').Router();
const Service = require('../models/category');

router.post('/services', async (req, res) => {
    try {
        const service = new Service();
        service.type = req.body.type;

        await service.save();

        res.json({
            success: true,
            message: "Serviço Adicionado com Sucesso"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get('/services', async (req, res) => {
    try {
        let services = await Service.find();
        res.json({
            success: true,
            services: services
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;