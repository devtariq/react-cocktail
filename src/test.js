import React, {useState, useContext, useEffect, useCallback} from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const dd = React.createContext();

const AppProvider = ({children}) => {
	return ( <AppContext.Provider value="Hi there">{children}</AppContext.Provider>);
}

const useGlobalContext = () => {
	return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext};