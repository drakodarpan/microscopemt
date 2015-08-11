var postsData = [
    {
        title: 'Introducing Telescope', 
        url: 'http://www.yahoo.com.mx'
    },
    {
        title: 'MT',
        url: 'http://www.telmex.com.mx'
    },
    {
        title: 'The MT book',
        url: 'http://www.gmail.com'
    }
];

Template.postsList.helpers({
   posts: postsData
});