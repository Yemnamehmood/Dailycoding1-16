//for practice daily 3 question challenge

//DAY 1

//task 1 print a message in variable so we take let
 let message =("Hello Ashraib, would you like to learn some typescript today?");
 console.log(message);


 //task2 print a name in lower,pper,titlecase
let name1: string = ("Yemna");
//in lowercase
console.log("lowercase;" , name1.toLowerCase());

//in uppercase
console.log("uppercase;", name1.toUpperCase());

//in titlecase
console.log("titlecase;", name1.replace(/\bw/g,c => c.toUpperCase())); 


//DAY 2

// task 1 print quote
let famousperson: string = ("Albert Einstein, once said `A person who never made a mistake never tried anything new`");
console.log(famousperson);

//task 2 print quote and person name
let famous_person: string = "Albert Einstein";
let message1: string = `${famous_person} , once said "A person who never made a mistake never tried anything new"`;
console.log(message1);

//task 3 stripping names print

let naMe: string = "\t\n Yemna \t\n";  //this save the name with whitespace
console.log(naMe);  //shows the name with whitespace
console.log(naMe.trim());  //shows the name without whitspace

//one more practice
let namee: string = "\t\n Rayan \t\n" ; 
console.log(namee);
console.log(namee.trim());


//DAY 3
//task 1 (no.8) add,subtract,multiply,divide


console.log(4+4); //it shows addition 
console.log(9-1); //it shows subtraction
console.log(2*4); //it shows multiplication
console.log(32/4); //it shows division 


//task 2 same task as same as task 1 

console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);


//task 3 store fav no in varaible.
let favouritenumber :string = "16";
console.log(`My favourite number is ${favouritenumber}`); //it shows the message

//another one
let favno : string = "1456" ; 
console.log(`My fav no is ${favno} , because i really like it`);


//DAY 4 
//task 1 adding comments

let myname: string = "Yemna";
console.log(`Hello ${myname} , would you like to learn some typescript today`);

//another
let myname1: string="YEMNA MEHMOOD";
console.log(`Hey, ${myname1} , would you like to be web developer`);


//task 2 Names in list
let friendsname: string[]=["Ahmed","Maham","Aamash","Laraib","Myself"];
for(let i = 0; i <friendsname.length; i++){
    console.log(friendsname[i]);

}

//another
let names:string[]=["hira","simra","afreen","shanza"];
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

//task3 greetings to them
let greeting: string[]=["Ahmed","Maham","Aamash","Laraib","Myself"];
for(let name of names){
    console.log(`Hello ${name}, keep doing hardwork`);
}


//DAY 5 
//task 1 (your own array)
let transport: string[]=["Civic","Audi","Fortuner","Sportage"];
for(let i=0; i<transport.length; i++){
    console.log(`I Would Like To Own A ` +transport[i]);
}


//task 2 (inviting guests)
let guests: string[]=["Adil","Ayan","Maham"];
for(let i=0; i<guests.length; i++){
    console.log(`I am inviting you for dinner tomorrow   ` + guests[i]);
}


//task 3 (changing guest list)
let newguest: string[]=["Adil","Ayan","Maham"];
for(let i=0; i<newguest.length; i++){
    console.log(`I am inviting you for dinner tomorrow  `+ newguest[i]);
}
//replace the guest
let notcoming: string = "Adil";
let newGuest: string= "Rayan";
guests[0]= newGuest
for(let i=0; i<newguest.length; i++){
    console.log(`I am inviting you for dinner tomorrow  `+ guests[i]);
}
console.log(`Mr , ${notcoming} is not coming for dinner tomorrow` );

//DAY 6
//task 1 (more guest)
 guests.unshift("Mano","Aina");
 for(let i=0; i<guests.length; i++){
    console.log(`I am inviting you for dinner tomorrow  ` + guests[i] );
 }
console.log(` I've found a bigger table,so i am inviting more guests`);


//task 2 (shrinking guest)
console.log(`\n\n unfortunately , I can invite only two people for dinner.\n\n`);
while(guests.length>2){
    let removedguest = guests.pop();
    console.log(`Sorry, Dear ${removedguest} I can't invite you for dinner tomorrow`);

for(let i=0; i<guests.length; i++){
    console.log(`Dear`  + guests[i]  + `\nYou all are still invited for dinner tomorrow. \n\nThankyou\n`);



}
guests.splice(0,2);
console.log(guests); 

//task 3 (seeing the world)
let favplaces: string[]=[" Bali" ,"Dubai","Greece"];
console.log("original order:" , favplaces);
console.log("Alphabetical order:",[...favplaces].sort());
console.log("original order:" , favplaces);
console.log("Reverse alphabetical order:",[...favplaces].sort().reverse());
console.log("Original order:", favplaces);
favplaces.reverse();
console.log("Reversed order:" , favplaces);
favplaces.reverse();
console.log("Original order:", favplaces);
favplaces.sort();
console.log("Alphabeical order:", favplaces);
favplaces.reverse();
console.log("Reverse alphabetical order:", favplaces);


//DAY 7 
//Task 1 (dinner guests)

let guestslist: string[]=[`Ahmed, Mano, Aamash , Laraib ,Rayan, Ayan, Aina` ];
console.log(`I am inviting ${guestslist.length} people to dinner`);

//task 2 (list of languages)
let languages: string[]=["English","Urdu","Sindhi","Punjabi"];
console.log("Languages i would like to speak:", languages);

//task 3 (Objects in typescript)
let book: { title: string; author: string; yearpublished: number }={
    
    title: "The Exorcist",
    author: "William Peter",
    yearpublished: 1971,
};
console.log (`Book inofrmation: ${book.title} by ${book.author} published in ${book.yearpublished}`);

//DAY 8
//Task 1 ( intentional Error)
const days : string[]= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
//console.log(days[7]);
console.log(days[6]);

//Task 2 (Conditional test)
let car=  `fortuner`;
console.log("Is car== `fortuner`? I predict true.");
console.log(car == `fortuner`); //True 

console.log("Is car== `Honda`? I predict false.");
console.log(car==`Honda`); //False

console.log("Is car==`fortuner`? I predict True.");
console.log(car==`fortuner`); //True

console.log("is car.length == 5? predict true");
console.log(car.length==5); //True

console.log("Is car==`Civic`? I predict false.");
console.log(car==`Civic`); //False

console.log("is car.length == 9? predict true");
console.log(car.length!=9); //False 

console.log("Is car== `BMW? I predict false.");
console.log(car==`BMW`); //False 

console.log("Is car ==`Black`?  I predict true. ");
console.log(car==`Black`); //True

console.log("Is car==`BrandNew`? I predict True");
console.log(car==`BrandNew`); //True

console.log("Is car==`RangeRover?` I predict false");
console.log(car==`Rangerover`); //False

//Task 3 (More Conditional of TRUE and FALSE)
  
//equality with string 

//Greater or less than number , && , true and false

//Numerical test
console.log("Numerical test:");
console.log(1000 > 100); //true
console.log(100 < 12); //false

//Test of "&&"" and "Or" operators
console.log("Test with `and` and `or`: ");
console.log(true && false);
console.log(true || false);

//Test with strings
console.log("Test with strings:");
console.log("mango" == "mango"); //True
//@ts-ignore
console.log("mango" == "Mango"); //False

//Test with lower case
console.log("Test with lower case: ");
console.log("Mango".toLowerCase()== "mango"); //True

//Test Whether an item is in array
let countries : string [] = ["Pakistan","China", "Australia", "Maldives"];
console.log(" Is `Pakistan` in countries?");
console.log(countries.includes("Pakistan")); //True

//Test whether an item is not in array
console.log("Is `Finland` not in countries?");
console.log(!countries.includes("Finaland")); //True


//Day 9 
//Task 1 (Alien colours)
let aliencolor= "green";
if (aliencolor == "green"){
    console.log("You just earned 5 points!");
}

aliencolor = "red";
if (aliencolor == "green"){
    //no output because condition is false
}

//Task 2 (Alien colours 2)
aliencolor= "green";
if (aliencolor == "green"){
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 12 points.");
}

aliencolor="Brown";
if (aliencolor == "green"){
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 12 points");
}

//Task 3 (Alien colours 3)
//green alien version 
aliencolor="green";
if (aliencolor == "green"){
    console.log("You just earned 5 points");
} else if (aliencolor == "Brown"){
    console.log("You just earned 12 points" );
 } else if (aliencolor=="red"){
    console.log("You just earned 15 points.");
 }

 //brown alien version
 aliencolor= "Brown";
 if( aliencolor=="green"){
    console.log("You just earned 5 points.");
 } else if (aliencolor=="brown"){
    console.log("You just earned 12 points");
 } else if (aliencolor=="red"){
    console.log("You just earned 15 points.");
 }

//Red alien version
aliencolor="red";
if (aliencolor= "green"){
    console.log("You just earned 5 points.");
} else if (aliencolor=="Brown"){
    console.log("You just earned 12 points.");
} else if (aliencolor=="red"){
    console.log("You just earend 15 points.");
}


//DAY 10
//Task 1 (Stages of Life)
let age = 30;
if(age < 2){
    console.log("The person is a baby.");
} else if (age < 4){
    console.log("The person is a toddler.");
} else if (age < 13){
    console.log("The person is a kid");
} else if (age< 20){
    console.log("The person is a teenager,");
} else if (age < 65){
    console.log("The person is an adult");
} else {
    console.log("The person is elder.");
}

//Task 2 (Favorite Fruits list and using If )
let favourite_fruits : string []=["mango","strawberry", "banana","peach", "custard apple" ]
if (favourite_fruits.includes("custard apple")) {
    console.log("custard apple")

}
if(favourite_fruits.includes("peach")){
    console.log("you really like banana")

}
if(favourite_fruits.includes("mango")){
    console.log("mango")

}
if(favourite_fruits.includes("strawberry")){
    console.log("you really like banana")

}
if(favourite_fruits.includes("banana")){
    console.log("banana")

}

//task 3 (Greetings to Admin)
let username: string[]=["Admin", "eric","Harry"];
for(let user of username){
    if(user ==="Admin"){
        console.log("Hello admin would you like to see a report?");
    } else (
        console.log(`Hello ${user}, Thankyou for logging in again.`)
    )
}


//DAY 11 

//task 1 (NO users)
let user_name: string[]=[];
if (user_name.length ===0){
    console.log("We need to find some users!");
} else {
    //Greet users 
}
//removing all usernames ensures the message "we need to find some users!" is printed

//Task 2 (Checking username)
let username1: string[]=["Admin","Eric","Harry"];
let newusers: string[]=["Admin","Eric","Harry","Marry","Albert"];

let username1_lower : string[] = username1.map(user => user.toLowerCase());
for (let newuser of newusers){
    if(username1_lower.includes (newuser.toLowerCase())) {
        console.log(`sorry ${newuser}, That name is taken`);


} else {
    console.log(`Yes ${newuser}, Is still available in list`);

}

//Task 3 (Ordinal number suffix to numbers)
let numbers: number[]=[1,2,3,4,5,6,7,8,9,10];
for(let number of numbers)
if(number===1){
    console.log(`${number}st`) //1st
} else if (number===2){
    console.log(`${number}nd`);  //2nd
} else if(number===3){
    console.log(`${number}rd`);  //3rd
} else {
    console.log(`${number}th`) // 4th 5th 6th 7th 8th 9th 10th
}

//DAY 12
//Task 1 (PIZZAS) (CREATING LOOP)
let pizzas: string[]=[`cheesy`,`chicken fajita`,`chicken tikka`];
for(let pizza of pizzas){
    console.log(pizza);
}
console.log("\n")
for (let pizza of pizzas){
    console.log(`I Really Like ${pizza} pizza`);
}
console.log("\n i really love to eat pizza");

//Task 2 (Animals) (Creating loop)
let animals:string[]=[`Cat`,`Dog`,`Rabbit`];
for(let animal of animals){
    console.log(animal)
}
console.log("\n")
for(let animal of animals){
    console.log(`A ${animal} would make a great pet.`);
}
console.log("\n All of these are great pet , but i love cat more.")

//Task 3 (T-shirt) 
function makeshirt(size: string, text: string) {
    console.log(`Making a ${size} t-shirt with the text "${text}" printed on it.`);
}
makeshirt("Large", " code is soul");

//another one 
function makeShirt(size:string, text:string):void {
    console.log(`\n You order a ${size} shirt that says ${text}`);

}
makeShirt(`Large`,`"I love typescript"`)
makeShirt(`Medium`, `"I LoveMyself"`);

//DAY 13 
//Task 1 (large shirt) (modify funtions )
function make_shirt(size:string= `Large` , text:string=`I Love typescript`): void{
    console.log(`Making a "${size}" t-shirt with the text "${text}" printed on it.`);
}
make_shirt();
make_shirt(`Medium`)

//differet message
make_shirt(`Small`, "CodingLife");  //custom message small size

//Task 2 (Cities)
function describecities(city: string, country:string="Pakistan"): void{
    console.log(`${city} is in ${country}.`);
}

describecities("Karachi"); //defaultsentence
describecities("Islamabad");
describecities("Melbourne", "Australia");

//another for more practice
function describeCities(city:string, country:string="Australia"):void{
    console.log(`${city} is in ${country}.`);
}

describeCities("Melbourne");
describeCities("Sydney");
describeCities("Hobart");

//Task 2 (FORMATTING CITY-COUNTRY PAIRS) (returning formatted)
function city_country(city1:string, country1:string): string{
    return `${city1}, ${country1}`

}
let c1=city_country("Lahore","Pakistan");
let c2=city_country("Paris","France");
let c3=city_country("Austin","US");



//DAY 14
//Task 1 (creating album) (functions to return object)
function makeAlbum (artist: string, title: string): {artist: string , title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),

};
return dictionaries


}
let album1 = makeAlbum ("Atif Aslam", "Meri kahani");
console.log(album1);

let album2 = makeAlbum ("Fuzon", "Saagar");
console.log(album2);

let album3= makeAlbum ("Ali zafar", "Masty");
console.log(album3);

let album4= makeAlbum("Sajjad Ali", "Sahil");
console.log(album4);


//Task 2 (Magicians) (passing array)
function show_magicians(magicians: string[]): void {
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase()+ magician.slice(1));

    }

}
const magician: string[]= ["Yums", "Harry", "David" , "Ricky"];
show_magicians(magician);


//Task 3 (Great Magicians) (Modifying arrays)
function makegreat(magicians1:string[]):void{
    for(let i=0; i<magicians1.length; i++){
        magicians1[i]=magicians1[i] + `  The Great`
    }
}
const magicians2:string[]=["Yums","Harry","David","Ricky"];
makegreat(magicians2);
show_magicians(magicians2);

//Day 15 
//Task 1 (unchanged Magicians) (creating a copy of an array)
function make_great (magicians2: string[]): string[]   {
    const greatmagicians:string[]=[];
    for(let I=0; I<magicians2.length; I++) {
        greatmagicians.push(magicians2[I] +  ` The Great`);



}       return greatmagicians;

    
}
const magicians3: string[]=["Yums","Harry","David","Ricky"];
const greatmagicians2: string[] = make_great(magicians3);

show_magicians(magicians3);
show_magicians(greatmagicians2);

//Task 2 (Sandwiches list)
function sandwich(...items: string[]): void {
    console.log("Sandwich order");

    for(let I=0; I<items.length; I++) {
        console.log(`-${items[I]}`)

    }



}

console.log("Enjoy you sandwich Mr.David");
sandwich(`potato`, `garlic`, `greenchillies`);
sandwich(`chicken`, `cheesy`, `beef`);
sandwich(`extracheesy`, `mayo`);


//task 3 (Cars) (Functions)
type car = {
    manufacture: string
    model: string 
    [key : string]:any;
}
function createcar (manufacture:string, model:string , optional: Record<string,any>) : car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar: car= createcar("Toyota","Fortuner", {colour:"Black", year:"2022"})
console.log(mycar);

//DAY 16 
//TASK 1 (laptop object) (functions method)
let laptop = {
    make: "hp",
    model: "Xpz 19",
    year: 2022,
    describe: function() {
        console.log( `This laptop is a ${this.year} ${this.make} ${this.model}. ` );
    }
};
laptop.describe();

//task 2 (Advanced array)
let laptopS = [
    {make: "Dell" , model: "Xpz 19" , year: 2022},
    {make: "Apple", model: "Macbook", year: 2023},
    {make: "hp" , model: "xs5", year: 2015},

];
let [laptop1,laptop2]= laptopS;
console.log(laptop1);
console.log(laptop2);

//task 3 (Combining arrays) (combining prices)
let prices1 = [1200,1500,2000];
let prices2= [1000,1400,1700];
let combinedprices=[...prices1,...prices2].sort((a,b) => a-b);
console.log(combinedprices);






