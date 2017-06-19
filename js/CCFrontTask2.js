//const damage = spellString => {
//    
//    const spellPoints = {
//        'fe': 1,
//        'je': 2,
//        'jee': 3,
//        'ain': 3,
//        'dai': 5,
//        'ne': 2,
//        'ai': 2
//    };
//    let temp = spellString.toLowerCase(),
//        validSpell = '',
//        validSpellNoPointedLetters = '',
//        pointedLettersCount = 0,
//        points = 0;
//    
//    if (typeof spellString != 'string') {
//        return points;
//    }
//    
//    if (temp.indexOf('fe') == -1 || temp.indexOf('fe') != temp.lastIndexOf('fe')) {
//        return points;
//    } else {
//        let startFe = temp.substr(temp.indexOf('fe'));
//        pointedLettersCount += 2;
//        points += spellPoints.fe; // 1
//        if (startFe.indexOf('ai')) {
//            validSpell = startFe.substr(0, startFe.lastIndexOf('ai') + 2);
//            validSpellNoPointedLetters = validSpell.substr(2);
//        }
//    }
//    
////    console.log(validSpell);
////    console.log(validSpellNoPointedLetters);
//    
//    if (validSpellNoPointedLetters.indexOf('dai') != -1) {
//        const daiCount = validSpellNoPointedLetters.match(/dai/g).length;
//        for (let i = 0; i < daiCount; i++) {
//            pointedLettersCount += 3;
//            points += spellPoints.dai; // 5
//            validSpellNoPointedLetters = validSpellNoPointedLetters.split('dai').join('');
//        }
//    }
//    
////    console.log(validSpellNoPointedLetters);
//    
//    if (validSpellNoPointedLetters.indexOf('aine') != -1) {
//        const aineCount = validSpellNoPointedLetters.match(/aine/g).length;
//        for (let i = 0; i < aineCount; i++) {
//            pointedLettersCount += 4;
//            points += spellPoints.ai; // 2
//            points += spellPoints.ne; // 2
//            validSpellNoPointedLetters = validSpellNoPointedLetters.split('aine').join('');
//        }
//    }
//    
////    console.log(validSpellNoPointedLetters);
//    
//    if (validSpellNoPointedLetters.indexOf('ain') != -1) {
//        const ainCount = validSpellNoPointedLetters.match(/ain/g).length;
//        for (let i = 0; i < ainCount; i++) {
//            pointedLettersCount += 3;
//            points += spellPoints.ain; // 3
//            validSpellNoPointedLetters = validSpellNoPointedLetters.split('ain').join('');
//        }
//    }
//    
////    console.log(validSpellNoPointedLetters);
//    
//    if (validSpellNoPointedLetters.indexOf('ai') != -1) {
//        const aiCount = validSpellNoPointedLetters.match(/ai/g).length;
//        for (let i = 0; i < aiCount; i++) {
//            pointedLettersCount += 2;
//            points += spellPoints.ai; // 2
//            validSpellNoPointedLetters = validSpellNoPointedLetters.split('ai').join('');
//        }
//    }
//    
////    console.log(validSpellNoPointedLetters);
//    
//    if (validSpellNoPointedLetters.indexOf('ne') != -1) {
//        const neCount = validSpellNoPointedLetters.match(/ne/g).length;
//        for (let i = 0; i < neCount; i++) {
//            pointedLettersCount += 2;
//            points += spellPoints.ne; // 2
//            validSpellNoPointedLetters = validSpellNoPointedLetters.split('ne').join('');
//        }
//    }
//    
////    console.log(validSpellNoPointedLetters);
//    
//    if (validSpellNoPointedLetters.indexOf('jee') != -1) {
//        const jeeCount = validSpellNoPointedLetters.match(/jee/g).length;
//        for (let i = 0; i < jeeCount; i++) {
//            pointedLettersCount += 3;
//            points += spellPoints.jee; // 3
//            validSpellNoPointedLetters = validSpellNoPointedLetters.split('jee').join('');
//        }
//    }
//    
////    console.log(validSpellNoPointedLetters);
//    
//    if (validSpellNoPointedLetters.indexOf('je') != -1) {
//        const jeCount = validSpellNoPointedLetters.match(/je/g).length;
//        for (let i = 0; i < jeCount; i++) {
//            pointedLettersCount += 2;
//            points += spellPoints.je; // 2
//            validSpellNoPointedLetters = validSpellNoPointedLetters.split('je').join('');
//        }
//    }
//    
////    console.log(validSpellNoPointedLetters);
//    
//    points -= validSpell.length - pointedLettersCount;
//    points = points < 0 ? 0 : points;
////    console.log(points);
//    return points;
//}
//
//export {damage}

function score(s) {
  if(s.length === 0) {
    return 0;
  }
  
  if (s.substring(0, 2) === 'fe') {
    return score(s.slice(2)) + 1;
  }
  
  if (s.substring(0, 3) === 'jee' || s.substring(0, 3) === 'ain') {
    const score1 = score(s.slice(3)) + 3;
    const score2 = score(s.slice(2)) + 2;
    return Math.max(score1, score2);
  }
  
  if (s.substring(0, 2) === 'je' || s.substring(0, 2) === 'ai' || s.substring(0, 2) === 'ne') {
    return score(s.slice(2)) + 2;
  }
  
  if (s.substring(0, 3) === 'dai') {
    return score(s.slice(3)) + 5;
  }

  // nothing matched, substract 1 and calculate rest of the score
  return score(s.slice(1)) - 1;
}

function damage(s) {
  const beginning = s.indexOf('fe');
  const end = s.lastIndexOf('ai');
  // if 'fe' doesn't occure
  //   or 'ai' end doesn't occure
  //   or 'ai' is before first fe
  // spell score is zero
  if (beginning === -1 || end === -1 || beginning > end) {
    return 0;
  }
  
  // spell can have only one index of 'fe'
  if (beginning !== s.lastIndexOf('fe')) {
    return 0;
  }
  
  const spell = s.slice(beginning, end + 2);
  const finalScore = score(spell);
  return (finalScore > 0) ? finalScore : 0;
}

console.log(damage('feeai'));
console.log(damage('feaineain'));
console.log(damage('jee'));
console.log(damage('fefefefefeaiaiaiaiai'));
console.log(damage('fdafafeajain'));
console.log(damage('fexxxxxxxxxxai'));
