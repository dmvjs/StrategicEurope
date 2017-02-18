var config = require('../app/config');

function alert(message, callback, title, buttonLabel) {
	navigator.notification.alert(message, callback, title || config.appName, buttonLabel);
}

function confirm(message, callback, title, buttonLabels) {
	//title: defaults to 'Confirm'
	//buttonLabels: defaults to [OK, Cancel]
	navigator.notification.confirm(message, callback, title || config.appName, buttonLabels);
}

module.exports = {
	alert: alert,
	confirm: confirm
};