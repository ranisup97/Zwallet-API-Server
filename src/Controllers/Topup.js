const topupModel = require("../Models/Topup");
const formResponse = require("../Helpers/FormResponse");

module.exports = {

  getPagination: (req, res) =>{
    let {page, limit} = req.query
    topupModel
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

  getAllTopup: (req, res) => {
    topupModel
      .getAllTopup()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  getTopup: (req, res) => {
    topupModel
      .getTopup(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  createTopup: (req, res) => {//post user
    topupModel
      .createTopup(req.body)
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

    deleteTopup: (req, res) => {
    topupModel
      .deleteTopup(req.params.id)
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
    topupModel
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
