/*Class*/
class Human {

    constructor(){
        this.gender = 'Male'

    }
 
   printMyGender(){
      console.log(this.gender)
   }
}

/*Class*/
class Person extends Human {

    constructor(){
        super() /*required to init super constructor*/
        this.name = 'Joe'

    }
 
     myName = 'Joe'
     call = () => {"Hi name is: " + myName} 

   printMyName(){
      console.log(this.myName)
   }
}

/*Init*/
const mySelf = new person()
    mySelf.printMyName()
    console.printMyGender()
/*Extending*/
//class person extends Master

