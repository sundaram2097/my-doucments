//3) Write a “person” class to hold all the details.
class person {
    constructor(firstname,lastname,age,email,gender,city){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age=age;
        this.email=email;
        this.gender=gender;
        this.city=city;
    }
        getfullname = function (){
           return `${this.firstname}${this.lastname}`;
        
        }

}
let person1 = new person("meenakshi","sundaram",'23','meenakshisundaram@gmail.com','male','madurai');
console.log(person1.getfullname());
console.log(person1);
let person2 = new person("mathan","kumar",'31','meenu@gmail.com','female','chennai');
console.log(person2.getfullname());
console.log(person2);




//3)Convert the UML diagram to Typescript class. - use number for double
class Circle {
    // constructor to assign initial values
    constructor(radius, color) {
    this.radius = radius
    this.color = color
    }
    
    // returns radius of the circle
    getRadius () {
    return this.radius
    }
    
    // assigns new value to radius
    setRadius (radius) {
    this.radius = radius
    }
    
    // get color of the circle
    getColor () {
    return this.color
    }
    
    // assigns new value to color
    setColor (color) {
    this.color = color
    }
    
    // calculate area
    getArea () {
    return Math.PI * this.radius * this.radius
    }
    
    // calculate circumference
    getCircumference () {
    return 2 * Math.PI * this.radius;
    }
    }
    
    let myCircle = new Circle (1, 'RED',)
    console.log(myCircle.getRadius())
    console.log(myCircle.getColor())
    console.log(myCircle.getArea())
    console.log(myCircle.getCircumference())
    
    // after changing
    myCircle.setColor('Blue')
    myCircle.setRadius(2)
  
//Class - Movie
//2) The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
class Movie {
    constructor(tittle,studio,rating){
        this.tittle = tittle;
        this.studio = studio;
        this.rating = rating;
    }
    
}
const movie1 = new Movie("Casino Royale","Eon Productions","PG­13");
console.log(movie1);
//4)write a class to calculate uber price.
class Uber_price{
    constructor(startlocation,endlocation,travelkm){
        this.startlocation=startlocation;
        this.endlocation=endlocation;
        this.travelkm=travelkm
    }
    getprice () {
        return this.travelkm*7;
        }
}
const customer= new Uber_price('madurai','tiruchy',55);
console.log(customer.getprice());