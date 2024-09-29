import { MyScript } from './MyScript_Declaration';

@component
export class MyTypeScript extends BaseScriptComponent {
  @input('Component.ScriptComponent')
  refScript: MyScript; //this connects to MyScript.js

  onAwake() {
    print(this.refScript.numberVal);
    this.refScript.printHelloWorld();
  }
}