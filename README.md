# MongoDB $inc Operator Error with String Value
This repository demonstrates a common error when using the `$inc` operator in MongoDB. The error occurs when attempting to increment a numeric field with a string value. 

## Bug Description
The provided code demonstrates the incorrect use of the `$inc` operator by trying to increment the `age` field, which is expected to be a number, with the string value "1". This leads to an error because the `$inc` operator requires a numeric value.

## Solution
The solution involves ensuring that the value passed to the `$inc` operator is a number. This is achieved by modifying the code to increment the `age` field with a numeric value (1).