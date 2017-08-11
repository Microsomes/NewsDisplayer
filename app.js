class domHandler{
    
}

let cardTemplate="";
cardTemplate += "  ";
cardTemplate += "               <div class=\"card\">";
cardTemplate += "                    ";
cardTemplate += "             <div class=\"title\">";
cardTemplate += "                   ";
cardTemplate += "                <p>titletitletitletitletitletitletitletitletitletddddddddddddddddddddddddddddddddddddddddddditle<\/p>       ";
cardTemplate += "            <\/div>";
cardTemplate += "                    ";
cardTemplate += "             <div class=\"image\">";
cardTemplate += "                    <img src=\"bill.jpg\">";
cardTemplate += "                 <\/div>";
cardTemplate += "                    ";
cardTemplate += " ";
cardTemplate += "                    ";
cardTemplate += "                    ";
cardTemplate += "                <\/div>";



var factContainer= document.querySelector(".cardContainer");

 function addFactToDom(container=factContainer,title,source,imageLink){
   
     this.title=title;
     this.source=source;
     this.imageLink=imageLink;
     // object variables assignment
   
     
let cardTemplate="";
cardTemplate += "  ";
cardTemplate += "               <div onclick='goToSource(this)' class=\"card "+this.source+"\">";
cardTemplate += "                    ";
cardTemplate += "             <div class=\"title\">";
cardTemplate += "                   ";
cardTemplate += "                <p> "+this.title+"<\/p>      ";
cardTemplate += "            <\/div>";
cardTemplate += "                    ";
cardTemplate += "             <div class=\"image\">";
cardTemplate += "                    <img src=\" "+this.imageLink+"\">";
cardTemplate += "                 <\/div>";
cardTemplate += "                    ";
cardTemplate += " ";
cardTemplate += "                    ";
cardTemplate += "                    ";
cardTemplate += "                <\/div>";

     
    container.insertAdjacentHTML("afterbegin",cardTemplate);
     
     
 }

function goToSource(about){
   console.log(about);
    
    let classes= about.className;
    let classesSplit= classes.split(" ");
    let source= classesSplit[1];
    
     
    window.open(source);
}

function grabNews(sourceLink="default"){
    
let apiKey= "df7b47e4a44a4ba0906e82f0e4c2b6bc";
    // api key for the news api
    
let bbcNews="https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey="

let requestLink= bbcNews+apiKey;
    
     
    
        $.get(requestLink, function(data, status){
            
        var jsonData= data;
         var status= data["status"];
        var source= data["source"];
        var articleArray= data["articles"];     
        var lengthOfArticles= articleArray.length;
   
            
            for(let i=0;i<lengthOfArticles;i++){
            let highLigtedArticle= articleArray[i];
            
            let title= highLigtedArticle["title"];
            let urlSource=highLigtedArticle["url"];
            
            let imageLink= highLigtedArticle["urlToImage"];
            
            console.log(title);
                
     addFactToDom(factContainer,title,urlSource,imageLink);
            }
             
             
            
            
            
            
            
            
             
            });
    
    
    
    
    console.log(requestLink);
    
    
}
grabNews();
 
  
  