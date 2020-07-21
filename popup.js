// File Name: popup.js

// Description: This is the javascript page of the Search engine changer Extension

// Author: Devendra Poonia

// Date: 91/7/2020


// Declaring variables

let select = document.getElementById('dropdwn');
let btn = document.getElementById('searchbtn');
let url;
function hideInvalidFeedback() {
    let invalid = document.getElementById("invalid");
    invalid.style.display = 'none'
}

// Adding eventlisteners
btn.addEventListener('click', () => {
    let userinput = document.getElementById('input').value;

    let select = document.getElementById('dropdwn').value;

    // Validation
    if(userinput != '' && select != 'null'){
    if (select == 'google') {
        hideInvalidFeedback();
        url = `https://www.google.com/search?q=${userinput}`;
        window.open(url, '_blank')
    } else if(select == 'duck'){
        hideInvalidFeedback();
        url = `https://duckduckgo.com/?q=${userinput}`;
        window.open(url, '_blank');
    } else if(select == 'bing'){
        hideInvalidFeedback()
        url = `https://www.bing.com/search?q=${userinput}`;
        window.open(url, '_blank')
    } else if(select == 'yahoo'){
        url = `https://in.search.yahoo.com/search?p=${userinput}`;
        window.open(url, '_blank')
    }
    else{
        return false;
    }
}
else{
    let invalid = document.getElementById('invalid');
    invalid.style.display = 'block';
    setTimeout(hideInvalidFeedback, 4000);
}
// }else{
//     let invalid2 = document.getElementById('invalid2');
//     invalid2.style.display = 'block';
});

