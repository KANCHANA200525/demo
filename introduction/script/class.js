class laptop{
    constructor( name,year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;

    }
}
let lap1 = new laptop("Asus",2016);
let lap2 = new laptop("Dell",2019);

console.log(lap1.name+" "+lap1.year)
console.log(lap2.name+" "+lap2.year)
console.log()







