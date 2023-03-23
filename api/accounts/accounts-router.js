const router = require('express').Router()
const Accounts = require("./accounts-model");

router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({message: "Uh-oh."});
  }
})

router.get('/:id', (req, res, next) => {
  
})

router.post('/', (req, res, next) => {
  
})

router.put('/:id', (req, res, next) => {
  
});

router.delete('/:id', (req, res, next) => {
  
})

router.use((err, req, res, next) => { // eslint-disable-line
  
})

module.exports = router;
