const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'] });

// now add scraping prompts 
manager.addDocument('en', 'Scrape articles from The New York Times', 'scrape-articles');
manager.addDocument('en', 'Crawl news from BBC News', 'scrape-articles');
manager.addDocument('en', 'Retrieve data from example.com', 'scrape-data');
manager.addDocument('en', 'Extract information from the product page on Amazon', 'scrape-data');
manager.addDocument('en', 'Collect reviews from TripAdvisor', 'scrape-reviews');
manager.addDocument('en', 'Get news updates from CNN', 'scrape-articles');
manager.addDocument('en', 'Scrape weather data from weather.com', 'scrape-data');
manager.addDocument('en', 'Retrieve contact information from the About Us page of example.org', 'scrape-data');
manager.addDocument('en', 'Crawl stock market data from finance.yahoo.com', 'scrape-stock-data');
manager.addDocument('en', 'Collect sports scores from ESPN', 'scrape-articles');
manager.addDocument('en', 'Scrape recipes from allrecipes.com', 'scrape-articles');
manager.addDocument('en', 'Scrape product data from eBay', 'scrape-data');
manager.addDocument('en', 'Scrape product data from Amazon', 'scrape-data');


// Train also the NLG
manager.addAnswer('en', 'scrape-articles', 'Scraping articles from The New York Times');
manager.addAnswer('en', 'scrape-articles', 'Crawling news from BBC News');
manager.addAnswer('en', 'scrape-data', 'Retrieving data from example.com');
manager.addAnswer('en', 'scrape-data', 'Extracting information from the product page on Amazon');
manager.addAnswer('en', 'scrape-reviews', 'Collecting reviews from TripAdvisor');
manager.addAnswer('en', 'scrape-articles', 'Getting news updates from CNN');
manager.addAnswer('en', 'scrape-data', 'Scraping weather data from weather.com');
manager.addAnswer('en', 'scrape-data', 'Retrieving contact information from the About Us page of example.org');
manager.addAnswer('en', 'scrape-stock-data', 'Crawling stock market data from finance.yahoo.com');

// Train and save the model.
(async() => {
    await manager.train();
    manager.save();
    const response = await manager.process('en', 'Scrape articles from The New York Times');
    console.log(response);
})();

