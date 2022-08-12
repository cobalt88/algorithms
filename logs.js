/* 
given an input array of strings of 3 integers separated by spaces where integer 1 is the sender ID, integer 2 is the receiver ID and integer 3 the dollar amount of the transaction
example: ["1 2 200", "1 1 100", "2 3 300", "3 1 400", "3 2 500"]
return a string of id's separated by spaces in descending order based on the number of transactions each user has. 
in the above example the expected output would be "2 3 1" or "3 2 1" since each user has the following number of transactions:
id1: 2
id2: 3
id3: 3
note that if a user sends money to them selves it does not count. 
Directions: also return only users who have more than {target} transactions in descending order by number of transactions.
*/

const log = ["1 2 200", "1 1 100", "2 3 300", "3 1 400", "3 2 500"];
const target = 2;

function countTransactions(log, target) {}
[
  [1, 2, 2],
  [1, 1, 1],
  [2, 1, 1],
];
