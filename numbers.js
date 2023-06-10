
alert("Input Two Numbers to Determine if they are Amicable");

one = prompt("Number 1?");
two = prompt("Number 2?");

var one_factors = factor_finder(one);
var two_factors = factor_finder(two);

var one_sum = sum_calc(one_factors);
var two_sum = sum_calc(two_factors);

var result = is_amicable(one_sum, one, two_sum, two);

document.getElementById("result").innerHTML= result;


var factor1 = print_factor(one, one_factors);
var factor2 = print_factor(two,two_factors);

document.getElementById("list1").innerHTML = factor1;
document.getElementById("list2").innerHTML= factor2;

//creates an array of factors based on the number the user inputs
function factor_finder(num)
{
    var factor_array = [];
    var half = num / 2;
    
    for(let i = 1; i <= half; i++)
    {
        if(num % i == 0)
        {
            factor_array.push(i);
        }
    }
    return factor_array;
}

//calculates the sum using the array of factors
function sum_calc(factors)
{
    var running_sum = 0;

    for(let i = 0; i < factors.length; i++)
    {
        running_sum = running_sum + factors[i];
    }
    // document.write(running_sum);
    return running_sum;
}

// determines if two numbers are amicable, if yes a true statement will return if no a false statment returns takes in the array sums of both numbers as well as the numbers
function is_amicable(sum_one, one, sum_two, two)
{
    if((sum_one == two ) && (sum_two == one))
    {
        var string = "The numbers: " + one + " and " + two + " are amicable";
        document.getElementById("heading").innerHTML = "Congrats!"
    }
    else {
        var string = "The numbers: " + one + " and " + two + " are not amicable";
        document.getElementById("heading").innerHTML = "Try Again"
    }

    // document.write(string);
    return string;
}

// takes in the number and the array of it's factors and creates a string that displays the info
function print_factor(number, factors_list)
{
    var string_list = "Factors of " + number + " are [" + factors_list + "]";
    // document.write(string_list);
    return string_list;
}



