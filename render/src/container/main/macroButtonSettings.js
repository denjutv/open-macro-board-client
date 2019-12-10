import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import MacroButtonSettings from "../../component/main/macroButtonSettings";

const mapStateToProps = ( state, ownProps ) => {
    const button = state.buttons[ownProps.connection.name][state.buttonSettings.selectedButtonIndex];
    const macroType = button.macro.macroType;
    return {
        macro: macroType ? getMacro( state.macros, macroType ) : null,
        macroList: getMacroList(state.macros, ownProps.t),
        t: ownProps.t
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
    
});

export default withTranslation()(connect( mapStateToProps, mapDispatchToProps )( MacroButtonSettings) );
