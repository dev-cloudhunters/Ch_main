import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    date: "",
    prod_id: ""
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
  },
  // optional, mostly used for easy debugging
  name: 'counter',
});

const useMainStore = createHook(Store);