function createReaders() {
    const readers = [];

    for (let index = 0; index < 3; index++) { //menor alteracao é trocar var por let
        readers.push(() => index);
    }

    return readers;
}

const readers = createReaders();

console.log(
        readers.map(
            read => read() //saida vai ser 3,3,3
));