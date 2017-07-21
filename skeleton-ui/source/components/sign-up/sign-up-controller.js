export default function (loginService) {
    let suc = this;

    suc.error = '';
    suc.success = false;

    suc.user = {};

    function signUpUser () {
        loginService.signUpUser(suc.user)
        .then(function() {
            suc.signedUp=true;
        },
        function(response) {
            suc.success = false;
            suc.successMessage = '';
            suc.error = 'Failed to add user. '+response.data.status;
        });
    }

    suc.signUpUser = signUpUser;
}