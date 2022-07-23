$(document).ready(function () {   
// Variables:
    var fail = $('#fail');
    var pass = $('#pass');
    var notif = $('#welling');
    var lvl = $("#level");
    var att = $("#attempt");
    var top = $('#top-menu');
    var prompt = $('#prompt');
    var wrap = $('.wrapper');
    var level = 1;// Level and difficulty:
    var user_combo ="";
    var combos = 0;
    var tries = 3;
    var set = 1;
    var combo="";
    var timer=3;

    function update(){
        lvl.text("Level " + level);
        att.text(tries+" Attempt(s) Left");
    }
    update();
    
    fail.hide();
    // pass.hide();

    function typeOut(sentence,where){
        var s = sentence;
        var res = [s].join(' ');
        console.log(res);
        var rl = res.length;
        var ri = 0;
        var rt ="";
        function setText() {
            if (ri === rl-1) {
                clearInterval(ts);
            };
            var letter = res[ri];
            rt += letter;
            console.log(rt);
            var text = $(where);
            console.log(text);
            ri++;        
            text.text(rt+" ").addClass('animate__animated animate_flash');

        };
        var ts = setInterval(setText, 100);
    };
    function reset(){
        user_combo ="";
        combos = 0;
        tries = 3;
        set = 1;
        combo="";
        gen=false;
        update();
        function setCode() {
            if (set === 4) {
                clearInterval(cs);
                
            }else if(set>4){
                set = 0;
                console.log("after setting code "+set);
            };
            var random = Math.floor(Math.random() * 9);
            combo += random;
            console.log("combo: "+combo);
            var coding = $("#combo" + set);
            coding.text(random).addClass('blue');
            set++;
            setTimeout(function () {
                coding.text('*').removeClass('blue');
            }, 1000);
            return combo;
        };
        var cs = setInterval(setCode, 50);
        var well="Connection Error: Your PIN has been reset!";        
        setTimeout(function () {
            typeOut(well,'#welling');
        }, 1000);
       
        gen=true;
        // attempt();
    };
    // Attempt Function:
    function attempt() {
        
        function setCode() {
            if (set === 4) {
                clearInterval(cs);
                
            }else if(set>4){
                set = 1;
                console.log("after setting code "+set);
            };
            var random = Math.floor(Math.random() * 9);
            combo += random;
            console.log("combo: "+combo);
            var coding = $("#combo" + set);
            coding.text(random).addClass('blue');
            set++;
            setTimeout(function () {
                coding.text('*').removeClass('blue');
            }, 500);
            
            return combo;
        };
        
        var cs = setInterval(setCode, 25);
        gen=true;
        // console.log("set"+set, combo);
        // Variables for game:
        $(document).keydown(function (e){
            if (e.keyCode) {
                var codeN = e.keyCode;
                var code = e.key;
                
                if (combos >=0 && combos < 5 && codeN < 58 && codeN > 47 && tries>0) {
                    console.log("co"+combos);
                        
                    // }else if(combos>0 && tries>0){
                    //     reset();
                    // }
                    combos++;
                    user_combo += code;
                    $('#pin' + combos).text(code);
                    
                    

                    console.log("combo"+combos, user_combo);
                   
                    if (combos === 4 && user_combo === combo) {
                        level++;
                        $('.top-menu').text("Approved").removeClass('red sred animate__animated animate__flash').addClass('green animate__animated animate__flash');
                        gen = false;
                        // $('.wrapper').hide();
                        pass.show();
                        var dot = "";
                        var dots=1;
                        setInterval(function(){
                            
                            if(dots > 3){
                                dots= 1;
                                dot="";
                            }else if(dots<=3){
                                dot+=".";
                                notif.removeClass('sred animate__animated animate__flash').addClass('sgreen animate__animated animate__flash').text('Connected'+dot);
                                dots++;
                            };
                        },250);
                        var welcome = ["How can we help you?"];
   
                        setTimeout(function () {
                            typeOut(welcome[0],'#p-details');
                        }, 1000);
                    } else if (combos === 4 && user_combo !== combo) {
                        tries--;
                        update();

                        if (tries===0) {
                            user_combo="";
                            combos=0;
                            update();
                            
                            function ff() {
                                if (timer === 0) {
                                    clearInterval(failing);
                                    timer=3;
                                }else if(timer>0){
                                
                                $('#time').text(timer);
                                timer--;
                        
                                };
                                setTimeout(function () {
                                    fail.hide();
                                    $('.wrapper').show();
                                    top.removeClass('red green animate__animated animate__flash');
                                    prompt.text('System Locked!')
                                    notif.text('Press [B] to bypass the system');
                                    for (var x = 1; x < 5; x++) {
                                        $('#pin' + x).text(''); 
                                    };
                                    
                                }, 3000);
                                gen=false;
                                fail.show();
                                wrap.hide();
                            };
                        

                            var failing = setInterval(ff, 1000);
                            
                            
                        }else if(tries>0 && user_combo !== combo){
                            
                            user_combo ="";
                            combos=0;
                            update();
                            setTimeout(function () {
                                for (var x = 1; x < 5; x++) {
                                    $('#pin' + x).removeClass('sred animate__animated animate__flash').addClass('sred animate__animated animate__flash'); 
                                };
                            }, 50);
                            setTimeout(function () {
                                for (var x = 1; x < 5; x++) {
                                    $('#pin' + x).removeClass('sred animate__animated animate__flash').addClass('animate__animated animate__flash');
                                };
                            }, 150);
                        
                            
                            prompt.text(tries + " attempt(s) remaining").removeClass('animate__animated animate__flash').addClass('animate__animated animate__flash');
                            notif.text("Declined").removeClass('sred animate__animated animate__flash').addClass('sred animate__animated animate__flash');
                           
                        };
                        
                    };
                   
                    
                    
                };
            };
        });
    };
    // Was the game generated?
    // User Starts Game Pressing Y
    var gen =false;
    $(document).keydown(function (y) {
        if (y.keyCode === 89/* Y key */ && gen === false/* game generated */) {
            prompt.text("Enter your PIN");
            notif.text('');
            attempt();
            gen = true;
        } else if (y.keyCode === 66 && gen === false && combo !=="") {
            prompt.text("System Bypassed! Enter Your New PIN").toggleClass('sgreen');
            reset();
            // gen = true;
            // notif.text('');
        };

    });

wrap.hide();

pass.hide();
// hs.show();
// os.hide();
var secret = Math.floor(Math.random()*100000)+1000;
$("#hash").text(secret);
    // Function to generate random numbers:

});