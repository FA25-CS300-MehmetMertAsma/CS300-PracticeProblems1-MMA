/**
 * Models index
 * 
 * Centralized export point for all database (DB) models
 * Handle db synchronization 
 * 
 */

const { sequelize } = require('../config/database');
const Post = require('./post');

/**
 * 
 * 
 */

const syncDatabase = async () => {
    try {
        // Sync all models with database
        await sequelize.sync({ alter: true });
        console.log('Database synchronized succesfully.');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
};

// Export all models and database utilies
module.export = {
    // Post model
    post,
    // Function to sync db schema
    syncDatabase
};