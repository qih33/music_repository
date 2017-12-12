(function(){

    fetch('../json/rec.json')
    then('/json/rec.json')

        .then(res => res.json())
        .then(render)



    function render(json) {
        let slides = json.data.slider.map(slide => {
            return {link: slide.linkUrl, image: slide.picUrl}
        })

        new Slider({
            el: document.querySelector('#slider'),
            slides: slides
        })
    }

    // let slider = new Slider(
    //     {
    //        el: document.querySelector('#slider'),
    //         slides: [
    //             {link: '#1', image: 'images/amei.jpg'},
    //             {link: '#2', image: 'images/dakang.jpg'},
    //             {link: '#3', image: 'images/halin.jpg'},
    //             {link: '#4', image: 'images/lvcheng.jpg'},
    //             {link: '#5', image: 'images/wuyifan.jpg'}
    //         ]
    //     })
    // window.slider = slider
})()