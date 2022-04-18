
function calc(opt)
        {   
            let  a = document.getElementById('num').value;
            let  b = document.getElementById('numb').value;
            let c;
            { document.getElementsByClassName('output')[0].innerText = 'Please enter number'}
            if (opt=='add')
            {
                    c = `Output is ${parseInt(a)+parseInt(b)}`
            }
            else if(opt == 'sub')
            {c = `Output is ${parseInt(a)-parseInt(b)}` }
            else if(opt == 'mul')
            { c = `Output is ${parseInt(a)*parseInt(b)}`}
            else if(opt == 'div')
            {  c = `Output is ${parseInt(a)/parseInt(b)}`}
            else if(opt =='mod')
            {c = `Output is ${parseInt(a)%parseInt(b)}`}
            document.getElementsByClassName('output')[0].innerText = c
        }