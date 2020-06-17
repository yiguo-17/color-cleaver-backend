const pmrcl = ['red', 'yellow', 'blue'];

function newcolor(cl1, cl2){
  let combo = [cl1.indexOf(pmrcl), cl2.indexOf(pmrcl)].sort();
  if(combo === [0,1]){return 'When you combine '+ cl1 +' and '+cl2+', you get orange!'}
  if(combo === [0,2]){return 'When you combine '+ cl1 +' and '+cl2+ ', you get purple'}
  if(combo === [1,2]{return 'When you combine '+ cl1 +' and '+cl2+', you get green!'}
  if(combo[0] === -1){return 'Sorry, one of those colors is not a primary color!';}
  
}
module.exports = colorCombinator;