/**
 * Created by kjwook on 2015. 8. 11..
 */
angular.module('app')
.service('UserSvc', function($http) {
    var svc = this;
    svc.getUser=function() {
        return $http.get('/api/users');
    }
    svc.login=function(username, password) {
        return $http.post('/api/session', {
            username:username, password:password
        }).then(function(val) {
            svc.token = val.data;
            $http.defaults.headers.common['X-Auth'] = val.data;
            return svc.getUser();
        })
    }
})