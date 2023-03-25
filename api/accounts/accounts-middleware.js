const Accounts = require("./accounts-model");

exports.checkAccountNameUnique = async (req, res, next) => {
  
  if(req.params.id) { 
    const account = await Accounts.getById(req.params.id);
    if(account.name === req.body.name) {
      next();
      return;
    }
  }

  const accounts = await Accounts.getAll();
  
  for (const account of accounts) {
    if(account.name === req.body.name) {
      next({
        status: 400,
        message: "that name is taken"
      })
      return;
    }
  }

  next();
}

exports.checkAccountPayload = (req, res, next) => {

  if(req.body.name === undefined || req.body.budget === undefined) {
    next({
      status: 400,
      message: "name and budget are required"
    });
    return;
  }

  req.body.name = req.body.name.trim();

  const {name, budget} = req.body;

  if(name.length < 3 || name.length > 100) {
      next({
        status: 400,
        message: "name of account must be between 3 and 100"
      });
      return;
  }

  if(budget !== 0 && !Number(budget)) {
    next({
      status: 400,
      message: "budget of account must be a number"
    })
    return;
  }  

  if(budget < 0 || budget > 1000000) {
    next({
      status: 400,
      message: "budget of account is too large or too small"
    })
    return;
  }  

  next();
}

exports.checkAccountId = async (req, res, next) => {
  const account = await Accounts.getById(req.params.id);

  if(account) {
    req.account = account;
    next();
  }
  else next({
    status: 404,
    message: "account not found"
  });
}
