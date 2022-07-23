$(document).ready(function(){
var deposit = $('#deposit');
var withdraw = $('#withdraw');
var check = $('#check');
var back = $('.return');
var os = $('#os');
var hs = $('#hs');
var wcheck = $('#wcheck');
var wsave = $('#wsave');
var ccheck = $('#wcheck');
var csave = $('#wsave');
var dpcheck = $('#dpcheck');
var dpsave = $('#dpsave');
var number = $('.number');
var nummar = $('#num-mar');
var acct = $('#accType');
var act = $('#action');
var amount = $('#amount');
var butt = $('.options-button-a');
var pass = $('#pass');
// var dm = $('#deposit-menu');
// var numBut="";
// for(var x =0; x<10; x++){
// numBut += "<button value='"+x+"'class='number'>"+x+"</button>"
// var notif = $('#typed');
// console.log('notif').text();
// };
// $('#num-pad').html(numBut);

// Home Screen Options:
var depo_o = $('#d-options');
var with_o = $('#w-options');
var check_o = $('#c-options');
// Deposit Screen Options:
var ddCheck = $('#d-dcheck');
var ddCash = $('#d-dcash');
var dCheck = $('#d-check');
var dCash = $('#d-cash');
// Deposit variables:
var dpcheck = $('#dpcheck');// Deposit Check to Checking.
var dpsave = $('#dpsave');// Deposit Check to Saving. 
var dcashcheck = $('#dcashcheck');// Deposit Cash to Checking. 
var dcashcash = $('#dcashcash');// Deposit Cash to Saving. 
// Withdraw Variables:
var wCheck = $('#w-wcheck');
var wCash = $('#w-wcash');

var ob = $('.options-button')
pass.hide();
ob.addClass('animate__animated animate__flash')

depo_o.hide();
with_o.hide();
check_o.hide();

dCheck.hide();
dCash.hide();
wCheck.hide();
wCash.hide();
// pass.show();
amount.hide();

withdraw.click(function () {
    hs.hide();
    os.show();
    with_o.show();
});
deposit.click(function () {
    hs.hide();
    os.show();
    depo_o.show();
});
check.click(function () {
    hs.hide();
    os.show();
    check_o.show();
});
ddCheck.click(function () {
    // ddCheck.toggle();
    // ddCash.toggle();
    dCheck.show();
    dCash.hide();

});
ddCash.click(function () {
    // ddCash.toggle();
    // ddCheck.toggle();
    dCash.show();
    dCheck.hide();



});

back.click(function () {
    $(this).parent().hide(function () {

    });
    // $(this).parent().show(function () {

    // });
    pass.show();
    hs.show();

});

butt.click(function () {
    // console.log('working')
    var valley = $(this).val();
    var river = $(this).text();
    os.hide();
    pass.hide();
    function action(action, atype) {
        acct.text(atype);
        act.text(action);

    };
    action(valley, river);
    amount.show();
});
var funds = 0;
number.click(function () {
    var value = $(this).val();
    nummar.text("$" + value);
    funds = value;

});

amount.hide();
});
