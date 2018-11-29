const axios = require('axios');

module.exports = {
    function1() {
        return 2
    },
    func1() {
        return 'Tyler'
    }, 
    awesomeCheck(param) {
        if (param === 'ethan is awesome') {
            return 'awesome'
        } else {
            return 'no'
        }
    }, 
    getInternetData() {
        return axios.get('https://swapi.co/api/people')
        .then(response => response.data.results)
    }
}