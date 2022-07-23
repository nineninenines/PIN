$(document).ready(function () {

    var start = $('#begin');
    var press = $('#press');
    var wrapper = $('.wrapper2');
    // var deposit = $('#deposit');
    // var withdraw = $('#withdraw');
    // var check = $('#check');
    // var back = $('.return');
    // var os = $('#os');
    var hs = $('#hs');
    // var wcheck = $('#wcheck');
    // var wsave = $('#wsave');
    // var ccheck = $('#wcheck');
    // var csave = $('#wsave');
    // var dpcheck = $('#dpcheck');
    // var dpsave = $('#dpsave');
    // var number = $('.number');
    // var nummar = $('#num-mar');
    // var acct = $('#accType');
    // var act = $('#action');
    // var amount = $('#amount');
    // var butt = $('.options-button-a');
    // var pass = $('#pass');


    var gen = false;
    function typeOut(sentence, where) {
        var s = sentence;
        var res = [s].join(' ');
        console.log(res);
        var rl = res.length;
        var ri = 0;
        var rt = "";
        function setText() {
            if (ri === rl - 1) {
                clearInterval(ts);
            };
            var letter = res[ri];
            rt += letter;
            var text = $(where);
            ri++;
            text.text(">> "+rt + " ");
        };
        var ts = setInterval(setText, 50);
    };
    // wrapper.hide();
    hs.show()
    // typeOut("Are you still there?", "#begin");
    // press.hide();
    // setTimeout(function () {
    //     press.show().text('Press [Shift] to continue').addClass('sgreen animate__animated animate__fade');
    // }, 2000);

    var click = 0;

    $(document).keydown(function (y) {
        if (y.keyCode === 16 /* Shift Key */ && click === 0 /* game generated */) {
            
            typeOut("Welcome to BanK Corp!", "#begin");
            setTimeout(function () {
                press.text("Press [Space]");
            }, 1500);
            press.text('');
            click++;
        };
        if (y.keyCode === 32 /* Space key */ && click === 1 /* game generated */) {

            typeOut("Connection Error :", "#begin"); start.addClass('sred');
            setTimeout(function () {
                press.text('Press [Esc] to retry').addClass('sred');
            }, 1000);
            press.text('');
            click++;
        };
        if (y.keyCode === 27 /* Escape key */ && click === 2 /* game generated */) {

            start.removeClass('sred');
            press.text('').removeClass('sred');
            typeOut("Connecting to server... ", "#begin");
            setTimeout(function () {
                start.addClass('sgreen');
                typeOut("Connected!", "#begin");
                

            }, 3000);
            setTimeout(function () { 
                               start.text('').removeClass('sgreen');

                press.text('Press [Z]');
            }, 4000);
            
                        click++;

        };
        if (y.keyCode === 90 /* Z key */ && click === 3 /* game generated */) {
            // start.removeClass('sred');
            typeOut("Loading", "#begin");
            setTimeout(function () {
                press.text("Please wait...");
            }, 500);
            setTimeout(function () {
                press.text("Press [Y] to enter pin");

                wrapper.hide();
                start.text('');
            }, 1500);
            setTimeout(function () {
                press.hide();

            }, 5000);
                $('.wrapper').show();

            
            press.text('');
            click++;



        };
        if (click > 3) {
            click = -1;
        };
    });
    os.hide();
    // hs.show();
});
