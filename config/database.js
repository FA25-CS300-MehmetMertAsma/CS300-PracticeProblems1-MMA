/**
 * Data base config file
 * 
 * file should setup the sequelize connection to the db.
 * Uses local sqlite db for local development purposes can easily be
 * converted to PostgreSQL, MySQL, MariaDB, MS SQL Server, etc.
 * 
 * 
 */

const { Sequelize } = require('sequelize');
// Load env vars from the .env file
require('dotenv').config();

/**
 * Create sequelize instance with config
 * 
 * Options:
 * dialect: Type of DB (sqlite, postgres, mysql,etc)
 * storage: location of SQlite DB file
 * logging: Set to console.log to see SQL queries, Set to false disable
 * define: default options for all models
 *       - timestamps
 *       - underscored
 */
 
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || './database.sqlite',
    logging: false,
    define: {
        timestamps: true,
        underscored: false,
    }
});

/**
 * Test database connection
 * 
 * Attempt to auth with the database and log result
 * 
 *          
 */
const testConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established succesfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Export sequelize instance and test function for use in
// other parts of this API  
module.exports = { sequelize, testConnection };