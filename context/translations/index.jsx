import { createContext } from 'react';
import PropTypes from 'prop-types';
import LocalizedStrings from 'react-localization';
import { LANGUAGES } from '@config/globals';
import translationsJSON from '@config/localization/translations.json';

const Context = createContext();
const Consumer = Context.Consumer;

const Provider = ({ children }) => {
    const options = {
        logsEnabled: false // process.env.NODE_ENV !== 'production'
    }
    const translations = new LocalizedStrings(translationsJSON, options);
    translations.setLanguage('en');

    const selectedLanguage = LANGUAGES.ENGLISH;

    // `path` accepts a string with dot syntax, and an optional default/fallback string
    // avoid using keys with dots in the translations data
    const getTranslatedText = (path, defaultText = '') => (
        translations.getString(path) || defaultText
    );

    const getLanguageName = () => {
        return selectedLanguage.name;
    }

    const getLanguageCode = () => {
        return selectedLanguage.code;
    }

    return (
        <Context.Provider value={{
            getTranslatedText,
            getLanguageName,
            getLanguageCode
        }}>
            { children }
        </Context.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.object,
    language: PropTypes.string
}

export default { Consumer, Context, Provider };
