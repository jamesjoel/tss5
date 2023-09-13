function gst(price, type)
{
    switch(type){
        case 1 : var tax = price*5/100;
                break;
        case 2 : var tax = price*8/100;
                break;
        case 3 : var tax = price*18/100;
                break;
        case 4 : var tax = price*28/100;
                break;

        
    }
    var f_price = price+tax;
    console.log(f_price);
}

gst(23000, 3);
gst(12000, 4);