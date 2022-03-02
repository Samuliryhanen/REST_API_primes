/**
 * A simple REST API for counting numbers and prime number checking
 */
exports.calculate_sum = calculate_sum;
exports.check_prime = check_prime;

const { application } = require('express');
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json() )

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)


app.get('/myapi', function (req, res) {
    const action = req.query.action;
    try{
        if(action.localeCompare('sumandcheck') === 0){
            const numbers = req.query.numbers;
            const sum = calculate_sum(numbers);  //parse metodi tapahtuu calculate function sisällä, joten sitä ei erikseen kutsuta tässä.
            const is_prime = check_prime(sum);    
        
            res.send({
                number: sum,
                isPrime: is_prime
            });
        }
        if(action.localeCompare('checkprime') === 0){
            const number = "0";
            const number_list = parse_integers(req.query.number); // Jos syöte on muotoa  " 00134 1023210 3 adkaod 213"
            for(const i of number_list){                          // Karsitaan kaikki ylimääräiset merkit ja yhdistetään jono numeroksi  
                number +=i;
            }        
            const is_prime = check_prime(number);    
    
            res.send({
                number: parseFloat(number),
                isPrime: is_prime
            });
        }
    } catch (error){
        res.status(400).send({ 
                invalid_query: "invalid query"
        });
    }  

});

/**
 * Makes a list of integers from a given input 
 * @param {String} integers 
 * @returns List of positive and negative integers
 */
function parse_integers(integers){
    return integers.match(/-?\d+/g);
}

/**
 * Multiplies numbers inside of a given string 
 * @param {string} numbers 
 * @returns SUM
 */
function calculate_sum(numbers){
    if(numbers == ""){
        return 0;
    }
    const list = parse_integers(numbers);
    const sum = 0;
    if(list.length > 0){
        for(const i of list){
            sum += parseFloat(i,10);    
        }
        return sum;
    }
    return sum;
}
/**
 * Checks whether given integer is a prime
 * @param {integer} num
 * @returns true/false
 */
function check_prime(num){
    for(const i = 2, s = Math.sqrt(num); i <= s; i++){
        if(num % i === 0) return false; 
    }
    return num > 1; 
}