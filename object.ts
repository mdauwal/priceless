abstract class LeadwayEmployee {
    
    abstract calculatePay(): number;
  
    describe(): void {
      console.log("Empoyee salary");
    }
  }

class Frontend extends LeadwayEmployee {
    constructor(private pay: number) {
      super();
    }
  
    calculatePay(): number {
      return this.pay ** 60;
    }
  }
  class Backend extends LeadwayEmployee {
    constructor(private pay: number) {
      super();
    }
  
    calculatePay(): number {
      return this.pay ** 60;
    }
  }
  class Mobile extends LeadwayEmployee {
    constructor(private pay: number) {
      super();
    }
  
    calculatePay(): number {
      return this.pay ** 60;
    }
  }
  
  const frontend = new Frontend(5);
  const backend = new Backend(10);
  const mobile = new Mobile(7);

  console.log(frontend.calculatePay()); 

  frontend.describe();
  

















// const dog: {firstName: string, lastName: string, age: number} = {
//     firstName: 'rex',
//     lastName: 'Yuppy',
//     age: 20
// }

// const printName = (person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`);
    
// }

// printName({firstName: 'Muhammad', lastName: 'Auwal'})  

// const houseKeeper1 = (housekeeper: {hname, age, yearsOfExperience, fullname}) {
//     hname = "Mary",
//     age = 30,
//     yearsOfExperience = 5
//     fullAddress = "Kaduna - Nigeria"
// }