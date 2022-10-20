const booleans =(value)=>{

    let numbers =true;
    let text = false;

    if(typeof value=='number')
    {
        return numbers;
    }
    else{
        return text;
    }
}

module.exports= booleans;