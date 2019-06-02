//actions :functions ->returns dispatcher object

// dispatcher 
const UPDATE_CURRENCY = 'UPDATE_CURRENCY';
const updateCurrency = (code) => ({
    type: UPDATE_CURRENCY,
    code
})

export { UPDATE_CURRENCY, updateCurrency }