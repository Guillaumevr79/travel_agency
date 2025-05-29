const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AdminUser = require('./models/AdminUser');

mongoose.connect('mongodb://localhost:27017/travel-agency');

const run = async () => {
    const hash = await bcrypt.hash("admin123", 10);
    await AdminUser.create({ username: "admin", password: hash });
    console.log("Admin créé avec succès");
    mongoose.disconnect();
};

run();
