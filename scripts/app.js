(function(){

    fetch('json/rec.json')
        .then(res => res.json())
        .then(render)



    function render(json) {
        renderSlider(json.data.slider)
        renderRadios(json.data.radioList)
        renderPlaylists(json.data.songList)

    }

    function renderSlider(sliders){
        let slides = sliders.map(slide => {
            return {link: slide.linkUrl, image: slide.picUrl}
        })

        new Slider({
            el: document.querySelector('#slider'),
            slides: slides
        })
    }

    function renderRadios(radios) {
        document.querySelector('.radios .list').innerHTML = radios.map(radio =>
        `
         <div class="list-item" >
              <div class="list-media">
                   <img  src="${radio.picUrl}">
                   <span class="icon icon_play"></span>
              </div>
              <div class="list-title">${radio.Ftitle}</div>
         </div>
        `).join('')
    }

    function renderPlaylists(playlists){
        document.querySelector('.playlists .list').innerHTML = playlists.map(playlist =>
            `
         <div class="list-item" >
              <div class="list-media">
                   <img  src="${playlist.picUrl}">
                   <span class="icon icon_play"></span>
              </div>
              <div class="list-title">${playlist.songListDesc}</div>
         </div>
        `).join('')
    }


})()
