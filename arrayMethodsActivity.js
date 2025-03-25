// Use concat() to join two arrays  
let arr1 = ["Cecile", "Lone"];  
let arr2 = ["Emil", "Tobias", "Linus"];  
let combinedArr = arr1.concat(arr2);  
console.log("Combined Array:", combinedArr);  

// Use push() to add an element "Kiwi" to the fruits array  
let fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.push("Kiwi");  
console.log("Fruits after push:", fruits);  

// Use unshift() to add two numbers 4 and 5 to the beginning of the array arr3  
let arr3 = [1, 2, 3];  
arr3.unshift(4, 5);  
console.log("Array after unshift:", arr3);  

// Use pop() to remove the last element from the fruits array  
fruits.pop();  
console.log("Fruits after pop:", fruits);  

// Use shift() to remove the first element from the array arr2  
arr2.shift();  
console.log("Array 2 after shift:", arr2);  

// Use sort() to sort the fruits array alphabetically  
fruits.sort();  
console.log("Fruits after sort:", fruits);  

// Use slice() to create a new array containing a portion of the fruits array  
let slicedFruits = fruits.slice(1, 3);  
console.log("Sliced Fruits Array:", slicedFruits);  

// Use splice() to insert and remove elements in the months array  
let months = ["January", "March", "April", "June"];  
months.splice(1, 0, "February"); // Insert "February" at index 1  
months.splice(4, 1, "May"); // Replace at index 4 with "May"  
console.log("Months Array after splice:", months);  