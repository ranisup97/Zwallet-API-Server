const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const bearearToken = req.header("auth-token");
  if (!bearearToken)
  res.status(404).send({
    success: false,
    message: "NOT FOUND",
  });
  else {
    const token = bearearToken.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (!err) {
        if (decoded.role_id == "20") next();//id admin
        else if (decoded.id == req.params.id) next(); 
        else {
          res.status(403).send({
            success: false,
            message: "Error Forbidden",
          });
        }
      } else {
        res.status(401).send({
          success: false,
          message: err,
        });
      }
    });
  }
};

module.exports = verifyToken;

// res.status(404).send({
//   success: false,
//   message: "NOT FOUND",
// });
