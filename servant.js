let url = 'https://api.atlasacademy.io/export/NA/nice_servant.json';

var i;

fetch (url)
    .then(res => res.json())
    .then(data => {
        ServantList = data;
        console.log(ServantList);   
        
    });


document.getElementById("btn").addEventListener("click", function getServant(){
    let searchName = document.getElementById('Sname');

    for (i = 0;i<ServantList.length;i++)
    {
        fetch (url)
        .then(res => res.json())
        .then(data = ServantList[i]['name'])
        setTimeout(checking(data,searchName),50); 
    }

    function checking(data,searchName)
    {
        if (data == searchName)
        {
            console.log('Successful' + data);
        }
        else 
        {
            console.log('Failure name not found');
        }
    }
});


