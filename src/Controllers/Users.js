const userModel = require("../Models/Users");
const formResponse = require("../Helpers/FormResponse");

module.exports = {

  getPagination: (req, res) =>{
    let {page, limit} = req.query
    userModel
    .getPagination(req.body, page, limit)
    .then((data) =>{
      res.status(200).send({
        success:true,
        message:"Success get Pagination",
        data:data,
      })
      .catch((err)=>{
        res.status(400).send({
          success:false,
          message:"failled pagination"
        })
      })
    })
  },

  getAllUsers: (req, res) => {
    userModel
      .getAllUsers()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  getUser: (req, res) => {
    userModel
      .getUser(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  createUser: (req, res) => {//post user
    req.body.photo = req.file ? req.file.filename : '';
    userModel
      .createUser(req.body)
      .then((data) => {
        res.status(201).send({
          success: true,
          message: "create User Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.send({
            success: false,
            message: err.message,
          });
      });
    },

  //   createUser:  (req, res) => {
  //   req.body.photo = req.file ? req.file.filename : '';
  //   userModel
  //     .createUser(req.body)
  //     .then((data) => formResponse(data, res, 201))
  //     .catch((err) => console.log(err));
  // },

    deleteUser: (req, res) => {
    userModel
      .deleteUser(req.params.id)
      .then((data) => {
        res.status(201).send({
          success: true,
          message: "delete User Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.send({
            success: false,
            message: err.message,
          });
      });
  },

  updatePUT: (req, res) => {
    
    req.body.photo = req.file.filename;
    userModel
      .updatePUT(req.body, req.params.id)
      .then((data) => {
        res.status(201).send({
          success: true,
          message: "update User Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.send({
            success: false,
            message: err.message,
          });
      });
  },

  // updateUser:  (req, res) => {
  //   req.body.photo = req.file.filename;
  //   userModel
  //     .updateUser(req.body, req.params.id)
  //     .then((data) => formResponse(data, res, 200))
  //     .catch((err) => console.log(err));
  // },

};
