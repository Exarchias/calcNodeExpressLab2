const express = require('express');
const app= express();

const port=process.env.PORT || 3000;

app.get('/',(_,res)=>{
    res.send("Wrong page but the thing is working");
})

app.get('/calc',function(req,res){
    
    var operation=req.query.operation;
    var numberone=req.query.numberone;
    var numbertwo=req.query.numbertwo;
    var answer;

    if(operation=="add"){
      answer=(+numberone + +numbertwo)
        res.send("Answer: "+ answer)
    }else if(operation=="sub"){
      answer=numberone-numbertwo;
      res.send("Answer: "+ answer)
    } else if(operation=="mul"){
      answer=numberone*numbertwo;
      res.send("Answer: "+ answer)
    }else if(operation=="div"){
      answer=numberone/numbertwo;
      res.send("Answer: "+ answer)
    } else
       res.send("Wrong page but the thing is working") 

})

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
});

