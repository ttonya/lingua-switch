# date-ts

Lingua Switch allows you to switch between multiple languages in your projects using your own translations.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/npm) to install lingua-switch.

```bash
npm install lingua-switch
```

## Usage

Create json files with translations.
Example:

```json
{
	"common": {
		"res": "Response",
		"success": "Successfull"
	},

	"auth-page": {
		"pass": "Enter password",
		"success": "Signed in successfully"
	}
}
```

Initialize Lingua Switch in your app:

```javascript
import { setLinguaSwitch } from "lingua-switch";
import en from "./en.json";
import ru from "./ru.json";

let options = {
	currentLanguage: "en",
	languages: {
		en: en,
		ru: ru,
	},
};
setLinguaSwitch(options);
```

Use "translate" method to translate text anywhere in your app:

```javascript
import { translate } from "lingua-switch";

<p>{translate("common.success")}</p>; // returns Successfull
```

Use "setLocale" method to change language:

```javascript
import { translate } from "lingua-switch";

setLocale("ru"); // returns Successfull

<p>{translate("common.success")}</p>; // returns Успешно
```
