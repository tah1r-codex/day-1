for(let i=0; i<5 ;i++)
{
    console.log("hello world")
}

let a = [1,3,5,7,8]
for(let i=0; i<a.length ;i++)
{
    console.log(a[i])
}

function count(b)
{
 for(let i=0; i<b.length ;i++)
 {
    console.log(b[i])
 }
}

count(a)

let i =0;
while(i<5)
{
    console.log(a[i])
    i++
}

let evennos = [2,3,6,8,10]
 
function printnumbers(no)
{
    for (let i=0; i<no.length;i++)
    {
        if (no[i]%2==0)
        console.log(no[i])
    }
}

printnumbers(evennos)