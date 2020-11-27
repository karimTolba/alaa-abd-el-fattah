const input_search  = document.getElementById("in_se");

var flag  = false;

function fa_search(){

    if(flag == false){

        input_search.style.width = "300px";
        input_search.setAttribute("placeholder" , "search wikipedia");

        flag  = true;

    }
    else{

        input_search.style.width = "20px";
        input_search.removeAttribute("placeholder" , "search wikipedia");

        flag = false;


    }

}