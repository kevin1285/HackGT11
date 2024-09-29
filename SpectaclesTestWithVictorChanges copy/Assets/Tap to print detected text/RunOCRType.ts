import { RunOCR } from './RunOCR_Declaration';
import { HandInteractor } from "SpectaclesInteractionKit/Core/HandInteractor/HandInteractor";
import { SIK } from "SpectaclesInteractionKit/SIK";


@component
export class RunOCRType extends BaseScriptComponent {
  @input('Component.ScriptComponent')
  refScript: RunOCR;
  @input
  leftHandInteractor: HandInteractor;

  @input
  rightHandInteractor: HandInteractor;

  private lines:string[];

  private handInputData = SIK.HandInputData;
  private leftHand = this.handInputData.getHand("left");
  private rightHand = this.handInputData.getHand("right");
  private correct: boolean;

  onAwake() {
    // this.leftHand.onPinchUp(() => {
    //   if (this.leftHandInteractor.targetHitInfo === null) {
    //     this.refScript.run();
    //   }
    // });
    // this.rightHand.onPinchUp(() => {
    //     if (this.rightHandInteractor.targetHitInfo === null) {
    //         this.refScript.run();        }
    //   });

      this.createEvent("TapEvent").bind(() => {this.correct=this.crossCheck("Jaz")});
      // this.createEvent("TapEvent").bind(() => {this.crossCheck("Jaz")});
    // this.createEvent("TapEvent").bind(() => this.refScript.run())
   // this.refScript.run();

}
  

// private crossCheck(given: string, taking: string[]): boolean{
    
private crossCheck(given: string): boolean{
    this.lines=this.refScript.run();
    
    
    // for (var a of this.lines){
    //   // if (a.indexOf(given)>=0){
    //   //   return true;
    //   // }
    //   print(a);
    // }
    for (var _i = 0; _i < this.lines.length; _i++) {
      var product = this.lines[_i];
      print(product);
      if (product.indexOf(given)>=0){
        
        print("t");
        return true;
      }
    }
    print('b');
    
    return false;
  }
}