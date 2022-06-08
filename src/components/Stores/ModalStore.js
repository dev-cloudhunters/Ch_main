import { createStore, createHook } from 'react-sweet-state';

const ModalStore = createStore({
    // value of the store on initialisation
    initialState: {
        isOpen: false,
    },
    // actions that trigger store mutation
    actions: {
        
        update_is_open:
            (isOpenBool) =>
                ({ setState, getState }) => {
                    // mutate state synchronously
                    setState({
                        isOpen: isOpenBool,
                    });
                },
        
    },
    // optional, mostly used for easy debugging
    name: 'modal',
});

export const useModal = createHook(ModalStore);