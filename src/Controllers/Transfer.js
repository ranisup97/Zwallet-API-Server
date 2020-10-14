 const transferModel = require("../Models/Transfer");
const formResponse = require("../Helpers/FormResponse");

module.exports = {

  getPagination: (req, res) =>{
    let {page, limit} = req.query
    transferModel
    .getPagination(req.body, page, limit)
    .then((data) =>{
      res.status(200).send({
        success:true,
        message:"Success get data",
        data:data,
      })
      .catch((err)=>{
        res.status(400).send({
          success:false,
          message:"failled"
        })
      });
    });
  },

  searchByName: (req, res) =>{
    const {receiver_name} = req.query;
    transferModel
    .searchByName( req.body, receiver_name)
    .then((data) => {
      
        res.status(200).send({
          success:true,
          message:"success search by name",
          data:data,
        });
      
    })
    .catch((err) => {
      res.status(400).send({
        success:false,
        message:"failled search by name"
      })
    });
  },

  // searchByName: (req,res)=>{
  //     const { name } = req.query
  //     transferModel
  //     .searchByName(req.body, name)
  //     .then((data)=>{
  //       res.status(200).send({
  //         success : true,
  //         message : "Success Search Data Transfer",
  //         data : data,
  //       })
  //     })
  //     .catch((err)=>{
  //       res.status(400).send({
  //         success : false,
  //         message : "Failed Search Data Transfer",
  //       });
  //     });
  //   },

  getAllTransfer: (req, res) => {
    transferModel
      .getAllTransfer()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  getTransfer: (req, res) => {
    transferModel
      .getTransfer(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  createTransfer: (req, res) => {//post user
    transferModel
      .createTransfer(req.body)
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

    deleteTransfer: (req, res) => {
    transferModel
      .deleteTransfer(req.params.id)
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
    transferModel
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


};
