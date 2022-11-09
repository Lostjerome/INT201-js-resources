const months = ['Jan', 'March', 'April', 'June']
//insert at index 2 with two elements 'A' and 'B'
months.splice(2, 0 ,'A', 'B')
console.log(months)
//[ 'Jan', 'March', 'A', 'B', 'April', 'June' ]

//remove 1 element at index 2
months.splice(2, 1 )
console.log(months)
//[ 'Jan', 'March', 'B', 'April', 'June' ]

//replace at index 3 with 'X', 'Y'
months.splice(3, 2, 'X', 'Y')
console.log(months)
//[ 'Jan', 'March', 'B', 'X', 