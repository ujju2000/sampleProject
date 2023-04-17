
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
    console.log(blogger);
    if(blogger == bloggerInfo.length ) printAll(blogger -1);
    else print(blogger-1);
    
    $('.result').show();
});
function printAll(bloggerAll) {
    let div = document.createElement('div');
    div.innerHTML = `<h2> All the Trends are :-  </h2>`
    
    let allTrend = [];
    for(let i =0; i < bloggerInfo.length-1;i++){
        allTrend.push(bloggerInfo[i].twenty_23);
        allTrend.push(bloggerInfo[i].twenty_22);
        allTrend.push(bloggerInfo[i].twenty_21);
    }
    console.log(allTrend)
    for(let i =0;i<allTrend.length;i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        // let strArray = allTrend[i].split(",");
        
        row.textContent = allTrend[i];
        div.appendChild(row);
    }
    $('.info').html(div);
    
}
function yearlyTrendPrint(idx,year){
    let div = document.createElement('div');
    div.classList.add('year');
    let ul = document.createElement('ul');
    div.appendChild(ul);
    
   let arrYear = [];        
   if(year == 1) arrYear = bloggerInfo[idx].twenty_23;
   else if(year == 2) arrYear = bloggerInfo[idx].twenty_22;
   else arrYear = bloggerInfo[idx].twenty_21; 
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
    // console.log("year"  + year);
    $('.info').html(
        " "+bio+" <br> <span class = 'trend'>The following trends according to year :-</span> "
    )
    
    // console.log('udx'+idx);
    yearlyTrendPrint(idx,year);
}
