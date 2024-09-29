// Gets SceneObject attached
var newSceneObj = script.getSceneObject();
// Creates a new ScriptComponent
var newScriptComp = newSceneObj.createComponent('ScriptComponent');

// Gets the ScriptComponent attached to the SceneObject
var mySceneObj = newSceneObj.getComponent('ScriptComponent');

