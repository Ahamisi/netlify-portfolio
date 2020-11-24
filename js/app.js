document.addEventListener('DOMContentLoaded',  async () =>{
    var output = ``;
    await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ahamisivickzyjr')
    .then(response => response.json())
    .then(res => {
        res.items.forEach((item, index, obj) => {
            var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
            let dateStamp = new Date(item.pubDate); 
            let pubMonth = monthNames[dateStamp.getMonth()]
            output += `<!-- start blog post item -->
            <div class="col-md-4 col-sm-4 col-xs-12 xs-margin-15px-bottom wow fadeIn" data-wow-delay="0.2s">
                <div class="blog-post blog-post-style6 border-all border-white-light padding-fourteen-all md-padding-ten-all xs-padding-30px-all inner-match-height">
                    <div class="post-details">
                        <span class="text-extra-small text-white text-uppercase display-block margin-four-bottom sm-margin-two-bottom opacity7">${dateStamp.getDay()} ${pubMonth}, ${dateStamp.getFullYear()}</span>
                        <span class="text-large alt-font margin-50px-bottom xs-margin-30px-bottom display-block inner-match-height"><a href="${item.link}" target="_blank" class="text-white">${item.title}</a></span>
                        <div class="author padding-10px-top position-relative">
                            <span class="text-white text-uppercase text-extra-small">Author: <a href="${item.link}" target="_blank" class="text-white">${item.author}</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- start blog post item -->`
        })
        $('#recent-blogs').html(output);
    });
        
});