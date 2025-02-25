# MMM-Dad-Jokes

This is a module for the [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror/).

Random Dad Jokes from <https://icanhazdadjoke.com/>

This was a learning exercise with node and MagicMirror² - feel free to do what you want with it.

## Screenshot example

![screenshot](screenshot.png)

## Installation

Just clone the module into your modules folder of your MagicMirror² and execute `npm install` in the module’s directory:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/brucetony/MMM-Dad-Jokes
cd MMM-Dad-Jokes
npm install
```

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

```js
let config = {
	modules: [
		{
			module: 'MMM-Dad-Jokes',
			position: 'bottom_left', // Or wherever you want
			config: {
				updateInterval: 30 * 60 * 1000, // every 30 minutes
				fadeSpeed: 4 * 1000, // four seconds
				filters: ['poop'],
				fontSize: '1.7rem',
				textAlign: 'left',
			}
		}
	]
}
```

## Configuration options

| Option           | Description                                                                                  |
|------------------|----------------------------------------------------------------------------------------------|
| `updateInterval` | How often in milliseconds to get a new joke. Defaults to 30 minutes.                         |               
| `fontSize`       | Font size of the text expressed using 'px', 'em', or 'rem' as the unit. Defaults to '1.5rem' |
| `textAlign`      | Either `left`, `center`, or `right`. Defaults to `center`                                    |
| `fadeSpeed`      | How quickly the jokes fade in and out. Defaults to four seconds.                             |
| `filters`        | Array of words not to include in jokes.                                                      |
