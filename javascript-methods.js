/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
    var newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray[i] = callbackFn(this[i], i, this)
    }

    return newArray;
};

// MAP TEST //
function myMapTest() {
    let arr = [1,2,undefined,4,5];
    
    let newArr = arr.myMap(x => x+1);
    let correct = arr.map(x => x+1);

    console.log(newArr);
    console.log(correct);
}

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i], i, this)) {
            this.splice(i, 1);
            i--;
        }
    }

    return this;
};

// FILTER TEST //
function myFilterTest() {
    let arr = [1,2,,4,null];
    
    let newArr = arr.myFilter(x => x < 3);
    let correct = arr.filter(x => x < 3);

    console.log(newArr);
    console.log(correct);
}

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) {
            return true;
        }

        return false;
    }
};

// SOME TEST //

function mySomeTest() {
    let arr = ["a", "b", , "c", null];

    let hasA = arr.mySome(x => x === "a");
    let correctA = arr.some( x => x === "a");
    let hasD = arr.mySome(x => x === "d");
    let correctD = arr.some( x => x === "d");
    console.log(hasA);
    console.log(correctA);
    console.log(hasD);
    console.log(correctD);
}

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};