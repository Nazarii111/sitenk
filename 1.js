menu.onclick = function myheader(){
   var a = document.getElementById('header');
   if(a.className === "header-blok1-ul"){
      a.className +=" responsiv"
   } else {
      a.className = "header-blok1-ul"
      }
   };
   var blok1 = document.getElementById('header-blok1');
   var blok2 = document.getElementById('header-blok1-poisk');
window.onscroll = function(){
   var scrolPos = window.scrollY;
      if (scrolPos>15){
      blok2.className ="header-blok1-poisk";
   } 
      else{
      blok2.className ="header-blok1-poisk-nev";
   }
};

reg.onclick = function myreg(){
   var b = document.getElementById('regi');
   if(b.className === " form-re"){
      b.className =" form-re-re"
   } else {
      b.className = " form-re"
      }
   };
exit.onclick = function myreg(){
      var c = document.getElementById('form-exit');
      if(c.className === " form-exit-e"){
         c.className =" form-exit"
      } else {
         c.className = " form-exit-e"
         }
      };
   