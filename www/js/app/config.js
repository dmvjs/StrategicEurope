/*global module, require*/
var analyticsConfig = require('./analyticsConfig');

module.exports = {
	fs: void 0
	, appName: 'Strategic Europe'
	, track: analyticsConfig.track
	, trackId: analyticsConfig.trackId
	, folder: 'com.ceip.stragetegiceurope'
	, storyFontSize: 1.0
	, connectionMessage: 'No network connection detected'
	, menuMessage: 'Not yet downloaded'
    , missingImage: 'data:image/png;base64,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'
	, missingImageRef: void 0
	, menu: [{
		title: 'Strategic Europe'
		, sub: 'Read Offline'
		, feeds: [{
			url: 'http://carnegieendowment.org/rss/solr/?fa=AppStrategicEurope'
			, name: 'Refresh Posts'
			, filename: 'europe.json'
			, type: 'json'
			, required: true
		}]
	}, {
		title: 'Browse Issues'
		, links: [{
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showIssue&id=1207&title=Energy%20and%20Climate'
			, name: 'Energy and Climate'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showIssue&id=1191&title=EU%20and%20the%20World'
			, name: 'EU and the World'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showIssue&id=1190&title=Eurozone%20Crisis'
			, name: 'Eurozone Crisis'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showIssue&id=1208&title=International%20Economics'
			, name: 'International Economics'
		}, {
            url: 'http://carnegieeurope.eu/strategiceurope/?fa=showIssue&id=1209&title=Nuclear%20Policy'
            , name: 'Nuclear Policy'
        }, {
            url: 'http://carnegieeurope.eu/strategiceurope/?fa=showIssue&id=1210&title=Political%20Reform'
            , name: 'Political Reform'
        }, {
            url: 'http://carnegieeurope.eu/strategiceurope/?fa=showIssue&id=1211&title=Security'
            , name: 'Security'
        }]
	}, {
		title: 'Browse Regions'
		, links: [{
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1206&title=Americas'
			, name: 'Americas'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1200&title=Balkans'
			, name: 'Balkans'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1203&title=Central%20Asia'
			, name: 'Central Asia'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1204&title=East%20Asia'
			, name: 'East Asia'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1199&title=Eastern%20Europe'
			, name: 'Eastern Europe'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1201&title=Middle%20East'
			, name: 'Middle East'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1202&title=North%20Africa'
			, name: 'North Africa'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1189&title=Russia%20and%20Caucasus'
			, name: 'Russia and Caucasus'
		}, {
            url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1205&title=South%20Asia'
            , name: 'South Asia'
        }, {
            url: 'http://carnegieeurope.eu/strategiceurope/?fa=showRegion&id=1188&title=Western%20Europe'
            , name: 'Western Europe'
        }]
	}, {
		title: 'Explore'
		, links: [{
			url: 'http://carnegieeurope.eu/experts/?fa=show&id=693'
			, name: 'About Judy Dempsey'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=archive'
			, name: 'Complete Archive'
		}, {
			url: 'http://carnegieeurope.eu/strategiceurope/?fa=showIssue&id=1213&title=Judy%20Asks'
			, name: 'Judy Asks Archive'
		}]
	}]
};