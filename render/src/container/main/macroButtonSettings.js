import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import MacroButtonSettings from "../../component/main/macroButtonSettings";
import { updateButton } from "../../action/";
import conditionRunner from "conditions-lang";

const mapStateToProps = ( state, ownProps ) => {
    const button = state.buttons[ownProps.connection.name][state.buttonSettings.selectedButtonIndex];
    const macroType = button.macroType;
    let macro = macroType ? getMacro( state.macros, macroType ) : null;
    if( macro )
    {
        macro = parseMacoConditions( macro, button.macro );
    }

    return {
        macro,
        macros: state.macros,
        macroList: getMacroList(state.macros, ownProps.t),
        macroType,
        t: ownProps.t,
        connectionName: ownProps.connection.name,
        selectedButtonIndex:state.buttonSettings.selectedButtonIndex
    }
};

function getMacro( macros, macroType )
{
    let macro = null;

    for( var macroKey in macros )
    {
        if( macros[macroKey].name === macroType )
        {
            macro = macros[macroKey];
            break;
        }
    }

    return macro;
}

function parseMacoConditions( macro, currentMacro )
{
    macro = Object.assign( {}, macro );
    macro.dataDefinition  = macro.dataDefinition.slice();

    for( var i=0; i < macro.dataDefinition.length; ++i )
    {
        const definition = Object.assign( {}, macro.dataDefinition[i] );

        if( definition.condition )
        {
            definition.isVisible = conditionRunner( definition.condition, currentMacro );
        }
        else {
            definition.isVisible = true;
        }

        macro.dataDefinition[i] = definition;
    }
    
    return macro;
}

function getMacroList( macros, t )
{
    return [{value: "", label: t("chooseMacro")}].concat( Object.keys(macros).map( macro => macros[macro] ).sort( (a,b) => {
        const labelA = t(a.label);
        const labelB = t(b.label);

        if (labelA > labelB) {
            return 1;
        }
        if (labelB > labelA) {
            return -1;
        }
        return 0;
     } ).map( macro => ({value: macro.name, label: t(macro.label)}) ) );
}

const mapDispatchToProps = ( dispatch, ownProps ) =>
({
    changeMacroType: (macros, currentMacro, connectionName, buttonIndex, event ) => {
        const macroType = event.target.value;
        if( macros[macroType] )
        {
            const macro = macros[macroType];
            let newMacro = currentMacro ? Object.assign( {}, currentMacro ) : {};
            
            macro.dataDefinition.forEach( definition => {
                newMacro[definition.name] = definition.default;
            });
            
            dispatch( updateButton(connectionName,buttonIndex, "macro", newMacro) );
            dispatch( updateButton(connectionName,buttonIndex, event.target.name, macroType) );
        }
        else if(macroType === "") {
            dispatch( updateButton(connectionName,buttonIndex, "macro", {}) );
            dispatch( updateButton(connectionName,buttonIndex, event.target.name, macroType) );
        }
        
    }
});

export default withTranslation()(connect( mapStateToProps, mapDispatchToProps )( MacroButtonSettings) );
