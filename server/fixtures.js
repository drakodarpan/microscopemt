if( Posts.find().count() === 0 ) {
    Posts.insert({
        title: 'Introducing Telescope', 
        url: 'http://www.yahoo.com.mx'
    });
    
    Posts.insert({
        title: 'MT',
        url: 'http://www.telmex.com.mx'
    });
    
    Posts.insert({
        title: 'The MT book',
        url: 'http://www.gmail.com'
    });
}