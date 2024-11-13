const dog: {firstName: string, lastName: string, age: number} = {
    firstName: 'rex',
    lastName: 'Yuppy',
    age: 20
}

const printName = (person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
    
}

printName({firstName: 'Muhammad', lastName: 'Auwal'})