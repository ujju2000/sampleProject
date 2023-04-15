import bloggerInfo from './info.js';



(function addBloggerName() {
    for(let i =0;i<bloggerInfo.length;i++) {
        let name = bloggerInfo[i].name;
        let html = `<option value = ${i+1}> ${name} </option>`
        $('#bloggerName').append(html);
    }
})();


$('.btn').click(()=>{
    let blogger = document.querySelector('#bloggerName').value;
    print(blogger-1);
    
    $('.result').toggle();
});

function trendPrint(trends){
    let div = document.createElement('div');
    div.classList.add('trends');
    let ul = document.createElement('ul');
    div.appendChild(ul);
    for(let i =0;i<trends.length;i++) {
        let li = document.createElement('li');
        li.textContent = trends[i];
        ul.appendChild(li);
    }

    $('.info').append(div);
}
function print(idx) {
    
    let bio = bloggerInfo[idx].bio;
    let trends = bloggerInfo[idx].trends;
    
    $('.info').html(
        " "+bio+" <br> <span class = 'trend'>The following trends are :-</span> <br>"
    )
    trendPrint(trends);

}
