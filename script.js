
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
    
    $('.result').show();
});

function yearlyTrendPrint(idx,year){
    let div = document.createElement('div');
    div.classList.add('year');
    let ul = document.createElement('ul');
    div.appendChild(ul);
    
   let arrYear = [];        
   if(year == 1) arrYear = bloggerInfo[idx].twenty_23;
   else if(year == 2) arrYear = bloggerInfo[idx].twenty_22;
   else arrYear = bloggerInfo[idx].twenty_21; 
    console.log(arrYear.length)
    for(let i =0;i<arrYear.length;i++) {
        let li = document.createElement('li');
        li.textContent = arrYear[i];
        ul.appendChild(li);
    }

    $('.info').append(div);
}
function print(idx) {
    
    let bio = bloggerInfo[idx].bio;
    // let trends = bloggerInfo[idx].trends;
    let year = document.querySelector('#trendSelect').value;
    console.log("year"  + year);
    $('.info').html(
        " "+bio+" <br> <span class = 'trend'>The following trends according to year :-</span> <br>"
    )
    
    console.log('udx'+idx);
    yearlyTrendPrint(idx,year);
}
