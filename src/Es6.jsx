class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a car named ' + this.brand + '. ';
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.mod = mod;
  }

  show() {
    return this.present() + 'Model name is: ' + this.mod;
  }
  hello=(personName)=>{
    this.val = personName;
    return 'Hello ES6 learner! ' +this.val;
  }
}

const myCar = new Model('Volvo', 'X6');

function CarEs6(){
  return (
    <div>
      <h2 className='text-success'>{myCar.show()}</h2>
      <h2>{myCar.hello(', From Raiyan')}</h2>
    </div>
  );
}
export default CarEs6;