Laya3D.init(0,0,true);
Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.Stat.show();

var scene = Laya.stage.addChild(new Laya.Scene());
scene.shadingMode = Laya.BaseScene.VERTEX_SHADING;

var camera = scene.addChild(new Laya.Camera(0, 0.1, 100));
camera.transform.translate(new Laya.Vector3(0, 0.8, 1.5));
camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
camera.addComponent(CameraMoveScript);

var skyBox = new Laya.SkyBox();
camera.sky = skyBox;
skyBox.textureCube = Laya.TextureCube.load("../../res/threeDimen/skyBox/skyCube.ltc");

var mesh = scene.addChild(new Laya.MeshSprite3D(Laya.Mesh.load("../../res/threeDimen/staticModel/sphere/sphere-Sphere001.lm")));
