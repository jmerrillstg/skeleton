export default function (loginService, $rootScope, $location, $routeParams) {
    let lc = this;

    lc.inputEmail = '';
    lc.inputPassword = '';

    lc.error = '';
    lc.success = false;
    if (typeof($routeParams.userValidationString)!=='undefined') {
        loginService.validateUser($routeParams.userValidationString)
        .then(function () {
            $location.path('/login');
        },
        function (response) {
            lc.success = false;
            lc.successMessage = '';
            lc.error='Validation failed: '+response.data.status;
        }).catch(function (error) {
            lc.success = false;
            lc.successMessage = '';
            lc.error='Validation failed: '+error;
        });
    }

    function login() {
        loginService.loginUser(lc.inputEmail, lc.inputPassword).then(function (data) {
            if (data) {
                $rootScope.isLoggedIn = true;
                $location.path('/home');
            } else {
                lc.success = false;
                lc.successMessage = '';
                lc.error='Login failed';
            }
        }).catch(function (error) {
            lc.success = false;
            lc.successMessage = '';
            lc.error='Validation failed: '+error;
        });
    }

    function resetPassword() {
        loginService.resetPassword(lc.inputEmail)
        .then(function() {
            lc.success=true;
            lc.successMessage='Password Reset Email Sent';
            lc.error='';
        },
        function(response) {
            lc.success = false;
            lc.successMessage = '';
            lc.error='Password reset failed: '+response.data.status;
        });
    }

    function reSendValidation() {
        loginService.reSendValidation(lc.email)
        .then(function() {
            lc.success=true;
            lc.successMessage='Validation Email Sent';
            lc.error='';
        },
        function(response) {
            lc.success = false;
            lc.successMessage = '';
            lc.error='Validation email failed: '+response.data.status;
        });
    }

    lc.resetPassword = resetPassword;
    lc.login = login;
    lc.reSendValidation = reSendValidation;
}