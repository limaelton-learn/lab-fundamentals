const normalizeRegistration = (input) => {
    const rawName = input?.name;
    let normalizedName = "Unknown";

    if(
        rawName !== undefined
        && rawName !== null 
        && typeof(rawName) === 'string' 
        && rawName.trim() !== ''
    ) {
        normalizedName = rawName.trim();
    }

    const rawAge = input?.age;
    let normalizedAge = null;

    if(rawAge !== null && rawAge !== undefined && rawAge !== "") {
        const parsedAge = Number(rawAge);
        if(Number.isSafeInteger(parsedAge) && parsedAge >= 0) {
            normalizedAge = parsedAge;
        }
    }

    const isSubscribed = typeof input?.subscribed === 'boolean' ? input.subscribed : false;

    const normalizedRegister = {
        name: normalizedName,
        age: normalizedAge,
        subscribed: isSubscribed,
    }
    return normalizedRegister;
}   

export default normalizeRegistration;