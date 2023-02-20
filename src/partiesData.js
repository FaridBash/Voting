 
 let catVotes=localStorage.getItem('cat');

//  if(catVotes===undefined || catVotes===null || catVotes==='' || catVotes===NaN){
//     catVotes=0;
//  }else{
//     catVotes=parseInt(catVotes);
//  }
 
 let dogVotes=localStorage.getItem('dog');


 let horseVotes=localStorage.getItem('horse');


 let lionVotes=localStorage.getItem('lion');


 
 
 const parties=[
    {
    partyName : "cat",
    votes: JSON.parse(localStorage.getItem("Cat"))
},
    {
    partyName : "dog",
    votes: JSON.parse(localStorage.getItem("Dog"))
},
    {
    partyName : "horse",
    votes: JSON.parse(localStorage.getItem("Horse"))
    },

    {
    partyName : "lion",
    votes: JSON.parse(localStorage.getItem("Lion"))
},
]

export default parties;
