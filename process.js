function array(arr)
{
    return arr.filter(num => num>=3).map(num => num*num)
}

let number=array([1,3,5,7,8,9])
console.log(number)