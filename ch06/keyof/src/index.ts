const mmConversionTable = {
    mm: 1,
    m: 1e3,
    km: 1e6,
};

function convertUnit(value: number, unit: keyof typeof mmConversionTable): typeof mmConversionTable {
    const mmValue = value * mmConversionTable[unit];
    return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6,
    };
}