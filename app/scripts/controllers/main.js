/**
 *
 * appCtrl
 *
 */

angular
    .module('homer')
    .controller('appCtrl', appCtrl);

function appCtrl($http, $scope) {

    $scope.ciao = "Gabriele Scorreggione";

}
