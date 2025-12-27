function outer()
{
    let x=10
    function inner()
    {
        console.log(x)
    }
    inner()
}
outer()

function outside()
{
    let x=10
    return function()
    {
        x++
        console.log(x)
        //x++  //check this too
        
    }
    
}
let control=outside()
control()
control()
control()


function createUser(name)
{
    let score=0

    return {
        getscore : () => score,    //getscore: function() { return score; },
        increase : () => score++   //increase: function() { return score++; }
    }
}
let user = createUser("ALi")
user.increase()
user.increase()
console.log(user.getscore())

