let url = 'https://api.atlasacademy.io/export/NA/nice_servant.json';



fetch (url)
    .then(res => res.json())
    .then(data => {
        ServantList = data;
        console.log(ServantList);   
        
    });


document.getElementById("btn").addEventListener("click", function getServant(){
    let searchName = document.getElementById('name').value;

    for (let i = 0;i<ServantList.length;i++)
    {
        fetch (url)
        .then(res => res.json())
        .then(data = ServantList[i]['name'])
        .then(sGender =ServantList[i]['gender'] )
        .then(sClass =ServantList[i]['className'])
        .then(sRarity =ServantList[i]['rarity'] )
        .then(sNP =ServantList[i]['noblePhantasms'][0]['name'] )
        .then(sAtkBase =ServantList[i]['atkBase'] )
        .then(sAtkMax =ServantList[i]['atkMax'] )
        .then(sHpBase =ServantList[i]['hpBase'] )
        .then(sHPMax =ServantList[i]['hpMax'] )
        setTimeout(checking(data,searchName),50);
        if (data == searchName)
        {
            break;
        }
    }

    function checking(data,searchName)
    {
        if (data == searchName) 
        {
            var sName = data;
            
            console.log('Servant: '+ sName +
            '\n'+ 'Gender: '+ sGender + 
            '\n'+ 'Class: '+ sClass + 
            '\n'+ 'Rarity: '+ sRarity + 
            '\n'+ 'Noble Phantasm: '+ sNP + 
            '\n'+ 'Base Atk: '+ sAtkBase + 
            '\n'+ 'Max Atk: '+ sAtkMax + 
            '\n'+ 'Base HP: '+ sHpBase + 
            '\n'+ 'Max HP: '+ sHPMax );
            
        }
        
        else 
        {
            console.log('Failure name not found');
        }
        
    }
});


