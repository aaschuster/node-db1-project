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
  Accounts.getById(req.params.id)
    .then( account => res.json(account))
    .catch( err => res.status(500).json({message: "Uh-oh."}) );
})

router.post('/', (req, res, next) => {
  Accounts.create(req.body)
    .then( newAccount => res.json(newAccount))
    .catch( err => res.status(500).json({message: "Uh-oh."}) );
  
})

router.put('/:id', (req, res, next) => {
  
});

router.delete('/:id', (req, res, next) => {
  
})

router.use((err, req, res, next) => { // eslint-disable-line
  
})

module.exports = router;
