
//Arrow function-------------------------------------------------------
var functionName = () => {
    document.write(" hello World  <br><br>");
};
functionName();


// Arrow function with parameter-------------------------------------------------------
var function_with_parameter = (a, b) => {
    document.write(a + "<br>" + b + " <br>" + "<br>");
};
function_with_parameter(15, 20);

// Arrow function with default parameter & rest parameter-------------------------------------------------------

// defaullt-------------------------------------------------------
var function_with_Default_parameter = (a, b = 20) => {
    document.write(a + "     " + b + "<br>");
};
function_with_Default_parameter(10);


// Rest parameter-------------------------------------------------------
var function_with_rest_parameter = (a, ...rest_function_Name) => {
    document.write(a + " " + rest_function_Name + "<br>");
};

function_with_rest_parameter(10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// single statement Arrow function-------------------------------------------------------
var function_single_statement = a => document.write(a + "<Br>"); function_single_statement(50);


// Return value Arrow function -------------------------------------------------------
// with curly braces
var function_Return_value = (a, b) => { return a + b + "<br>" };
document.write(function_Return_value(15, 15));

// without curly braces
var function_Return_value = (a, b) => a + b + "<br>";
document.write(function_Return_value(15, 25));

// function declaration -------------------------------------------------------
function function_Name(a, b) {
    return a + b;
}
document.write(function_Name(5, 5));

// function declaration in Arrow function-------------------------------------
(a, b) => a + b;
//Arrow function---------------------------------------------------------------------------------------------------




// callback function ---------------------------------------------------------------------------------------------
function show() {
    document.write("<br> <br>  hello i am callback function");
}
function callback_function(callback) {
    callback();
}
callback_function(show);

// with argument -------------------------------
function show_argument(a) {
    document.write("<br><br>i am with argument " + a);
}
function callback_function_argument(callback_argument) {
    var a = "<strong>hello</strong>";
    callback_argument(a);
}
callback_function_argument(show_argument);

// Different type callback function

function callback_function(callback) {
    callback();
}
callback_function(function () {
    document.write("<br> <br>  <strong>hello i am callback function</strong>");
});

// callback in arrow function

function callback_function_arrow(callback) {
    var b = 200;
    callback(b);
}
callback_function_arrow(b => document.write("<br> <br>  <strong> hello i am callback function with arrow function </strong>" + b + "%"));



//callback synchronous function

function show() {
    document.write("<br> <br>  hello i am callback synchronous function ");
}
function callback_function(callback) {
    callback();
}
callback_function(show);
document.write(" End");


//callback asynchronous function 
// setTimeout(function synchronous_function() {
//     document.write("i am synchronous function");
// },
//     10000);

// document.write(" END ");

// callback function ----------------------------------------------------------------------------------------------------



// practice
// call back function
function callback_function_one(a, b) {
    document.write(a + b);
}
function main_callback(callback) {
    var a = 15;
    var b = 20;
    callback(a, b);
}
main_callback(callback_function_one);

function call_back() {
    document.write("hello im call back funtion <br><br>");
}
function call_back__(call_back_name) {
    call_back_name();
}
call_back__(call_back);



//------------------------------Immediately Invoked Function Expression (self execution anonymous function)-----------------------------------------------------

(function () {
    document.write('IIFX function here ( <B>Immediately Invoked Function Expression<b>) without parameter');
})
    ();

(function (a, b) {
    document.write("<br><Br>", a + b, " with parameters <br><br><br>");
})
    (15, 90);









// Arguments
function argument_function(name, age, number) {
    arguments[1] = " your are teenager ";

    document.write(name);
    document.write(age);
    document.write(number);
    // document.write("Your Name is ", name , " & your age is  " , age ,  "This is your mobile number " , number,"<br>");
    // document.write("Your Name is ", name , " & your age is  " , age ,  "This is your mobile number " , number,"<br>");
    //document.write(arguments[0], arguments[1], arguments[2]);
}
argument_function(" Test ", " 25 ", " 987654971521 <br><br>");



// arguments length
function arguments_length() {
    // document.write(arguments.length);
arguments[1] = 'Sonu';
    for (i = 0; i < arguments.length; i++) {
        document.write(arguments[i] + " ");
    }
}
arguments_length("Paras_yash", "525 <br><br>");



// arguments length



// Arguments

