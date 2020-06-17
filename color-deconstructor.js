
function comefrom(cl){
  const scdcl = ['orange', 'purple', 'green'];
  if(cl === scdcl[0]){return 'Orange is made by combining red and yellow!';}
  if(cl === scdcl[1]){return 'Purple is made by combining red and blue!';}
  if(cl === scdcl[2]){return 'Green is made by combining blue and yellow!';}
  if(scdcl.indexOf(cl) === -1){return "Sorry, that's not a secondary color!";}
}
module.exports = comefrom;