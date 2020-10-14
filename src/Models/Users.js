const db = require("../Helpers/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = {

  getPagination: (body, page, limit) =>{
    return new Promise((resolve, reject) =>{

      if (!limit) limit = 5;
      else limit = parseInt(limit);

      if (!page) page = 1;
      else page = parseInt(page);

      db.query(
        `SELECT * FROM profile LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
        (err, res, fields) => {
          if (!err) {
            resolve(res);
          }
          console.log(err);
        }); 
    });
  },

  getAllUsers: () => {//get all user
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM profile", (err, res) => {
        if (!err) {
          resolve(res);
        }
        console.log(err);
      });
    });
  },

  getUser: (params) => { //get by id
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM profile WHERE id=?", params.id, (err, res) => {
        if (!err) {
          resolve(res[0]);
        }
        console.log(err);
      });
    });
  },

  createUser: (body) => {
        return new Promise((resolve, reject) => {
          bcrypt.genSalt(10, function (err, salt) {
            const { password } = body;
            bcrypt.hash(password, salt, function (err, hashedPassword) {
              const newBody = { ...body, password: hashedPassword };
              if (err) {
                reject(err);
              }
              const query = "INSERT INTO profile SET ?";
              db.query(query, newBody, (err, data) => {
                if (!err) {
                  resolve(newBody);
                } else {
                  reject(err);
                }
              });
            });
          });
        });
      },

      deleteUser: (setData) => {
        return new Promise((resolve, reject) => {
          // bcrypt.genSalt(10, function (err, salt) {
            // const {id} =param
              const query = `DELETE FROM profile WHERE id =?`;
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
          bcrypt.genSalt(10, function (err, salt) {
              // const {id} =req.params;
            const { password } = body;
            bcrypt.hash(password, salt, function (err, hashedPassword) {
              const newBody = { ...body, password: hashedPassword };
              if (err) {
                reject(err);
              }
              // const query= `UPDATE profile SET? WHERE id = ${id}`;
              db.query(`UPDATE profile SET? WHERE id = ${id}`, newBody, (err, data) => {
                if (!err) {
                  resolve(newBody);
                } else {
                  reject(err);
                }
              });
            });
          });
        });
      },



};

module.exports = userModel;
