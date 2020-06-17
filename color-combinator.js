
function newcolor(cl1, cl2){
  const pmrcl = ['red', 'yellow', 'blue'];
  const combo = String([pmrcl.indexOf(cl1), pmrcl.indexOf(cl2)].sort());
  if(combo === '0,1'){return 'When you combine '+ cl1 +' and '+cl2+', you get orange!'}
  if(combo === '0,2'){return 'When you combine '+ cl1 +' and '+cl2+ ', you get purple!'}
  if(combo === '1,2'){return 'When you combine '+ cl1 +' and '+cl2+', you get green!'}
  if(combo[0] === '-'){return 'Sorry, one of those colors is not a primary color!';}
  
}
module.exports = newcolor;