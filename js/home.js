
var http=new XMLHttpRequest();
var AllRecipes=[];
function GetData(q){
http.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${q}`);
http.send();
http.addEventListener("readystatechange",function(){
    if (http.readyState==4) {
    AllRecipes=JSON.parse(http.response).recipes;
        display()
    }
})
}
GetData("pizza")
function display(){
    var box=``
for (var index = 0; index <AllRecipes.length; index++) {
    box+=`
    <div class="col-md-4 " >
    <div class="item">
        <img class="w-100 mb-3" height="250px" src="${AllRecipes[index].image_url}" alt="">
        <h3 class="color" >${AllRecipes[index].publisher}</h3>
        <p class="mt-3">${AllRecipes[index].title}</p>
    </div>
</div>
    `
    
}
document.getElementById('Recipe').innerHTML=box;
}
var input=document.getElementById('input')
var btn=document.getElementById('btn');
btn.addEventListener("click",function(){
    console.log(input.value);
    GetData(input.value)
})


