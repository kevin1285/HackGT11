import { MyScript } from './MyScript_Declaration';

@component
export class MyTypeScript extends BaseScriptComponent {
  @input('Component.ScriptComponent')
<<<<<<< Updated upstream
  refScript: MyScript; //this connects to MyScript.js
=======
  refScript: MyScript;
>>>>>>> Stashed changes

  onAwake() {
    print(this.refScript.numberVal);
    this.refScript.printHelloWorld();
  }
}