//include database
const vocab = require('./vocab.json')

function generateRubbish(target){
   // random vocab
   let randomindex = Math.floor(Math.random()*vocab.task[target].length)
   let randomTask = vocab.task[target][randomindex]
   let randomindex2 = Math.floor(Math.random()*vocab.phrase.length)
   let randomPhrase = vocab.phrase[randomindex2]
   //combination sentence
   let rubbish = `身為一個${vocab.chinese[target]}，${randomTask}，${randomPhrase}吧!`
   
   //console.log(rubbish)
   return rubbish
}
module.exports = generateRubbish
 //const career = 'engineer'
 //generateRubbish(career) 