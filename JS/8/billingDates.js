const billingDate = (issueDate, termDays, paidAt) => {
        const rawDueDate = new Date(issueDate);
        rawDueDate.setUTCDate(rawDueDate.getUTCDate() + termDays);
        const dueDate = rawDueDate.toISOString().slice(0, 10);

        const rawPaidAt = new Date(paidAt);
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hourCycle: "h23",
        };

        const toUtc = new Intl.DateTimeFormat("pt-BR", {
            ...options,
            timeZone: "UTC",
        });

        const toSP = new Intl.DateTimeFormat("pt-BR", {
            ...options,
            timeZone: "America/Sao_Paulo",
        });

    return {
        dueDate: dueDate,
        paidAtUtc: toUtc.format(rawPaidAt),
        paidAtSaoPaulo: toSP.format(rawPaidAt),
    }   
}

export default billingDate;