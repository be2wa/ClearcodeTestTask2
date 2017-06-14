const damage = spellString => {
    
    let temp = spellString.toLowerCase();
    const spells = {
        'fe': 1,
        'je': 2,
        'jee': 3,
        'ain': 3,
        'dai': 5,
        'ne': 2,
        'ai': 2
    };
    let validSpell = '';
    let points = 0;
    
    if (typeof spellString != 'string') {
        return points;
    }
    
    if (temp.indexOf('fe') == -1 || temp.indexOf('fe') != temp.lastIndexOf('fe')) {
        return points;
    } else if (temp.match(/fe/g).length == 1) {
        let startFe = temp.substr(temp.indexOf('fe'));
        if (startFe.indexOf('ai') >= 0) {
            validSpell = startFe.substr(0, startFe.lastIndexOf('ai') + 2);
        }
    }
    
    console.log(validSpell);
    console.log(spellString);
    return points;
}

export {damage}