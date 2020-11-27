const input_search  = document.getElementById("in_se");
const f_search = document.getElementsByClassName("fa-search");

var flag  = false;

function fa_search(){

    if(flag == false){

        input_search.style.width = "300px";
        input_search.style.padding = "3px";
        input_search.style.border = "1px solid";
        input_search.style.borderRadius = "5px";
        f_search[0].style.bottom = "5px";
        input_search.setAttribute("placeholder" , "search wikipedia");

        flag  = true;

    }
    else{

        input_search.style.width = "20px";
        input_search.style.padding = "0px";
        input_search.style.border = "none";
        f_search[0].style.bottom = "0px";
        input_search.removeAttribute("placeholder" , "search wikipedia");

        flag = false;


    }

}