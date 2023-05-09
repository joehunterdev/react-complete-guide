/*Class*/
class Human {

    /*in es6 this can be avoided */
    // constructor(){
    //     this.gender = 'Male'

    // }
    
    /*es6 type property dec*/ 
    /*need  to define es6/babel in env*/
    gender = 'value'
 
    /*es7 type method statement (works better with this)*/
    myMethod = () => {console.log(self.gender)}


}

