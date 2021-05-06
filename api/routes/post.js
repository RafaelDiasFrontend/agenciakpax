const router = require('express').Router()
const Blog = require('../models/post');

const upload = require('../middlewares/upload-photo');

// POST
router.post("/posts", upload.single("photo"), async (req, res) => {
    try {
        let post = new Blog();
        post.ownerID = req.body.ownerID,
        post.categoryID = req.body.categoryID,
        post.title = req.body.title;
        post.paragraph = req.body.paragraph;
        post.slug = req.body.slug;
        post.description = req.body.description,            
            // post.photo = req.file.location,
            post.title2 = req.body.title2,
            post.paragraph2 = req.body.paragraph2

            await post.save();
        res.json({
            status: true,
            message: "Post criado com sucesso"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})
//GET request - get all products
router.get('/posts', async (req, res) => {
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
router.get("/posts/:slug", async (req, res) => {
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
router.put("/posts/:id", upload.single("photo"), async (req, res) => {
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
router.delete('/posts/:id', async (req, res) => {
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