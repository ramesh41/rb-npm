interface Persion {
  name: string;
  age: Number;
  status: Boolean;
}

const data: Persion = {
  name: "Ramesh",
  age: 20,
  status:true

};


class Cars {
  Color: string;
  constructor(color: string) {
    this.Color = color;
  }
}

class BMW extends Cars {
  Price: number;
  constructor(color: string, price: number) {
    super(color);
    this.Price = price;
  }

  display(): void{
    console.log('Color of BMW car : ', this.Color);
    console.log('Price of BMW car is : ', this.Price);
  }
}


let ob = new BMW('Red', 850000);


const createArray:[] = [];
const createItem : string[] = [];






class Animal{
  animalName: string
  constructor(name: string){
    this.animalName = name;
  }
}


class Brid extends Animal {
  animalColor: string;
  constructor(name: string, color: string){
    super(name);
    this.animalColor = color;
  }


  displayData(){
    console.log('Animal Name is ', this.animalName, 'And color is ', this.animalColor);
  }
}





