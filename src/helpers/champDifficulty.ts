export function getDifficulty(numDifficulty){
     let difficulty = parseInt(numDifficulty) < 3 ? 'LOW' : 
     parseInt(numDifficulty) < 10 ? 'MODERATE' : 'HIGH';

     return difficulty;
}
