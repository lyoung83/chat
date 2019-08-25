const skygearCloud = require('skygear/cloud');

function cloud() {
    skygearCloud.op('greeting', function (param) {
        return {
            'content': 'Hello, ' + param.args.name,
        };
    }, {
            keyRequired: true,
            userRequired: false,
        });

    skygearCloud.op("hello", function () {
        return { "content": "hello world" }
    }, {
            userRequired: false,
            keyRequired: false
        });

    skygearCloud.handler("hello2", function (params) {
        return { "content": "hello2" }
    }, {
            userRequired: false,
            keyRequired: false
        });

}

module.exports = cloud