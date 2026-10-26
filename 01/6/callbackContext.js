const accountPresenter = {
  label: "Conta A",

  format(amountCents) {
    return `${this.label}: ${amountCents}`;
  },

  formatMany(amounts) {
    return amounts.map((amount) =>  {
      return this.format(amount);
    });
  },
};


const amounts = [100, -20];
const amounts2 = [];

// const descriptions = amounts.map(accountPresenter.format); //Typeerror because this is undefined
const descriptions = amounts.map(accountPresenter.format.bind(accountPresenter)); //corrigido, agora recebe permanentemente o objeto correto como receptor(this)
const descriptions2 = amounts2.map(accountPresenter.format.bind(accountPresenter)); // 4. appenas paçamos a referencia de format e não chamando a função propriamente dita. Passamos como callback e depois ao executar o map, aí sim a função é chamadoa

console.log(descriptions);
console.log(descriptions2);

console.log(accountPresenter.formatMany([100, -20]));

const formatRef = accountPresenter.format;

const accountB = {
  label: "Conta B",
}
const accountC = {
  label: "Conta C",
}



console.log(formatRef.call(accountB, 100));
console.log(formatRef.call(accountC, -20));

const resultadoBind = accountPresenter.format.bind(accountB);
const resultadoCall = formatRef.call(accountB, 100);

console.log("typeof bind:", typeof resultadoBind); // "function"
console.log("typeof call:", typeof resultadoCall); // "string"