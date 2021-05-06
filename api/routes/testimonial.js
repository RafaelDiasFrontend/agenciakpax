const router = require('express').Router();
const Testimonial = require('../models/testimonial');
const upload = require('../middlewares/upload-photo');

router.post('/testimonials', upload.single("photo"), async (req, res) => {
    try {
        const testimonial = new Testimonial();
        testimonial.name = req.body.name;
        testimonial.text = req.body.text;      
        testimonial.photo = req.file.location

        await testimonial.save();

        res.json({
            success: true,
            message: "Depoimento adicionado com sucesso"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get('/testimonials', async (req, res) => {
    try {
        let testimonials = await Testimonial.find();
        res.json({
            success: true,
            testimonials: testimonials
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;