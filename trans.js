var number = $('.number');
var marquee = $('#sequence');
var log = $('#log');

var items =['Bike','Laptop','Monitor','Television','Refrigerator','cycle'];
var values =[];
function shuffle(array) {
    let indx = array.length,  randomIndex;

    while (indx != 0) {

        randomIndex = Math.floor(Math.random() * indx);
        indx--;
    
        [array[indx], array[randomIndex]] = [
            array[randomIndex], array[indx]
        ];
    }

    return array;
};


function genVal(){
    // var ns = num.toString();
    // var val = [ns].join('-');
    var tofv = true;
    shuffle(items);
    for(var x = 0;x<items.length;x++){

        var bool = Math.floor(Math.random()*2)+1;
        var valu = Math.floor(Math.random()*100000)+1/100;

        if(bool===1){
            tofv =true;
        }else if(bool===2){
            tofv = false;
        };
        values.push(
            {
                item:items[x],
                value: "$"+valu,
                polar: tofv,
            }
        )
    }
    console.log(values);
    return values;
};


genVal();

function addValues(){
    let op ="<h1>Recent Transactions</h1>";
    for(var t =0; t<values.length;t++){
        let i = values[t].item;
        let v = values[t].value;
        let p = values[t].polar;
        let symbol ="";
        let color = "";
        if(p===true){
            symbol="+";
            color = 'sgreen';
        }else{
            symbol="-";
            color='sred';
        }
        op+= "<div class='statement'><span class='"+color+"'>"+symbol+"</span>"+v+" - "+i+"</div>";
        
    }
    op+= "<button class='options-button-small return'>Back</button>";
    marquee.html("<div class='statement'><span class='"+color+"'>"+symbol+"</span>"+v+" - "+i+"</div>");


    log.html(op);

};
addValues();

number.click(function(){
    var value = $(this).val();
    
});
log.hide();