//For the given JSON iterate over all for loops (for, for in, for of, forEach)
var ipl=[{
    "team_name": "CSK",
    "caption": "Dhoni",
    "tittles": 4,
  },
  {
    "team_name": "MI",
    "caption": "Rohit",
    "tittles": 5,
  },
  {
    "team_name": "KKR",
    "caption": "Gambhir",
    "tittles": 2,
  },
  {
    "team_name": "RCB",
    "caption": "Virat",
    "tittles": 0,
  },
  {
    "team_name": "SRH",
    "caption": "Warner",
    "tittles": 1,
  }
]

//for 
for(i=0; i<=ipl.length; i++){
  console.log(ipl[i].team_name);
 //csk
 //mi                                   
 //kkr
 //rcb
 //srh

/////////////////////////////////for in
for(var i in ipl){
  console.log(i);
}
//---------------------------for in out put
//0 
//1
//2
//3
//4 {
////////////////////////////////////for of 
for(var i of ipl){
 console.log(i);
}
//------------------------------for of output
//{team_name: 'csk', caption: 'dhoni', tittles: 4}
//{team_name: 'mi', caption: 'rohit', tittles: 5}
//{team_name: 'kkr', caption: 'gambhir', tittles: 2}
// {team_name: 'rcb', caption: 'virat', tittles: 0}
// {team_name: 'srh', caption: 'warner', tittles: 1}

///////////////////////////////////////for each
ipl.forEach((iteam)=>{
  console.log('Team name is :'+iteam.team_name);
  console.log('Team Caption :'+iteam.caption);
  console.log('How many tittles :'+iteam.tittles);
});

/*---------------------------------------------------output
                Team name is :CSK
                Team Caption :Dhoni
                How many tittles :4
                Team name is :MI
                Team Caption :Rohit
                How many tittles :5
                Team name is :KKR
                Team Caption :Gambhir
                How many tittles :2
                Team name is :RCB
                Team Caption :Virat
                How many tittles :0
                Team name is :SRH
                Team Caption :Warner
                How many tittles :1 
*/

