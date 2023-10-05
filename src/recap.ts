/* eslint-disable prettier/prettier */
const myName = "Vi";
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 23);

class Persona {
  constructor(private age: number, private name: string) {}
  getSummary() {
    return `I'm ${this.name} and I'm ${this.age}`;
  }
}

const vi =new Persona(26, 'vi');

vi.getSummary();
