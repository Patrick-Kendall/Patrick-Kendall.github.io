
document.addEventListener('onscroll', loadFeatured());

function loadFeatured() {
  var lit = new XMLHttpRequest();

   lit.open('GET','poly.html',true);
   lit.responseType = 'document';

   // let page = this.response;
   lit.onload = function(){
     if(this.status == 200){
       const page = this.response;

       document.querySelector('.review').innerHTML = page.querySelector('.featured').innerHTML;
     }
   }
   // document.querySelector('.review').innerHTML = page.querySelector('.featured');

   // console.log(lit.querySelector('.featured'));


   // console.log(this.response);
   lit.send();

}
