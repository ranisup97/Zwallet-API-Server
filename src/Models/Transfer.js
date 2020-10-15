const db = require("../Helpers/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const transferModel = {

  getPagination: (body, page, limit) =>{
    return new Promise((resolve, reject) =>{

      if (!limit) limit = 5;
      else limit = parseInt(limit);

      if (!page) page = 1;
      else page = parseInt(page);

      db.query(
        `SELECT * FROM transfer LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
        (err, res, fields) => {
          if (!err) {
            resolve(res);
          }
          console.log(err);
        }); 
    });
  },

  searchByName: (body, name)=>{
    return new Promise((resolve, reject) =>{
      // const {receiver_name} = req.params
      const query= `SELECT * FROM transfer WHERE receiver_name LIKE '%${name}%' ORDER BY receiver_name ASC`
       db.query(query, body, (err, data) => {
        if (!err) {
            resolve(data);
          }
          reject(err);
        
        });
    });
  },

  getAllTransfer: () => {//get all user
    return new Promise((resolve, reject) => {
      db.query("SELECT profile.firstName, profile.lastName, transfer.amount, transfer.notes FROM transfer INNER JOIN profile ON transfer.id = profile.id", (err, res) => {
        if (!err) {
          resolve(res);
        }
        console.log(err);
      });
    });
  },

  getTransfer: (params) => { //get by id
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM transfer WHERE id=?", params.id, (err, res) => {
        if (!err) {
          resolve(res[0]);
        }
        console.log(err);
      });
    });
  },

  createTransfer: (body) => {
        return new Promise((resolve, reject) => {
          // bcrypt.genSalt(10, function (err, salt) {
            const { password } = body;
            // bcrypt.hash(password, salt, function (err, hashedPassword) {
              const newBody = { ...body };
              // if (err) {
              //   reject(err);
              // }
              const query = "INSERT INTO transfer SET ?";
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

      deleteTransfer: (setData) => {
        return new Promise((resolve, reject) => {
          // bcrypt.genSalt(10, function (err, salt) {
            // const {id} =param
              const query = `DELETE FROM transfer WHERE id =?`;
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
            
              // const query= `UPDATE transfer SET? WHERE id = ${id}`;
              db.query(`UPDATE transfer SET? WHERE id = ${id}`, newBody, (err, data) => {
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

module.exports = transferModel;
