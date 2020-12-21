let url = 'https://api.atlasacademy.io/export/NA/nice_servant.json';

var i;

fetch (url)
    .then(res => res.json())
    .then(data => {
        ServantList = data;
        console.log(ServantList);   
        
    });

setTimeout(getServant,500);



function getServant(){
    var servantName = document.getElementById('Sname').value;
    
    for (i = 0; i<ServantList.length;i++)
    {
        if (servantName == ServantList[i]['name'])
        {
            console.log(ServantList[i]['className']);
        }
        
    }
}