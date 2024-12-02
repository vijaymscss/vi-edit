import { createContext, useReducer, useContext } from "react";

// Create the context
const Context_ = createContext();

// Define the initial state
const initialState = {
  count: 0,
};

// Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

// Create a provider component
export const Providers = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context_.Provider value={{ state, dispatch }}>{children}</Context_.Provider>;
};

// Custom hook to use the context
export const useCustomContext = () => {
  return useContext(Context_);
};
