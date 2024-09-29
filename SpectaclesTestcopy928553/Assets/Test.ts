import { HandInteractor } from "SpectaclesInteractionKit/Core/HandInteractor/HandInteractor";
import { SIK } from "SpectaclesInteractionKit/SIK";

@component
export class PinchToSpawn extends BaseScriptComponent {
  @input
  objectToSpawn: ObjectPrefab;
    
  @input
  objectToSpawn2: ObjectPrefab;

  @input
  leftHandInteractor: HandInteractor;

  @input
  rightHandInteractor: HandInteractor;

  private handInputData = SIK.HandInputData;
  private leftHand = this.handInputData.getHand("left");
    private rightHand = this.handInputData.getHand("right");
    
    private spawnedObjects: SceneObject [] = []
private firstDone: Boolean = false;
    private secondDone: Boolean = false;
    private thirdDone: Boolean = false;
    private fourthDone: Boolean = false;
    private pinchEnabled: boolean = true; // New flag to prevent continuous triggering

    
  onAwake() {
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
      }
    });
  }

  private spawnObject(position: vec3): void {
//    if (!this.pinchEnabled) {
//        return null; // Prevent further spawning if the pinch is not enabled
//    }    
    if (!this.firstDone) {
        const spawnedObject = this.objectToSpawn.instantiate(this.getSceneObject());
        spawnedObject.getTransform().setWorldPosition(position);
        this.spawnedObjects.push(spawnedObject);
        this.firstDone = true; // Set the firstDone flag to prevent repeated spawning
        print("First object spawned.");
    } 
    else if (!this.secondDone) {
        const spawnedObject = this.objectToSpawn2.instantiate(this.getSceneObject());
        spawnedObject.getTransform().setWorldPosition(position);
        this.spawnedObjects.push(spawnedObject);
        this.secondDone = true; // Set the secondDone flag to prevent repeated spawning
        print("Second object spawned.");
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