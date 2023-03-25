exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)

  if(!req.body.name || !req.body.budget) {
    next({
      status: 400,
      message: "name and budget are required"
    });
    return;
  }

  let name = req.body.name.trim();
  const { budget } = req.body;

  if(name.length < 3 || name.length > 100) {
      next({
        status: 400,
        message: "name of account must be between 3 and 100"
      });
      return;
  }

  if(Number(budget) !== budget) {
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

exports.checkAccountNameUnique = (req, res, next) => {

}

exports.checkAccountId = (req, res, next) => {

}
