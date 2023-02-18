 
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
    votes: JSON.parse(catVotes)
},
    {
    partyName : "dog",
    votes: JSON.parse(dogVotes)
},
    {
    partyName : "horse",
    votes: JSON.parse(horseVotes)
    },

    {
    partyName : "lion",
    votes: JSON.parse(lionVotes)
},
]

export default parties;
