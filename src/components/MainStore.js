import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
    // value of the store on initialisation
    initialState: {
        date: "vecchia_data",
        prod_id: "prodId",
        isOpen:false
    },
    // actions that trigger store mutation
    actions: {
        increment:
            () =>
                ({ setState, getState }) => {
                    // mutate state synchronously
                    setState({
                        count: getState().count + 1,
                    });
                },
        update_date:
            (dateNew) =>
                ({ setState, getState }) => {
                    // mutate state synchronously
                    setState({
                        date: dateNew,
                    });
                },
        update_prod:
            (id) =>
                ({ setState, getState }) => {
                    // mutate state synchronously
                    setState({
                        prod_id: id,
                    });
                },
        update_is_open:
            (isOpenFlag,id) =>
                ({ setState, getState }) => {
                    // mutate state synchronously
                    let newState = isOpenFlag? {
                        isOpen: isOpenFlag,
                        prod_id: id,
                    } : {
                        isOpen: isOpenFlag,
                    }
                    setState(newState);
                },
    },
    // optional, mostly used for easy debugging
    name: 'counter',
});

export const useMainStore = createHook(Store);