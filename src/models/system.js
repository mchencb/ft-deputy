'use strict';

let Sequelize = require('sequelize');

const sequelize = require('../config/database');

module.exports = sequelize.define('system', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  // TNDID or hostname
  external_id: {
    type: Sequelize.STRING,
    allowNull: false
  },

  // status
  //  - New
  //  - Synced
  status: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true,

  indexes: [
    {
      unique: true,
      fields: ['external_id']
    }
  ]
});
