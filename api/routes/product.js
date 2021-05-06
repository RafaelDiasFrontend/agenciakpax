const router = require('express').Router()
const Product = require('../models/product');

const upload = require('../middlewares/upload-photo');

// POST
router.post("/products", upload.single("photo"), async (req, res) => {
    try {
        let product = new Product();
            product.ownerID = req.body.ownerID,
            product.categoryID = req.body.categoryID,
            product.title = req.body.title;
            product.slug = req.body.slug;
            product.description = req.body.description,
            product.price = req.body.price,
            product.photo = req.file.location,
            product.stockQuantity = req.body.stockQuantity,

            await product.save();
        res.json({
            status: true,
            message: "Produto Criado com Sucesso"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})
//GET request - get all products
router.get('/products', async (req, res) => {
    try {
        let products = await Product.find().populate('owner category').exec();
        res.json({
            success: true,
            products: products
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//Get Single Products
router.get("/products/:slug", async (req, res) => {
    try {
        let product = await Product.findOne({ slug: req.params.slug })
        .populate('owner category')
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

// PUT Update a single Product
router.put("/products/:id", upload.single("photo"), async (req, res) => {
    try {
        let product = await Product.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
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
router.delete('/products/:id', async (req, res) => {
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