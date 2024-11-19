abstract class Animal {
    abstract makeSound(): void
    move(): void {
        console.log("moving..");
        
     }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark!");
        
    }
}

const dog = new Dog()









// function add(a: number, b: number): number {
//     return a + b
// }

// const result = add(5, 3);

// console.log(result);

// function randomCoordinate (): {x: number, y: number} {
//     return {x: 5, y: 9}
// }
