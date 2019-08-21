
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

// function declaration in Arrow function-------------------------------------------------------
(a,b) => a+b;
