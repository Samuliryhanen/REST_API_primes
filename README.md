# REST_API_primes
A simple rest api that can sum up a given list of numbers and also checks if the input sums to a prime number, or if it already is a prime number.

To run the application one must have node installed on their system. 
A simple way to do this is first install VScode, and inside a terminal run install node command.
Open the project, run "node ." -command in the terminal, which makes the server live.
Then open a web browser, google chrome for example and in the in the url section: 
  The application works in 2 different ways
    Either
      GET http://localhost:8080/myapi/?action=sumandcheck&numbers=1,2,3 -> {"result": 6, "isPrime": false}
    Or
      GET http://localhost:8080/myapi/?action=checkprime&number=89      -> {"isPrime": true}


Functions calculating sum and prime evaluator are tested using mocha.js and chai.js.
