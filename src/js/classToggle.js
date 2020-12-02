
export default class ClassToggle{

  constructor(el, classname, active = false){
    this._el = document.querySelector(el);
    this._classname = classname;
    this._active = false;
  }

  swap(){
    if(this._active){
      this._el.classList.remove(this._classname);
      this._active = false;
    }else{
      this._el.classList.add(this._classname);
      this._active = true;
    }
    return;
  }

}