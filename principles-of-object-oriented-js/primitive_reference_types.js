

var color1 = "red";
var color2 = color1;

console.log(color1);
console.log(color2);

color1 = "blue";
console.log(color1);
console.log(color2);

console.log(typeof "Nicholas");
console.log(typeof 10);
console.log(typeof 5.1);
console.log(typeof true);
console.log(typeof undefined);

console.log('In fact, this has been acknowledged as an error '+
	'by TC39, the committee that designs and maintains JavaScript.');
console.log(typeof null);   

var value = null;
console.log(value === null); 

console.log('%c2个等号比较前会强转的，3个的不会，类型不同就算不同','color:red;background:yellow');
console.log("5" == 5); 
console.log("5" === 5);
console.log(undefined == null); 
console.log(undefined === null);

//-----------
console.log('Primitive Methods');
var name = "Nicholas";
var lowercaseName = name.toLowerCase();
var firstLetter = name.charAt(0);
var middleOfName = name.substring(2, 5);

var count = 10;
var fixedCount = count.toFixed(2);
var hexCount = count.toString(16);
var flag = true;
var stringFlag = flag.toString();

var showStr ='ch1: '+lowercaseName+" # "+firstLetter+" # "+middleOfName;
    showStr +=" @ " +fixedCount+" @ "+hexCount + " @ "+stringFlag;





console.log('-------Reference Types');
var object1 = new Object();
var object2 = object1;
object1.myCustomProperty = "Awesome!";
console.log(object2.myCustomProperty);     

console.log('实例化内建的引用类型：');
var items = new Array();
var now = new Date();
var error = new Error("Something bad happened.");
var func = new Function("console.log('Hi');");
var object = new Object();
var re = new RegExp("\\d+");

showStr +="<br/>"+now.toString()+" * "+error.toString();

var book = {
    "name": "The Principles of Object-Oriented JavaScript",
    "year": 2014
};

var bookA = new Object();
        bookA.name = "The Principles of Object-Oriented JavaScript";
        bookA.year = 2014;

console.log('%c 2 way to create object is equivalent','color:pink');
console.dir(book);
console.dir(bookA);
var colors = [ "red", "blue", "green" ];
        console.log(colors[0]);     // "red"
var colorsA = new Array("red", "blue", "green")
        console.log(colorsA[0]);     // "red"

function reflect(value) {
            return value * 10;
}

        // is the same as
var reflectA = new Function("value", "return value * 10;");
console.log(reflect(10));
console.log(reflectA(10));

var numbers = /\d+/g;
        // is the same as
var numbersA = new RegExp("\\d+", "g");

console.log(numbers.exec("100t"));
console.log(numbersA.exec("100t"));
console.log("The value of lastIndex is " + numbers.lastIndex);
console.log("The value of lastIndex is " + numbersA.lastIndex);





console.log('-------Property Access');
var array = [];
array.push(123);
console.log(array);

var arrayA = [];
arrayA["push"](123);
console.log(arrayA);

//better
var arrayB =[];
var method = "push";
arrayB[method](123);
console.log(arrayB);

console.log('-------identifying reference Types');
function reflect(value) {
            return value;
        }
console.log(typeof reflect); 

var items = [];
var object = {};
function reflect(value) {
    return value;
}
console.log(items instanceof Array);
console.log(object instanceof Object);
console.log(reflect instanceof Function);

var items = [];
console.log(Array.isArray(items));      // true



console.log('Primitive wrapper Types-----');
var name = "Test";
var firstChar = name.charAt(0);
console.log(firstChar);

console.log('Primitive wrapper Types: Property disappear:')
var name = "Nicholas";
name.last = "Zakas";
console.log(name.last);  

console.log('temporary object is created only when a value is read:');
var name = "Nicholas";
var count = 10;
var found = false;
console.log(name instanceof String);    // false
console.log(count instanceof Number);   // false
console.log(found instanceof Boolean);  // false

console.log(typeof name);    // false
console.log(typeof count);   // false
console.log(typeof found);

var nameA = new String("Nicholas");
var count = new Number(10);
var found = new Boolean(false);
console.log(typeof nameA);
console.log(typeof count);
console.log(typeof found);
console.log('%c -----ch1 is end ------','color:red');

