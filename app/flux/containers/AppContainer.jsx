import React from 'react';
import Utils from "flux/utils";
import AppStore from '../stores/AppStore.jsx';
import Main from "../../Main.jsx";
class AppContainer extends React.Component{
    static getStores(){
        return [AppStore];
    }
    static calculateState(prevState, props){
        return{
            
        };
    }

    render(){
        return(<Main />);
    }
}
export default Utils.Container.create(AppContainer, {withProps: true});