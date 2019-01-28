const skygear = require('skygear');
const skygearCloud = require('skygear/cloud');

function includeme() {
    skygearCloud.op('greeting', function (param) {
        return {
            'content': 'Hello, ' + param.name,
        };
    }, {
            keyRequired: true,
            userRequired: false,
        });

    skygearCloud.op("hello", () => {
        return { "content": "hello" }
    }, {
        userRequired: false,
        keyRequired: false
    });

    skygearCloud.handler("hello2", function(params) {
       return {"content": "hello2"}
    }, {
        userRequired: false,
        keyRequired: false
    });

}

module.exports = {
    includeme
};