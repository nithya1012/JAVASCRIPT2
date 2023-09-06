//objects
let obj1= {
    name: 'Nithya',
    regno:4213
}
console.log(obj1.name);
console.log(obj1.regno);

//Nested objects
let nithya={
    behaviour:'soft',
    age:21,
    nithya2:{
        cgpa:8.5

    }
}
console.log(nithya.nithya2.cgpa);

//Method
let obj={
    name:'nithya',
    nickname:'nithi',
    greet:function(){
        console.log("heyyhi");
    }
}
console.log(obj.greet());

//methods in arrow function
var arrow={
    name:'nithya',
    nickname:'nithi',
    greet: () => '10'
}
console.log(arrow.greet());

//modifying n adding properties
let arrow2={
    name:'santhosh',
    name2:'janani',
    greet:(a,b=10) => a+b

}
arrow2.name='Nisanto'
console.log(arrow2.greet(10));
console.log(arrow2.name);
console.log(arrow2);
arrow2.ours='pragya'
console.log(arrow2.ours);
console.log(arrow2);

//object creation
function Johnny(params){
    this.fncdef='rhymes';

}
let johnny=new Johnny;
console.log(johnny.fncdef);
console.log(johnny);
johnny.fncdef='defined';
console.log(johnny.fncdef);
console.log(johnny);
console.log(typeof(Johnny));

//values assigned after obj creation
function Railway(from,to){
    this.from=from,
    this.to=to
}
let railway=new Railway("cuddalore","chidambaram");
console.log(railway);

//assigning objects
let restaurant={
    dish:'briyani',
    sidedish:'chicken 65',
    dessert:{
        icecream:'scoop'
    }
}
let restaurant2=restaurant;
console.log(restaurant);
console.log(restaurant2.dish);
restaurant2.rupee='120';
console.log(restaurant2.rupee);
console.log(restaurant.rupee);

//Destructing objects
let tourist={
    place:'pogoland',
    place2:'black thunder',
    games:{
        type:'water games',
        type2:'dry games'
    }
}
const {place2,games:{type2}}=tourist;
console.log(type2);
console.log(tourist.games);

//array
let array=['nithi','santo'];
console.log(array[1]);
array.push(9);
console.log(array);

let num=[1,2,3,4,5,6]
function number(num)
{
    if(num%2==1){
        return true;
    }
    return false;
}
console.log(num);
num.copyWithin(1,2,4);
console.log(num);
console.log(num.indexOf(3));
console.log(num.includes(5));

//splicing
var fruits=['mango','apple','guava','cherry'];
fruits.splice(1,1,'papaya');
console.log(fruits);

//Inheritance
class animal{
    constructor(fname,lname){
        console.log('running');
        this.fname=fname;
        this.lname=lname;
    }
    greet(){
    console.log('hello ${this.fname} ${this.lname}' );

    }
}
class cat extends animal{
    constructor(){
        super("lion","300");
        this.age=30;
}
}
class lion extends cat{

}
let obj2=new lion("nithi","priya")
console.log(obj2.greet());










