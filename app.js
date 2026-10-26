import pc from 'picocolors';
import { groupByCategory } from './001/grouper.js'
import { readMode, chooseLabel, updateSettings } from './01/3/scopeLab.js';
import execute from './01/1/nativeMethods.js';

const exercise = () => {
    const itens = [
        { category: 'frutas', quantity: 5 },
        { category: 'legumes', quantity: 2 },
        { category: 'frutas', quantity: 3 }
    ];

    const groupedItens = groupByCategory(itens);
    console.log(pc.green("Grouped itens: "));
    console.log(pc.green(JSON.stringify(groupedItens, null, 2)));
}

// execute();

const a = updateSettings();
console.log(a);
