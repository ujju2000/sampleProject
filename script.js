import bloggerInfo from './info.js';


$(document).ready(() => {
    addBloggerName();

})

$('.btn').click(()=>{
    let blogger = document.querySelector('#bloggerName').value;
    print(blogger-1);
    $('.result').show();
});


function print(idx) {
    
    let bio = bloggerInfo[idx].bio;
    let trends = bloggerInfo[idx].trends;

    $('.info').html(
        " "+bio+" <br> <span class = 'trend'>The following trends are :-</span> <br>"+trends+ " "
    )
}


function addBloggerName() {
    
    for(let i =0;i<bloggerInfo.length;i++) {
        let name = bloggerInfo[i].name;
        let html = `<option value = ${++i}> ${name} </option>`
        $('#bloggerName').append(html);
        --i;
    }
}