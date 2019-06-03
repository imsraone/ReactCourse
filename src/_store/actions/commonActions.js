const SET_LOADING = 'SET_LOADING';

const setLoading = (status) => ({
    type: SET_LOADING,
    status
})

export { setLoading, SET_LOADING };