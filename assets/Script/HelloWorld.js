var KBEngine = require("kbengine");
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        KBEngine.app.player().reqServerTest();
        console.log("调用服务器函数");

        KBEngine.Event.register("HelloWorld_onHello", this, "HelloWorld_onHello");
    },
    
    HelloWorld_onHello: function() {
        this.label.string = "HelloWorld_onHello";
    },
});
