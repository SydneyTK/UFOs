// create an array of vegetables 
let vegetables = ["Carrots", "Peas","Lettuce","Tomatoes"];

//build the for loop
//assign iterable as 0, then tell the loop to continue working through the array of veggies as long as i is less than # of veggies in array
// finally increase the iterable by assing 1
for (var i=0; i<vegetables.length; i++){
    console.log("I love "+ vegetables[i]);
}

// here is a loop without referencing an array first, in the loop we tell it we only want 5 iterations 
for (var i=0; i<5; i++){
    console.log("I am " +i);
}
