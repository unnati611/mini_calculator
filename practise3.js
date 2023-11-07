function add(){
    let u = document.getElementById("first").value
     u = Number.parseInt(u);
    let v = document.getElementById("second").value
   v = Number.parseInt(v);
   
    let c = u + v ;
    document.getElementById("ans").innerHTML = "your answer is "+ c
   
   
    }
    function minus(){
        let u = document.getElementById("first").value
         u = Number.parseInt(u);
        let v = document.getElementById("second").value
       v = Number.parseInt(v);
       
        let c = u - v ;
        document.getElementById("ans").innerHTML = "your answer is "+ c
       
       
        }
        function multiple(){
            let u = document.getElementById("first").value
             u = Number.parseInt(u);
            let v = document.getElementById("second").value
           v = Number.parseInt(v);
           
            let c = u * v ;
            document.getElementById("ans").innerHTML = "your answer is "+ c
           
           
            }