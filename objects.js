let user = {name: "ALI", age:20, isPremium:true}

function printObject(data)
{
   console.log(data)
   console.log(data.name)
}

printObject(user)

function usercorrect (data)
{
    if (data.isPremium && data.age>18)
        return "access granted"
    else
        return "access denied"
}

console.log(usercorrect(user)) //you have to write console.log if you are returning values in function

//new way of writing objects
function newstyle (data)
{
    let {name,age} = data
    console.log("name is "+name+" and age is "+age)
}
newstyle(user)

/*let car = {brand:"bmw",year:2020}

function cartype(gaadi)
{
    let {brand,year} = gaadi
    console.log("car brand is "+brand+" and model is "+year)
}
cartype(car)*/

let car = {brand:"BMW",year:2020}

function cartype({brand,year})
{
   // let {brand,year} = gaadi
    console.log("car brand is "+brand+" and model is "+year)
}
cartype(car)