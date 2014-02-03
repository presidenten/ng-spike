angular.module('myApp', [
    ])
    .controller('myCtrl', function($scope){
        $scope.customers = [
            {id:1, name:'Kalle'},
            {id:2, name:'Anders'},
            {id:3, name:'Johan'},
            {id:4, name:'Fredrik'},
            {id:5, name:'Bollen'}

        ];
    })

    .filter('reverse', function(){
        return function(text){
            return text.split('').reverse().join('');
        }
    })
;
