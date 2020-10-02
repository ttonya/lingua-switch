export let currentLocale: string;
let currentFile: any;
let linguaSwitchOptions: LinguaSwitchOptions;

export let translate = (keys: string) => {
	if (keys && keys.length) {
		let key1 = keys.split(".")[0];
		let key2 = keys.split(".")[1];

		let field = currentFile[key1][key2];

		if (field) {
			return currentFile[key1][key2];
		} else {
			return keys;
		}
	} else {
		return keys;
	}
};

export interface LinguaSwitchOptions {
	currentLanguage: string;
	languages: any;
}

export let setLinguaSwitch = (options: LinguaSwitchOptions) => {
	currentLocale = options.currentLanguage;
	linguaSwitchOptions = options;
	if (options.languages[currentLocale]) {
		currentFile = options.languages[currentLocale];
	}
};

export let setLocale = (locale: string) => {
	currentLocale = locale;
	setcurrentFile(linguaSwitchOptions.languages[locale]);
};

export let setcurrentFile = (file: any) => {
	currentFile = file;
};
