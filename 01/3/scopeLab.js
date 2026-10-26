// Caso A
export function readMode() {
    console.log(mode); //undefined, já foi declarado com VAR, mas ainda ta sem valor atribuido
    let mode = "development"; // com let e também com const, terei um erro, pois o escopo não é definido, e teremos erro.
    // var mode = "development"; // aqui sim o valor é atribuido depois da linha anterior já ter rodado
    return mode;
}

// Caso B
export function chooseLabel() {
    let label = "standard";

    if (true) {
        // let label = "special"; //essa label pertence unicamente ao escopo desse IF e tem um endereço apenas para este escopo. Caso eu tire o let, então atribuiria ao escopo geral
        label = "special"; //ajuste feito para retornar esse valor, removendo o let.
    }

    return label;
}

// Caso C
export function updateSettings() {
    let settings = { active: false };
    settings.active = true; // certo, pois aqui apenas alteramos o valor de uma propriedade já existente
    // settings = { active: false }; //erro, pois estamos tentando atribuir uma nova referencia para settings que é const
    return settings;
}
