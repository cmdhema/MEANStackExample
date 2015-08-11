angular.module('app')
.service('PostsSvc', ['$http', function($http) {
    this.fetch = function() {
        return $http.get('http://localhost:3000/api/posts');
    }
    this.create = function(post) {
        return $http.post('/api/posts',post);
    }
}])