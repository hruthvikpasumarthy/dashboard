async function add(items){
    $(document).ready(function () {
var table = '<div class="grid-container">';
for (var i = 0; i < items.length; i++) {
table += '<div class="grid-item"><center> <p style="color:black;font-size:20px;padding-left: 5px;"><strong>';
var it = items[i];
table +=  items[i].name + '</strong></p></center>';
var x=items[i].pipelines;
for(var j=0 ; j<x.length;j++)
{
if(x[j].status=="Succeeded")
{
  table +='<div style="overflow: hidden;background-color:lightgreen;border: 2px solid white;font-size :13px;">'
  table += '<p style="margin : 0;padding-left: 5px;float: left;"><strong>' + x[j].stages+ ' </strong> </p>';
  table += '<p style="margin : 0;padding-left: 5px;float: right;"><strong>' + x[j].time+ '</strong> </p>';
  table +='</div>'
}
if(x[j].status=="Failed")
{
  table +='<div style="overflow: hidden;background-color:orangered;border: 2px solid white;font-size :13px;">'
  table += '<p style="margin : 0;padding-left: 5px;float: left;"><strong>' + x[j].stages+ ' </strong> </p>';
  table += '<p style="margin : 0;padding-left: 5px;float: right;"><strong>' + x[j].time+ '</strong> </p>';
  table +='</div>'
}
if(x[j].status=="Didn't Execute")
{
  table +='<div style="overflow: hidden;background-color:grey;border: 2px solid white;font-size :13px;">'
  table += '<p style="margin : 0;padding-left: 5px;float: left;"><strong>' + x[j].stages+ ' </strong> </p>';
  table += '<p style="margin : 0;padding-left: 5px;float: right;"><strong>' + x[j].time+ '</strong> </p>';
  table +='</div>'
}
if(x[j].status=="Abandoned")
{
  table +='<div style="overflow: hidden;background-color:lightsalmon;border: 2px solid white;font-size :13px;">'
  table += '<p style="margin : 0;padding-left: 5px;float: left;"><strong>' + x[j].stages+ ' </strong> </p>';
  table += '<p style="margin : 0;padding-left: 5px;float: right;"><strong>' + x[j].time+ '</strong> </p>';
  table +='</div>'
}
if(x[j].status=="InProgress")
{
  table +='<div style="overflow: hidden;background-color:rgb(72, 115, 141);border: 2px solid white;font-size :13px;">'
  table += '<p style="margin : 0;padding-left: 5px;float: left;"><strong>' + x[j].stages+ ' </strong> </p>';
  table += '<p style="margin : 0;padding-left: 5px;float: right;"><strong>' + x[j].time+ '</strong> </p>';
  table +='</div>'
}
}
table +='<br> </div>'
}

table += '</div>';

$('div').html(table);

});

}
    // define the callAPI function that takes a first name and last name as parameters
    async function callAPI(asset,service,type){
        // instantiate a headers object
        var myHeaders = new Headers();
        // add content type header to object
        id1 = process.env.id;
        alert(id1);
        console.log(id1);
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        var raw = JSON.stringify({"asset":asset});
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        if(document.getElementById('asset').value=="" && document.getElementById('service').value=="" && document.getElementById('type').value=="All" ){
            let response = await fetch("https://udv79465qa.execute-api.us-east-1.amazonaws.com/dev/pipeline?type="+"All");
            let result= await response.text();
            let items= await JSON.parse(result).body;
            let item=JSON.parse(items);
            if (item['msg']=="No pipelines found for these filters")
            {
                var a='<p style="color:white;font-size:30px">'+"No pipelines found for these filters"+'</p>'
                $('div').html(a);
            }
            else{
            
           add(item)
            }	
           
            //alert(res);
            //console.log(res);
    
        }
        else if (document.getElementById('asset').value!="" && document.getElementById('service').value=="" && document.getElementById('type').value=="All"){
            let response = await fetch("https://udv79465qa.execute-api.us-east-1.amazonaws.com/dev/pipeline?asset="+asset+"&type="+type);
            let result= await response.text();
            let items= await JSON.parse(result).body;
            let item=JSON.parse(items);
            if (item['msg']=="No pipelines found for these filters")
            {
                var a='<p style="color:white;font-size:30px">'+"No pipelines found for these filters"+'</p>'
                $('div').html(a);
            }
            else{
           add(item)
            }	
        }
        else if (document.getElementById('asset').value=="" && document.getElementById('service').value!="" && document.getElementById('type').value=="All"){
            let response = await fetch("https://udv79465qa.execute-api.us-east-1.amazonaws.com/dev/pipeline?service="+service+"&type="+type);
            let result= await response.text();
            let items= await JSON.parse(result).body;
            let item=JSON.parse(items);
            if (item['msg']=="No pipelines found for these filters")
            {
                var a='<p style="color:white;font-size:30px">'+"No pipelines found for these filters"+'</p>'
                $('div').html(a);
            }
            else{
            
           add(item)
            }	
        }
        else if (document.getElementById('asset').value=="" && document.getElementById('service').value=="" && document.getElementById('type').value!="All"){
            let response = await fetch("https://udv79465qa.execute-api.us-east-1.amazonaws.com/dev/pipeline?type="+type);
            let result= await response.text();
            let items= await JSON.parse(result).body;
            let item=JSON.parse(items);
            if (item['msg']=="No pipelines found for these filters")
            {
                var a='<p style="color:white;font-size:30px">'+"No pipelines found for these filters"+'</p>'
                $('div').html(a);
            }
            else{
            
           add(item)
            }	
        }
        else if (document.getElementById('asset').value!="" && document.getElementById('service').value!="" && document.getElementById('type').value=="All"){
            let response = await fetch("https://udv79465qa.execute-api.us-east-1.amazonaws.com/dev/pipeline?asset="+asset+"&service="+service+"&type="+type);
            let result= await response.text();
            let items= await JSON.parse(result).body;
            let item=JSON.parse(items);
            if (item['msg']=="No pipelines found for these filters")
            {
                var a='<p style="color:white;font-size:30px">'+"No pipelines found for these filters"+'</p>'
                $('div').html(a);
            }
            else{
            
           add(item)
            }	
        }
        else if (document.getElementById('asset').value!="" && document.getElementById('service').value=="" && document.getElementById('type').value!="All"){
            let response = await fetch("https://udv79465qa.execute-api.us-east-1.amazonaws.com/dev/pipeline?asset="+asset+"&type="+type);
            let result= await response.text();
            let items= await JSON.parse(result).body;
            let item=JSON.parse(items);
            if (item['msg']=="No pipelines found for these filters")
            {
                var a='<p style="color:white;font-size:30px">'+"No pipelines found for these filters"+'</p>'
                $('div').html(a);
            }
            else{
            
           add(item)
            }	
        }
        else if (document.getElementById('asset').value=="" && document.getElementById('service').value!="" && document.getElementById('type').value!="All"){
            let response = await fetch("https://udv79465qa.execute-api.us-east-1.amazonaws.com/dev/pipeline?service="+service+"&type="+type);
            let result= await response.text();
            let items= await JSON.parse(result).body;
            let item=JSON.parse(items);
            if (item['msg']=="No pipelines found for these filters")
            {
                var a='<p style="color:white;font-size:30px">'+"No pipelines found for these filters"+'</p>'
                $('div').html(a);
            }
            else{
            
           add(item)
            }	
        }
        else{
            let response = await fetch("https://udv79465qa.execute-api.us-east-1.amazonaws.com/dev/pipeline?asset="+asset+"&service="+service+"&type="+type);
            let result= await response.text();
            let items= await JSON.parse(result).body;
            let item=JSON.parse(items);
            if (item['msg']=="No pipelines found for these filters")
            {
                var a='<p style="color:white;font-size:30px">'+"No pipelines found for these filters"+'</p>'
                $('div').html(a);
            }
            else{
            
           add(item)
            }		
        }
        
        
    }
