const fs = require('fs');
const writeFile = fileContent => {
	return new Promise((resolve, reject) => {
		fs.writeFile('./dist/index.html', fileContent, err => {
			//if err, reject promise and send error to promise's .`catch()` method
			if (err) {
				reject(err);
				//return out of the function here to make sure the promise doesn't execute resolve function
				return;
			}

			//if everything went well, resolve promise and send succesful data to the `.then()` method
			resolve({
				ok: true,
				message: 'File created'
			});
		});
	});
};

const copyFile = () => {
	return new Promise((resolve, reject) => {
		fs.copyFile('./src/style.css', './dist/style.css', err => {
			//if err, reject promise and send error to promise's .`catch()` method
			if (err) {
				reject(err);
				//return out of the function here to make sure the promise doesn't execute resolve function
				return;
			}

			//if everything went well, resolve promise and send succesful data to the `.then()` method
			resolve({
				ok: true,
				message: 'File copied'
			});
		});
	});
};

module.exports = {writeFile, copyFile}; //shorthand property name since the property key and value are the same