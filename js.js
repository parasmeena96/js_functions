
//Arrow function-------------------------------------------------------
var functionName = () => {
    document.write(" hello World  <br><br>" );
};
functionName();


// Arrow function with parameter-------------------------------------------------------
var function_with_parameter = (a, b) => {
document.write(a + "<br>" + b + " <br>" + "<br>");
};
function_with_parameter(15, 20);

// Arrow function with default parameter & rest parameter-------------------------------------------------------

// defaullt-------------------------------------------------------
var function_with_Default_parameter = (a, b=20) => {
    document.write(a + "     " + b +"<br>");
};
function_with_Default_parameter(10);


// Rest parameter-------------------------------------------------------
var function_with_rest_parameter = (a, ...rest_function_Name) => {
document.write(a+ " " + rest_function_Name + "<br>");    
};

function_with_rest_parameter(10, 1,2,3,4,5,6,7,8,9,10  );

// single statement Arrow function-------------------------------------------------------
var function_single_statement = a => document.write(a + "<Br>");
function_single_statement(50);


// Return value Arrow function -------------------------------------------------------
// with curly braces
var function_Return_value = (a,b) => { return a+b+"<br>"};
document.write(function_Return_value(15,15));
  
// without curly braces
var function_Return_value = (a,b) => a+b+"<br>"; 
document.write(function_Return_value(15,25));



// function declaration -------------------------------------------------------
function function_Name(a,b){
    return a+b;
}
document.write( function_Name (5,5) );

// function declaration in Arrow function-------------------------------------
(a,b) => a+b;
//Arrow function---------------------------------------------------------------------------------------------------




// callback function ---------------------------------------------------------------------------------------------
 function show(){
     document.write("<br> <br>  hello i am callback function");
 }
function callback_function(callback){
callback();
}
callback_function(show);

// with argument -------------------------------
function show_argument (a){
    document.write("<br><br>i am with argument " + a);
}
function callback_function_argument(callback_argument){
var a = "<strong>hello</strong>";
    callback_argument(a);
}
callback_function_argument(show_argument);

// Different type callback function

function callback_function(callback){
    callback();
    }
    callback_function(function(){
        document.write("<br> <br>  <strong>hello i am callback function</strong>");
    });

// callback in arrow function

function callback_function_arrow(callback){
    var b = 200;
    callback(b);
    }
    callback_function_arrow(b =>document.write("<br> <br>  <strong> hello i am callback function with arrow function </strong>" + b +"%"));



//callback synchronous function

function show(){
    document.write("<br> <br>  hello i am callback synchronous function ");
}
function callback_function(callback){
callback();
}
callback_function(show);
document.write(" End");


//callback asynchronous function 
setTimeout(function synchronous_function(){
document.write("i am synchronous function");
},
10000);

document.write(" END ");

// callback function ----------------------------------------------------------------------------------------------------