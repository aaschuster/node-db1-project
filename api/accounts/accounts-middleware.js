exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)

  if(!req.body.name || !req.body.budget) 
    next({
      status: 400,
      message: "name and budget are required"
    });
  else {
    let { name, budget } = req.body;
    name = name.trim();

    if(name.length < 3 || name.length > 100)
      next({
        status: 400,
        message: "name of account must be between 3 and 100"
      });
    else if(Number(budget) !== budget) {
      next({
        status: 400,
        message: "budget of account must be a number"
      })
    } else if(budget < 0 || budget > 1000000) {
        next({
          status: 400,
          message: "budget of account is too large or too small"
        })
      } else next();    
  }
}

exports.checkAccountNameUnique = (req, res, next) => {

}

exports.checkAccountId = (req, res, next) => {

}
