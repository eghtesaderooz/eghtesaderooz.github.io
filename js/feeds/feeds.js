        $(document).ready(function () {
            $('#divRss').FeedEk({
                FeedUrl: 'http://www.donya-e-eqtesad.com/mining-industry/rss/',
                MaxCount: 3
            });

            $('#divRss2').FeedEk({
                FeedUrl: 'http://www.donya-e-eqtesad.com/mining-industry/rss/',
                MaxCount: 12,
                ShowDesc: false,
                ShowPubDate: false,
                DescCharacterLimit: 1000,
				DateFormatLang:'fa'
            });

            $('#divRss3').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 5,
                ShowDesc: false
            });

            $('#divRss4').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'L',
                DateFormatLang: 'en'
            });

            $('#divRss5').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'L',
                DateFormatLang: 'tr'
            });

            $('#divRss6').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'L',
                DateFormatLang: 'en-gb'
            });

            $('#divRss7').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'LL',
                DateFormatLang: 'en'
            });

            $('#divRss8').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'LLL',
                DateFormatLang: 'en'
            });

            $('#divRss9').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'll',
                DateFormatLang: 'en'
            });
            $('#divRss10').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'lll',
                DateFormatLang: 'en'
            });

            $('#divRss11').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'DD MMMM YYYY',
                DateFormatLang: 'en'
            });
            $('#divRss12').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'MM/DD/YYYY'
            });

            $('#divRss13').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'MM/DD/YYYY HH:mm'
            });

            $('#divRss14').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'MM-DD-YYYY'
            });

            $('#divRss15').FeedEk({
                FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                MaxCount: 2,
                DateFormat: 'MM-DD-YYYY HH:mm'
            });
        });

