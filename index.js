let text ="Hello Aisha this side ツ";
let rootEle = document.getElementById("root");
// let speedoMeterEle = document.getElementById("speedoMeter");
let inputEle = document.getElementById("input");

        let speed = 1;
        let i=0;
        function typeWriter(check = true)
        {
            if(check === true)
            {
                if( i<text.length )
                {
                    rootEle.innerHTML += text.charAt(i);i++;
                    setTimeout(typeWriter, 100);
                }
            }
            if(inputEle.value === 10)
            inputEle.value=1;

        }
function typeWriter2(i)
{console.log(i,(100 - (10 * inputEle.value)));
    if(i>=text.length)
    return;
    else if(i<text.length && i !== 0)
    {
        console.log("inside typeWriter2 if");
        // rootEle.innerHTML += text.charAt(i);
        rootEle.innerHTML = text.substring(0, i);
        
    }
    else{
        console.log("inside typeWriter2 else");
        rootEle.innerHTML = text.charAt(i);
    }
    i++;
    setTimeout(function() {
        typeWriter2(i);
    }, 100 - (10 * inputEle.value));
    if(inputEle.value === 10)
    inputEle.value=1;
    
}
        window.onload=()=>
        {  
            typeWriter(true);
        }

        inputEle.onchange=()=>{
            console.log("inside input change");
            typeWriter2(0);
        };      
