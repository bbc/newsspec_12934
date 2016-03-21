define(['wrapper', 'ShareToolsTemplate', 'buttons', 'video'], function (wrapper, ShareTemplate, exampleButtons, Video) {

    console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    exampleButtons.init();

    wrapper.sharetools.init({
        holderEl: '.tmpShareToolsHolder',
        label: 'Share this page',
        shareUrl: wrapper.url.hostUrl,
        messages: {
            twitter: 'Twitter message',
            facebook: {
                title: 'Facebook share message',
                description: 'Further detailed information here', //Optional
                image: 'http://bbc.co.uk/some-image.png' //Optional
            },
            email: {
                subject: 'SUPER IMPORTANT EMAIL',
                message: 'BBC News has new bespoke'
            },
            app: {
                properties: {
                    title: 'App Title',
                    text: 'Custom share message for app'
                }
            }
        },
        template: ShareTemplate
    });

    wrapper.sharetools.setMessages({
        twitter: 'I just want to update the Twitter message for some reason.'
    });

    wrapper.sharetools.setShareUrl('http://bbc.co.uk/super-cool-new-url');

    wrapper.onOptimizedScroll(function (scrollTop) {
        console.log('Optimized scroll.', scrollTop);
    });

    wrapper.onRawScroll(function (scrollTop) {
        console.log('Raw scroll.', scrollTop);
    });

    setTimeout(function () {
        wrapper.callIstats({
            actionType: 'panel-clicked',
            actionName: 'newsspec-interaction',
            viewLabel:  3
        });
    }, 500);
    setTimeout(function () {
        wrapper.callIstats({
            actionType: 'app loaded',
            actionName: 'newsspec-nonuser',
            viewLabel:  true
        });
    }, 2000);

    new Video('#bbc-news-vj-video--one', 'p03912vm', 'http://news.stage.bbc.co.uk/news/special/2015/newsspec_12499/content/english/img/venezuela/venezuela_poster_image_1290.jpg');

    wrapper.markPageAsLoaded();

});