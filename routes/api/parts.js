const express = require('express');
const router = express.Router();

// Load Part model
const Part = require('../../models/Parts');

// @route GET api/parts/test
// @description tests parts route
// @access Public
router.get('/test', (req, res) => res.send('part route testing!'));

// @route GET api/parts
// @description Get all parts
// @access Public
router.get('/', (req, res) => {
    console.log("get request is arrived");
    Part.find()
    .then(parts => res.json(parts))
    .catch(err => res.status(404).json({ nobooksfound: 'No Parts found' }));
});

// @route GET api/parts/:id
// @description Get single part by id
// @access Public
router.get('/:id', (req, res) => {
  Part.findById(req.params.id)
    .then(part => res.json(part))
    .catch((err) => {
        res.status(404).json({ nobookfound: 'No Part found' })
        console.log(req.json(part));
    });
});

// @route POST api/parts
// @description add/save part
// @access Public
router.post('/', (req, res) => {
    console.log("post request is arrived");
    Part.create(req.body)
    .then(part => res.json({ msg: 'Part added successfully' }))
    .catch((err) => {
        res.status(400).json({ error: 'Unable to add this part' })
        console.log(err);
        console.log("----------------------------")
        console.log(req.body);
    })
});

// @route PUT api/parts/:id
// @description Update part
// @access Public
router.put('/:id', (req, res) => {
  Part.findByIdAndUpdate(req.params.id, req.body)
    .then(part => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route DELETE api/parts/:id
// @description Delete part by id
// @access Public
router.delete('/:id', (req, res) => {
  Part.findByIdAndRemove(req.params.id, req.body)
    .then(part => res.json({ mgs: 'Part entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a part' }));
});

module.exports = router;