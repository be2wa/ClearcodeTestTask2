exports.damage = spellString => {
    
    if (typeof spellString !== 'string') {
        return 0;
    }
    
    const spellPoints = {
        'fe': 1,
        'je': 2,
        'jee': 3,
        'ain': 3,
        'dai': 5,
        'ne': 2,
        'ai': 2
    };
    
    let validSpell = '',
        validSpellChunked = '',
        points = 0;
    
    const indexOfFirstFe = spellString.indexOf('fe');
    
    if (indexOfFirstFe === -1 ||
        indexOfFirstFe !== spellString.lastIndexOf('fe') ||
        spellString.lastIndexOf('ai') < indexOfFirstFe) {
        return 0;
    }
    
    const startFe = spellString.substr(indexOfFirstFe);
    points += spellPoints.fe;
    
    if (startFe.indexOf('ai')) {
        validSpell = startFe.substr(0, startFe.lastIndexOf('ai') + 2);
        validSpellChunked = validSpell.substr(2);
    }
    
    if (validSpellChunked.indexOf('dai') !== -1) {
        const daiCount = validSpellChunked.match(/dai/g).length;
        for (let i = 0; i < daiCount; i++) {
            points += spellPoints.dai;
            validSpellChunked = validSpellChunked.split('dai').join('');
        }
    }
    
    if (validSpellChunked.indexOf('aine') !== -1) {
        const aineCount = validSpellChunked.match(/aine/g).length;
        for (let i = 0; i < aineCount; i++) {
            points += spellPoints.ai;
            points += spellPoints.ne;
            validSpellChunked = validSpellChunked.split('aine').join('');
        }
    }
    
    if (validSpellChunked.indexOf('ain') !== -1) {
        const ainCount = validSpellChunked.match(/ain/g).length;
        for (let i = 0; i < ainCount; i++) {
            points += spellPoints.ain;
            validSpellChunked = validSpellChunked.split('ain').join('');
        }
    }
    
    if (validSpellChunked.indexOf('ai') !== -1) {
        const aiCount = validSpellChunked.match(/ai/g).length;
        for (let i = 0; i < aiCount; i++) {
            points += spellPoints.ai;
            validSpellChunked = validSpellChunked.split('ai').join('');
        }
    }
    
    if (validSpellChunked.indexOf('ne') !== -1) {
        const neCount = validSpellChunked.match(/ne/g).length;
        for (let i = 0; i < neCount; i++) {
            points += spellPoints.ne;
            validSpellChunked = validSpellChunked.split('ne').join('');
        }
    }
    
    if (validSpellChunked.indexOf('jee') !== -1) {
        const jeeCount = validSpellChunked.match(/jee/g).length;
        for (let i = 0; i < jeeCount; i++) {
            points += spellPoints.jee;
            validSpellChunked = validSpellChunked.split('jee').join('');
        }
    }
    
    if (validSpellChunked.indexOf('je') !== -1) {
        const jeCount = validSpellChunked.match(/je/g).length;
        for (let i = 0; i < jeCount; i++) {
            points += spellPoints.je;
            validSpellChunked = validSpellChunked.split('je').join('');
        }
    }
        
    points -= validSpellChunked.length;
    points = points < 0 ? 0 : points;
    
    return points;
}