var KBEngine = require("kbengine");
cc.Class({
    extends: cc.Component,

    properties: {
        editBoxName: {
            default: null,
            type: cc.EditBox
        },

        editBoxPwd: {
            default: null,
            type: cc.EditBox
        },
        button_login: cc.Button,
        button_register: cc.Button,
    },

    onLoad: function () {
        new GUIDebugLayer();
        this.addChild(GUIDebugLayer.debug, 100);

        this.button_login.node.on('click', this.login_callback, this);
        this.button_register.node.on('click', this.register_callback, this);

        this.registerKbeEvent();
    },

    registerKbeEvent: function() {
        KBEngine.Event.register("onLoginSuccess", this, "onLoginSuccess");
    },

    login_callback: function (event) {
        GUIDebugLayer.debug.INFO_MSG("Connect to server...");
        // KBEngine.Event.fire("login", this.editBoxName.string, this.editBoxPwd.string, "kbengine_cocos_creator_demo");
        console.log("Button Login");
    },

    register_callback: function(event) {
        GUIDebugLayer.debug.INFO_MSG("Connect to server...");
        // KBEngine.Event.fire("createAccount", this.editBoxName.string, this.editBoxPwd.string, "kbengine_cocos_creator_demo");
    },

    onLoginSuccess : function() {
        console.log("登录成功");
        // cc.director.loadScene("helloworld");
	},

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
