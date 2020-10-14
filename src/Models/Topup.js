const db = require("../Helpers/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const topupModel = {

  getPagination: (body, page, limit) =>{
    return new Promise((resolve, reject) =>{

      if (!limit) limit = 5;
      else limit = parseInt(limit);

      if (!page) page = 1;
      else page = parseInt(page);

      db.query(
        `SELECT * FROM topup LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
        (err, res, fields) => {
          if (!err) {
            resolve(res);
          }
          console.log(err);
        }); 
    });
  },

  getAllTopup: () => {//get all user
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM topup", (err, res) => {
        if (!err) {
          resolve(res);
        }
        console.log(err);
      });
    });
  },

  getTopup: (params) => { //get by id
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM topup WHERE id=?", params.id, (err, res) => {
        if (!err) {
          resolve(res[0]);
        }
        console.log(err);
      });
    });
  },

  createTopup: (body) => {
        return new Promise((resolve, reject) => {
          // bcrypt.genSalt(10, function (err, salt) {
            const { password } = body;
            // bcrypt.hash(password, salt, function (err, hashedPassword) {
              const newBody = { ...body };
              // if (err) {
              //   reject(err);
              // }
              const query = "INSERT INTO topup SET ?";
              db.query(query, newBody, (err, data) => {
                if (!err) {
                  resolve(newBody);
                } else {
                  reject(err);
                }
              });
            });
          // });
        // });
      },

      deleteTopup: (setData) => {
        return new Promise((resolve, reject) => {
          // bcrypt.genSalt(10, function (err, salt) {
            // const {id} =param
              const query = `DELETE FROM topup WHERE id =?`;
              db.query(query,setData, (err, data) => {
                if (!err) {
                  resolve(data);
                } else {
                  reject(err);
                }
              // });
            });
          });
        
      },

      updatePUT: (body, id) => {
        return new Promise((resolve, reject) => {
          // bcrypt.genSalt(10, function (err, salt) {
              // const {id} =req.params;
            // const { password } = body;
            const newBody = { ...body };
            
              // const query= `UPDATE topup SET? WHERE id = ${id}`;
              db.query(`UPDATE topup SET? WHERE id = ${id}`, newBody, (err, data) => {
                if (!err) {
                  resolve(newBody);
                } else {
                  reject(err);
                }
              });
            // });
          });
        // });
      },




};

module.exports = topupModel;
