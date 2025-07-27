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
  hello = (personName) => {
    this.val = personName;
    return 'Hello ES6 learner! ' + this.val;
  }
  carType = ['Hundai', 'SUV', 'Truck', 'Sedan', 'Hatchback'];
  carList = this.carType.map((item) => <p>{item}</p>)
  carListLoop = () => {
    const items =[];
    for (let i = 0; i < this.carType.length; i++) {
      items.push(<p>{this.carList[i]}</p>)
    }
    return items;
  }
}

const myCar = new Model('Volvo', 'X6');

function CarEs6() {
  return (
    <div>
      <h2 className='text-success'>{myCar.show()}</h2>
      <h2>{myCar.hello(', From Raiyan')}</h2>
      <h3 className='text-primary'>Car Types:</h3>
      {/* <div className='text-secondary'>
        {myCar.carList}
      </div> */}
      <div className='text-secondary'>
        {myCar.carListLoop()}
      </div>
    </div>
  );
}
export default CarEs6;