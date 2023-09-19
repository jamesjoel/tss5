// the functions are block of independent code which is executed when we call that function
function demo1()
{
    var a=60;
    var b=10;
    var c=2;
    var x=a*b;
    var y=x/c;
    console.log(y);
}  
demo1();
//asn is 300

//fuction where values are given afterwards
function demo(a,b,c)
{
    var x=a*b;
    var y=x/c;
    console.log(y);
}  
demo(100,10,2);

//function with default values so that no error occurs  
function demo2(a=1,b=1,c=2)
{
    var x=a*b;
    var y=x/c;
    console.log(y);
} 
demo2();


