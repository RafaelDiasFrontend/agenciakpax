const router = require('express').Router();
const verifyToken = require('../middlewares/verify-token');
const Address = require('../models/address');
const User = require("../models/user");

router.post('/addresses', verifyToken, async (req, res) => {
    try {
        let address = new Address();
        address.user = req.decoded._id;
        address.fullName = req.body.fullName;
        address.streetAddress = req.body.streetAddress;
        address.city = req.body.city;
        address.state = req.body.state;
        address.zipCode = req.body.zipCode;
        address.phoneNumber = req.body.phoneNumber;
        address.deliverInstructions = req.body.deliverInstructions;
        address.securityCode = req.body.securityCode;

        await address.save();
        res.json({
            success: true,
            message: "Endereço adicionado com sucesso"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});
// Get
router.get('/addresses', verifyToken, async (req, res) => {
    try {
        let addresses = await Address.find({ user: req.decoded._id })
        res.json({
            success: true,
            addresses: addresses
        })
    } catch (err) {
        res.status(500).json({
            success: true,
            address: address
        });
    }
});
// Get One
router.get('/addresses/:id', verifyToken, async (req, res) => {
    try {
        let data = await Address.findOne({ user: req.decoded._id })
        res.json({
            success: true,
            data: data
        })
    } catch (err) {
        res.status(500).json({
            success: true,
            address: address
        });
    }
});

//  Update
router.put("/addresses/:id", verifyToken, async (req, res) => {
    try {
        let foundAddress = await Address.findOneAndUpdate(
            {
            user: req.decoded._id,
            _id: req.params.id
            }
        );
        if (foundAddress) {
            if (req.body.fullName) foundAddress.fullName = req.body.fullName;
            if (req.body.streetAddress) foundAddress.streetAddress = req.body.streetAddress;
            if (req.body.city) foundAddress.city = req.body.city;
            if (req.body.state) foundAddress.state = req.body.state;
            if (req.body.zipCode) foundAddress.zipCode = req.body.zipCode;
            if (req.body.phoneNumber) foundAddress.phoneNumber = req.body.phoneNumber;
            if (req.body.deliverInstructions) foundAddress.deliverInstructions = req.body.deliverInstructions;
            if (req.body.securityCode) foundAddress.securityCode = req.body.securityCode;

            await foundAddress.save()
            res.json({
                success: true,
                message: "Atualizado com sucesso"
            })
        }
    } catch (err) {
        res.status(500).json({
            success: true,
            address: address
        });
    }
});

// delete
router.delete("/addresses/:id", verifyToken, async (req, res) => {
    try {
        let deletedAddress = await Address.remove({
            user: req.decoded._id,
            _id: req.params.id
        });
        if (deletedAddress) {
            res.json({
                success: true,
                message: "Endereço foi deletado com sucesso"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: true,
            address: address
        });
    }
});
// Set default Address
router.put("/addresses/set/default", verifyToken, async (req, res) => {
    try {
        const updatedAddressUser = await User.findOneAndUpdate(
            { _id: req.decoded._id },
            { $set: { address: req.body.id } }
        );
        if (updatedAddressUser) {
            res.json({
                success: true,
                message: "Endereço setado com sucesso"
            })
        }
    } catch (err) {
        res.status(500).json({
            success: true,
            address: address
        });
    }
})
module.exports = router;