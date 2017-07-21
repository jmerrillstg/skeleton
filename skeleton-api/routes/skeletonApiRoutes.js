'use strict';
module.exports = function(app) {
    var accountController = require('../controllers/accountController');
    var authController = require('../controllers/authController');
    var changePasswordController = require('../controllers/changePasswordController');
    var resetPasswordController = require('../controllers/resetPasswordController');
    var usersController = require('../controllers/usersController');

    app.route('/api/auth')
    .post(authController.login);

    app.route('/api/change-password')
    .put(changePasswordController.change_password);

    app.route('/api/profile')
    .put(accountController.update_account);

    app.route('/api/user')
    .get(usersController.get_users)
    .post(usersController.add_user);

    app.route('/api/user/:userId')
    .get(usersController.get_users)
    .put(usersController.update_user)
    .delete(usersController.delete_user);

    app.route('/api/sign-up')
    .post(usersController.sign_up);

    app.route('/api/validate/:userValidationString')
    .get(usersController.validate_user);

    app.route('/api/resend-validation/:userEmail')
    .get(usersController.resend_validation);

    app.route('/api/reset-password/:userEmail')
    .get(resetPasswordController.reset_password);
};