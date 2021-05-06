const router = require('express').Router()
const Portfolio = require('../models/portfolio');
const upload = require('../middlewares/upload-photo');

// POST
router.post("/clients", upload.single("photo"), async (req, res) => {
    try {
        let portfolio = new Portfolio();
            portfolio.title = req.body.title,
            portfolio.companyName = req.body.companyName,
            portfolio.category = req.body.category,
            portfolio.slug = req.body.slug,
            portfolio.link = req.body.link,
            portfolio.description = req.body.description,
            portfolio.shortDescription = req.body.shortDescription,
            portfolio.photo = req.file.location,

            await portfolio.save();
        res.json({
            status: true,
            message: "Cliente adicionado com sucesso!"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})


//GET
router.get('/clients', async (req, res) => {
    try {
        let portfolio = await Portfolio.find();
        res.json({
            success: true,
            portfolio: portfolio
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


//Get Single Products
router.get("/clients/:slug", async (req, res) => {
    try {
        let product = await Product.findOne({ slug: req.params.slug })
            .populate('category')
            .exec();
        res.json({
            success: true,
            product: product,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

// PUT Update a single Portfolio
router.put("/clients/:id", upload.single("photo"), async (req, res) => {
    try {
        let product = await Product.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    title: req.body.title,
                    price: req.body.companyName,
                    slug: req.body.slug,
                    category: req.body.categoryID,
                    photo: req.file.location,
                    description: req.body.description,
                    owner: req.body.ownerID
                }
            },
            { upsert: true }
        );
        res.json({
            success: true,
            updatedProduct: product,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})


// DElETE - dele a single product
router.delete('/clients/:id', async (req, res) => {
    try {
        let deletedProduct = await Product.findByIdAndDelete({ _id: req.params.id });
        if (deletedProduct) {
            res.json({
                status: true,
                message: "O produto foi deletado com sucesso"
            })
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

module.exports = router;