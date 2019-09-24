document.getElementById('madLib').addEventListener('click', wordChange)

function wordChange(){
    let noun=document.getElementById('noun').value
    let pNoun=document.getElementById('pNoun').value
    let noun2=document.getElementById('noun2').value
    let adj=document.getElementById('adj').value
    let ving=document.getElementById('ving').value
    let verb=document.getElementById('verb').value
    
    document.getElementById('nounReplacement').innerHTML=noun;
    document.getElementById('pNounReplacement').innerHTML=pNoun;
    document.getElementById('nounReplacement2').innerHTML=noun2;
    document.getElementById('adjReplacement').innerHTML=adj;
    document.getElementById('vingReplacement').innerHTML=ving;
    document.getElementById('verbReplacement').innerHTML=verb;
}