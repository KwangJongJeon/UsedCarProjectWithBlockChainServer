const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const router = express.Router();


// Load CarPost model
const CarPost = require('../../models/CarPosts');

const storage = multer.diskStorage({
    destination: 'public/images/',
    filename: function(req, file, cb){
        cb(null,"image-" + Date.now() + path.extname(file.originalname));
    }
 });


let upload = multer({
    storage: storage,
}).single("carImg");

// @route GET api/sellCarPosts
// @description Get all CarPost
// @access Public
router.get('/', (req, res) => {
    console.log('get request to sellCarPosts api is arrived!');
    CarPost.find()
        .then(carPosts => res.json(carPosts))
        .catch(err => res.status(404).json({ noCarPostsFound: 'No CarPosts found'}));
});

// @route GET api/sellCarPosts/:id
// @description Get single sellCarPosts by id
// @access Public
router.get('/:id', (req, res) => {
    console.log('get request to sellCarPosts/:id api is arrived!');
    CarPost.findById(req.params.id)
        .then(carPost => res.json(carPost))
        .catch((err) => {
            res.status(404).json({ noCarPostFound: 'No CarPosts found'})
        });
});


// 2021-06-11 upload image test
router.post('/', (req, res) => {
    upload(req, res, () => {
        console.log("Request ---", req.body);
        console.log("Request file ---", req.file); // Here you get file

        const brand = req.body.brand;
        const model = req.body.model;
        const carNum = req.body.carNum;
        const carPrice = req.body.carPrice;
        const title = req.body.title;
        const description = req.body.description;
        const blockChainAddress = req.body.blockChainAddress;
        const carImg = req.file.filename;

        const newCarPostData = {
            brand,
            model,
            carNum,
            carPrice,
            title,
            description,
            blockChainAddress,
            carImg
        }

        const newCarPost = new CarPost(newCarPostData);

        newCarPost.meta_data = req.file;

        newCarPost.save().then(() => {
            res.send({message: "uploaded successfully"})
        })
    })
})


// @route PUT api/sellCarPosts/setSupplyStatePaid/:id
// @description Update SupplyState to Paid
router.put('/setSupplyStateToPaid/:id', (req, res) => {
    console.log('put request to /setSupplyStateToPaid/:id api is arrived!');
    CarPost.findOneAndUpdate({ blockChainAddress: req.params.id }, { supplyState: "Paid" })
        .then(carPost => res.json({ msg: 'State Updated successfully' }))
        .catch(err =>
            res.status(400).json({error: 'Unable to update the database'}))
})


// @route PUT api/sellCarPosts/setSupplyStatePaid/:id
// @description Update SupplyState to Paid
router.put('/setSupplyStateDelivered/:id', (req, res ) => {
    console.log('put request to /setSupplyStateToDelivered/:id api is arrived!');
    CarPost.findOneAndUpdate({ blockChainAddress: req.params.id }, { supplyState: "Delivered"})
        .then(carPost => res.json({ msg: 'State Updated successfully '}))
        .catch(err =>
            res.status(400).json({error: 'Unable to update the database'}))
})


// @route PUT api/sellCarPosts/setCheckTrue/:id
// @description Update isInitialInspected field of CarPosts model. id is Car's blockChain address
// @access Public
router.put('/setCheckTrue/:id', (req, res) => {
    console.log('put request to sellCarPosts/setCheckTrue/:id api is arrived!')
    CarPost.findOneAndUpdate({ blockChainAddress: req.params.id }, { isInitialInspected: true })
        .then(carPost => res.json({ msg: 'Updated Successfully' }))
        .catch(err => 
            res.status(400).json({ error: 'Unable to update the database'}))
})

// @route PUT api/sellCarPosts/:id
// @description Update carPost
// @access Public
router.put('/:id', (req, res) => {
    console.log('put request to /sellCarPosts/ api is arrived!')
    CarPost.findByIdAndUpdate(req.params.id, req.body)
        .then(carPost => res.json({ msg: 'Updated Successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' }))
});


// @route DELETE api/sellCarPosts/:id
// @description Delete carPost by id
// @access Public
router.delete('/:id', (req, res) => {
    console.log('Delete request to sellCarPosts/ api is arrived!')
    CarPost.findByIdAndRemove(req.params.id, req.body)
        .then(carPost => res.json({ msg: 'CarPost entry deleted successfully!'}))
        .catch(err => res.status(404).json({ error: 'No such a carPost'}));
});

module.exports = router;