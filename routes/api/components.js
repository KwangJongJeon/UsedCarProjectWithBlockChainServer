const express = require('express');
const router = express.Router();

// Load component model
const Component = require('../../models/Components');

// @route GET api/components/test
router.get('/test', (req, res) => res.send('component route testing!'));

// @route GET api/components
router.get('/', (req, res) => {
    console.log("get request is arrived!");
    Component.find()
        .then(components => res.json(components))
        .catch(err => res.status(404).json({ noComponentfound: 'No Component found'}));
})


// @route GET api/Components/:id
router.get('/:id', (req, res) => {
    Component.findById(req.params.id)
      .then(components => res.json(components))
      .catch((err) => {
          res.status(404).json({ noComponentfound: 'No Component found' })
          console.log(req.json(Component));
      });
  });
  


// @route POST api/components
router.post('/', (req, res) => {
    console.log("post request is arrived");
  Component.create(req.body)
    .then(components => res.json({ msg: 'Component added successfully' }))
    .catch((err) => {
        res.status(400).json({ error: 'Unable to add this Component' })
        console.log(err);
        console.log("----------------------------")
        console.log(req.body);
    })
});

// @route PUT api/components/:id
router.put('/:id', (req, res) => {
    Component.findByIdAndUpdate(req.params.id, req.body)
      .then(components => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
});

// @route DELETE api/compoenents/:id
router.delete('/:id', (req, res) => {
    Component.findByIdAndRemove(req.params.id, req.body)
      .then(components => res.json({ mgs: 'Component entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a component' }));
  });

module.exports = router;