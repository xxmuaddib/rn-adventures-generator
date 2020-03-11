const getTranslationsFromScene = (
  obj,
  lastkey = 'SCENES',
  translationsObj = {},
) => {
  if (typeof obj !== 'object') return false;

  Object.keys(obj).forEach(objkey => {
    // console.error(`${lastkey}_${objkey}`);
    if (typeof obj[objkey] === 'object') {
      const key = `${lastkey}_${objkey}`;
      if (objkey === 'translations') {
        // eslint-disable-next-line no-param-reassign
        translationsObj[lastkey] = obj[objkey];
        return true;
      }
      getTranslationsFromScene(obj[objkey], key, translationsObj);
    }
  });
  return translationsObj;
};

const getLanguages = translations => {
  const languagesArray = [];
  Object.keys(translations).forEach(key => {
    Object.keys(translations[key]).forEach(lang => {
      if (!languagesArray.includes(lang)) {
        languagesArray.push(lang);
      }
    });
  });

  return languagesArray;
};

const generateTranslationsObject = (languagesArray, translations) => {
  const obj = {};
  let value = '';

  Object.keys(languagesArray).forEach(languageKey => {
    Object.keys(translations).forEach(translationKey => {
      value = translations[translationKey][languagesArray[languageKey]];
      if (value !== undefined) {
        obj[languagesArray[languageKey]] = {
          ...obj[languagesArray[languageKey]],
          [translationKey]: value,
        };
      }
    });
  });

  return obj;
};

export { getTranslationsFromScene, getLanguages, generateTranslationsObject };
