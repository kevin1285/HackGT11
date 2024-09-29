import { HandInteractor } from "SpectaclesInteractionKit/Core/HandInteractor/HandInteractor";
import { SIK } from "SpectaclesInteractionKit/SIK";
import { Headlock } from "SpectaclesInteractionKit/Components/Interaction/Headlock/Headlock";
import { FetchData } from './FetchDataConvert';

@component
export class MyTypeScript extends BaseScriptComponent {
  
    @input('Component.ScriptComponent')
  refScript: FetchData; //this connects to MyScript.js

  @input
  objectToSpawn1: ObjectPrefab;
    
  @input
  objectToSpawn2: ObjectPrefab;
    
  @input
  objectToSpawn3: ObjectPrefab;

  @input
  leftHandInteractor: HandInteractor;

  @input
  rightHandInteractor: HandInteractor;
    
  @input 
  headlockComponent: Headlock;  
    
    
    private handInputData = SIK.HandInputData;
  private leftHand = this.handInputData.getHand("left");
    private rightHand = this.handInputData.getHand("right");
    
    private spawnedObjects: SceneObject [] = []
private firstDone: Boolean = false;
    private secondDone: Boolean = false;
    private thirdDone: Boolean = false;
    private fourthDone: Boolean = false;
    private pinchEnabled: boolean = true;
    
  onAwake() {
    print("Hello world");
    var userData = this.refScript.fetchUsers('/users');
    
    var idk;
    while(!idk || idk.length===0) {
        idk = this.refScript.fetchUsers('/alarms');
    }
        
        this.leftHand.onPinchUp(() => {
      print("Left hand pinch detected.");
      if (this.leftHandInteractor.targetHitInfo === null) {
        this.spawnObject(this.leftHand.indexTip.position);
      }
    });

    this.rightHand.onPinchUp(() => {
       print("Right hand pinch detected.");
      if (this.rightHandInteractor.targetHitInfo === null) {
        this.spawnObject(this.rightHand.indexTip.position);
        //clearAll();//only test with spectacles not display
      }
    });
  }
    
    private spawnObject(position: vec3): void {
//    if (!this.pinchEnabled) {
//        return null; // Prevent further spawning if the pinch is not enabled
//    }    
    if (!this.firstDone) {
        //this.clearAll();
        const spawnedObject = this.objectToSpawn1.instantiate(this.getSceneObject());
        //spawnedObject.getTransform().setWorldPosition(position);
        this.spawnedObjects.push(spawnedObject);
        this.firstDone = true; // Set the firstDone flag to prevent repeated spawning
        print("First object spawned.");
    } 
    else if (!this.secondDone) {
        //this.clearAll();
        //var newPosition = position.add(new vec3(-50, 0, 0));
        const spawnedObject = this.objectToSpawn2.instantiate(this.getSceneObject());
        //spawnedObject.getTransform().setWorldPosition(position);
        this.spawnedObjects.push(spawnedObject);
        this.secondDone = true; // Set the secondDone flag to prevent repeated spawning
        print("Second object spawned.");
    }
    else if(!this.thirdDone) {
        //this.clearAll();    
        const spawnedObject = this.objectToSpawn3.instantiate(this.getSceneObject());
        //spawnedObject.getTransform().setWorldPosition(position);
        this.spawnedObjects.push(spawnedObject);
        this.thirdDone = true; // Set the secondDone flag to prevent repeated spawning
        print("Third object spawned."); 
    }
    else {
        print("Both objects already spawned.");
    }
        
//    if (this.firstDone && this.secondDone) {
//        this.pinchEnabled = false; // Disable future pinch interactions
//    }
  }
    
    clearAll() {
      this.spawnedObjects.forEach((obj) => {
          obj.destroy();
      });
    this.spawnedObjects = []
  }

}

