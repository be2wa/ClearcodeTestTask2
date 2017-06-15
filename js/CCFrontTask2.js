const damage = spellString => {
    
    const spellPoints = {
        'fe': 1,
        'je': 2,
        'jee': 3,
        'ain': 3,
        'dai': 5,
        'ne': 2,
        'ai': 2
    };
    let temp = spellString.toLowerCase(),
        validSpell = '',
        validSpellNoPointedLetters,
        pointedLettersCount = 0,
        points = 0;
    
    if (typeof spellString != 'string') {
        return points;
    }
    
    if (temp.indexOf('fe') == -1 || temp.indexOf('fe') != temp.lastIndexOf('fe')) {
        return points;
    } else {
        let startFe = temp.substr(temp.indexOf('fe'));
        pointedLettersCount += 2;
        points += spellPoints.fe; // 1
        if (startFe.indexOf('ai')) {
            validSpell = startFe.substr(0, startFe.lastIndexOf('ai') + 2);
            validSpellNoPointedLetters = validSpell.substr(2);
        }
    }
    
//    console.log(validSpell);
//    console.log(validSpellNoPointedLetters);
    
    if (validSpellNoPointedLetters.indexOf('dai') != -1) {
        const daiCount = validSpellNoPointedLetters.match(/dai/g).length;
        for (let i = 0; i < daiCount; i++) {
            pointedLettersCount += 3;
            points += spellPoints.dai; // 5
            validSpellNoPointedLetters = validSpellNoPointedLetters.split('dai').join('');
        }
    }
    
//    console.log(validSpellNoPointedLetters);
    
    if (validSpellNoPointedLetters.indexOf('aine') != -1) {
        const aineCount = validSpellNoPointedLetters.match(/aine/g).length;
        for (let i = 0; i < aineCount; i++) {
            pointedLettersCount += 4;
            points += spellPoints.ai; // 2
            points += spellPoints.ne; // 2
            validSpellNoPointedLetters = validSpellNoPointedLetters.split('aine').join('');
        }
    }
    
//    console.log(validSpellNoPointedLetters);
    
    if (validSpellNoPointedLetters.indexOf('ain') != -1) {
        const ainCount = validSpellNoPointedLetters.match(/ain/g).length;
        for (let i = 0; i < ainCount; i++) {
            pointedLettersCount += 3;
            points += spellPoints.ain; // 3
            validSpellNoPointedLetters = validSpellNoPointedLetters.split('ain').join('');
        }
    }
    
//    console.log(validSpellNoPointedLetters);
    
    if (validSpellNoPointedLetters.indexOf('ai') != -1) {
        const aiCount = validSpellNoPointedLetters.match(/ai/g).length;
        for (let i = 0; i < aiCount; i++) {
            pointedLettersCount += 2;
            points += spellPoints.ai; // 2
            validSpellNoPointedLetters = validSpellNoPointedLetters.split('ai').join('');
        }
    }
    
//    console.log(validSpellNoPointedLetters);
    
    if (validSpellNoPointedLetters.indexOf('ne') != -1) {
        const neCount = validSpellNoPointedLetters.match(/ne/g).length;
        for (let i = 0; i < neCount; i++) {
            pointedLettersCount += 2;
            points += spellPoints.ne; // 2
            validSpellNoPointedLetters = validSpellNoPointedLetters.split('ne').join('');
        }
    }
    
//    console.log(validSpellNoPointedLetters);
    
    if (validSpellNoPointedLetters.indexOf('jee') != -1) {
        const jeeCount = validSpellNoPointedLetters.match(/jee/g).length;
        for (let i = 0; i < jeeCount; i++) {
            pointedLettersCount += 3;
            points += spellPoints.jee; // 3
            validSpellNoPointedLetters = validSpellNoPointedLetters.split('jee').join('');
        }
    }
    
//    console.log(validSpellNoPointedLetters);
    
    if (validSpellNoPointedLetters.indexOf('je') != -1) {
        const jeCount = validSpellNoPointedLetters.match(/je/g).length;
        for (let i = 0; i < jeCount; i++) {
            pointedLettersCount += 2;
            points += spellPoints.je; // 2
            validSpellNoPointedLetters = validSpellNoPointedLetters.split('je').join('');
        }
    }
    
//    console.log(validSpellNoPointedLetters);
    
    points -= validSpell.length - pointedLettersCount;
    points = points < 0 ? 0 : points;
//    console.log(points);
    return points;
}

export {damage}