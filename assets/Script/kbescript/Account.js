var KBEngine = require("kbengine");
var HelloWorld = require("HelloWorld");

KBEngine.Account = KBEngine.GameObject.extend(
{
	__init__ : function()
	{
		this._super();
		KBEngine.Event.fire("onLoginSuccess", KBEngine.app.entity_uuid, this.id, this);
	},

	reqServerTest: function() {
		this.baseCall("reqServerTest");
	},

	onHello: function() {
		console.log("服务端调用到");
		KBEngine.Event.fire("HelloWorld_onHello");
    },
});