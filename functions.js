//1. Functions without input and without parameters
    function add(){
        var a = 10;
        var b = 20;
        console.log(a+b);
    }
    add();

//2. Functions with Input and without parameters
    function sub(x,y){
        console.log(x-y);
    }
sub(200,100);
//3. Functions without Input and with parameters
    function mul(){
        var p = 300;
        var q = 100;
        return p * q;
    }
    let result = mul();
    console.log(result);

//4. Functions with Input and with parameters
        function div(a,b) {
            return a/b;
        }
        console.log(div(200,10));