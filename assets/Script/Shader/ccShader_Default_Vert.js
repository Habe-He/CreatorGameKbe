module.exports = 
`
attribute vec4 a_position;
attribute vec2 a_texCoord;
attribute vec4 a_color;

uniform float ratio; //牌初始状态到搓牌最终位置的完成度比例
uniform float radius; //搓牌类似于绕圆柱滚起，其圆柱的半径
uniform float width;
uniform float finish; //是否完成搓牌

uniform float offx;
uniform float offy;

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

void main()
{
	//注意OpenGL-ES中：1.attribute修饰的变量是常量。2.没有自动转类型float a = 1;或者5.0/3都是错误的
	//这两个问题改了两天，可以通过修改CPP代码，打印log来调试cocos2dx程序
	vec4 tmp_pos = a_position;

	//顺时针旋转90度
	tmp_pos = vec4(tmp_pos.y, -tmp_pos.x, tmp_pos.z, tmp_pos.w);

	if(finish > 0.5) {
		tmp_pos = vec4(tmp_pos.x, -width - tmp_pos.y, tmp_pos.z, tmp_pos.w);

	}else {
		//计算卡牌弯曲的位置，类似于卡牌绕圆柱卷起的原理
		float halfPeri = radius * 3.14159; //半周长
		float hr = halfPeri * ratio;
		if(tmp_pos.y < -width + hr) {
			float dy = -tmp_pos.y - (width - hr);
			float arc = dy/radius;
			tmp_pos.y = -width + hr - sin(arc)*radius;
			tmp_pos.z = radius * (1.0-cos(arc)); //注意之前这里是1，是错误的，opengles不自动类型转换
		}
	}
	
	

	tmp_pos += vec4(offx, offy, 0.0, 0.0);

	gl_Position = CC_MVPMatrix * tmp_pos;
	v_fragmentColor = a_color;
	v_texCoord = a_texCoord;
}
`