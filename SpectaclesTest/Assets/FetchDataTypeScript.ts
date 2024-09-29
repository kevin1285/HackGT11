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
	objectToSpawn4: ObjectPrefab;
    
    @input
	objectToSpawn5: ObjectPrefab;

	@input
	leftHandInteractor: HandInteractor;

	@input
	rightHandInteractor: HandInteractor;

	@input 
	headlockComponent: Headlock;  

	private handInputData = SIK.HandInputData;
	private leftHand = this.handInputData.getHand("left");
	private rightHand = this.handInputData.getHand("right");
    
    //private handGestureData = SIK.HandGestureData;
    //private leftHandGesture = this.handGestureData.getHandGesture("left");

	private spawnedObjects: SceneObject[] = [];
	private firstDone: Boolean = false;
	private secondDone: Boolean = false;
	private thirdDone: Boolean = false;
	private fourthDone: Boolean = false;
    private fifthDone: Boolean = false;
	private pinchEnabled: boolean = true; 
    
	onAwake() {
		print("Hello world");
		var userData = this.refScript.fetchUsers('/users');

        

		//var idk = this.refScript.fetchUsers('/alarms');
       var alarmData;
////        
//		while(true) {
//			idk = this.refScript.fetchUsers('/users');
//		}
        

//        while(true){
//            const duration: number = 3000;
//            setTimeout(() => {
//                idk = this.refScript.fetchUsers('/alarms');
//            }, duration)
//            if(idk || idk.length > 0){
//                break;
//            }
//        }
        
		this.leftHand.onPinchUp(() => {
			print("Left hand pinch detected.");
//			if (this.leftHandInteractor.targetHitInfo === null) {
//				this.spawnObject(this.leftHand.indexTip.position);
//			}
            this.clearAll();
            alarmData = this.refScript.fetchUsers('/alarms');
            print("ALARM DATA" + alarmData)
            if(alarmData != undefined){
                print("alskdjfaisdj;lasfj");
            }
		});

//        this.leftHandGesture.onPalmUp(() => {
//            print("Palm up detected");
//            idk = this.refScript.fetchUsers('/alarms');
//        });
        
        
		this.rightHand.onPinchUp(() => {
			print("Right hand pinch detected.");
			if (this.rightHandInteractor.targetHitInfo === null) {
				this.spawnObject(this.rightHand.indexTip.position);
			}
            alarmData = this.refScript.fetchUsers('/alarms');
		});
	}

	private spawnObject(position: vec3): void {
		if (!this.firstDone) {
			const spawnedObject = this.objectToSpawn1.instantiate(this.getSceneObject());
			this.spawnedObjects.push(spawnedObject);
			this.firstDone = true;
			print("First object spawned.");
		}
        else if (!this.secondDone) {
			const spawnedObject = this.objectToSpawn2.instantiate(this.getSceneObject());
			this.spawnedObjects.push(spawnedObject);
			this.secondDone = true;
			print("Second object spawned.");
		} else if (!this.thirdDone) {
            
			const spawnedObject = this.objectToSpawn3.instantiate(this.getSceneObject());
			this.spawnedObjects.push(spawnedObject);
			this.thirdDone = true;
			print("Third object spawned."); 
		}else if (!this.fourthDone) {
            
			const spawnedObject = this.objectToSpawn4.instantiate(this.getSceneObject());
			this.spawnedObjects.push(spawnedObject);
			this.fourthDone = true;
			print("Fourth object spawned."); 
		}else if (!this.fifthDone) {
            
			const spawnedObject = this.objectToSpawn5.instantiate(this.getSceneObject());
			this.spawnedObjects.push(spawnedObject);
			this.fifthDone = true;
			print("Fifth object spawned."); 
		} else {
			print("All objects already spawned.");
		}
	}

	clearAll() {
		this.spawnedObjects.forEach((obj) => {
			obj.destroy();
		});
		this.spawnedObjects = [];
	}
    
}
