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
        damage = 0;
    
    if (typeof spellString != 'string') {
        return damage;
    }
    
    if (temp.indexOf('fe') == -1 || temp.indexOf('fe') != temp.lastIndexOf('fe')) {
        return damage;
    } else {
        let startFe = temp.substr(temp.indexOf('fe'));
        pointedLettersCount += 2;
        damage += spellPoints.fe; // 1
        if (startFe.indexOf('ai')) {
            validSpell = startFe.substr(0, startFe.lastIndexOf('ai') + 2);
            validSpellNoPointedLetters = validSpell.substr(2);
        }
    }
    
    if (validSpell.charAt(validSpell.length - 3) == 'd') {
        pointedLettersCount += 3;
        damage += spellPoints.dai; // 5
        validSpellNoPointedLetters = validSpellNoPointedLetters.substr(0, validSpellNoPointedLetters.length - 3);
    } else {
        pointedLettersCount += 2;
        damage += spellPoints.ai; // 2
        validSpellNoPointedLetters = validSpellNoPointedLetters.substr(0, validSpellNoPointedLetters.length - 2);
    }
    
    console.log(validSpell);
    console.log(validSpellNoPointedLetters);
    console.log(spellString);
    return damage;
}

export {damage}