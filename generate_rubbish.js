function generateRubbish(target){
   //database
    const chinese = {
        engineer: '工程師',
        designer: '設計師',
        entrepreneur: '創業家'
    } 
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
    }
    const phrase = ['很簡單','很容易','很快','很正常']
   // random vocab
   let randomindex = Math.floor(Math.random()*task[target].length)
   let randomTask = task[target][randomindex]
   let randomindex2 = Math.floor(Math.random()*phrase.length)
   let randomPhrase = phrase[randomindex2]
   //combination sentence
   let rubbish = `身為一個${chinese[target]}，${randomTask}，${randomPhrase}吧!`
   //return rubbish 
   //console.log(rubbish)
   return rubbish
}
module.exports = generateRubbish
// const career = 'engineer'
// generateRubbish(career) 