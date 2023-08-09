
const navClick=() =>{
    const navbar = document.querySelector(".navbar");
    const setting = document.querySelector(".settingbtn");

    setting.addEventListener('click', () =>{
        navbar.classList.toggle('settingbtnclicked');
        
    });
}

navClick();

let list =["location1","location2","location3","location4","location5","location6"];

const locationHover = function(){
    const locationSection = document.querySelector(".locations-section");
    const locations = locationSection.querySelectorAll(".location");
    const nameSections = locationSection.querySelectorAll(".name-section"); 
    const prices = locationSection.querySelectorAll(".price");

    for(let i = 0 ; i < nameSections.length; i++){
        locations[i].addEventListener("mouseover", function(){
            nameSections[i].style.transform="translateY(0%)";
            prices[i].style.transform="translate(0%)";
        });
        locations[i].addEventListener("mouseout", () =>{
            nameSections[i].style.transform="translateY(-100%)";
            prices[i].style.transform="translate(100%)";
        });
    }
}

locationHover();














//   const location1 = document.getElementById("location1");
//   const location2 = document.getElementById("location2");
//   const location3 = document.getElementById("location3");
//   const location4 = document.getElementById("location4");
//   const location5 = document.getElementById("location5");
//   const location6 = document.getElementById("location6");

//   const nameSection1 = document.getElementById("name-section1").style;
//   const nameSection2 = document.getElementById("name-section2").style;
//   const nameSection3 = document.getElementById("name-section3").style;
//   const nameSection4 = document.getElementById("name-section4").style;
//   const nameSection5 = document.getElementById("name-section5").style;
//   const nameSection6 = document.getElementById("name-section6").style;


//   var MediaSize = window.matchMedia("(max-width:750px)");

//   const price1 = document.getElementById("price1").style;
//   const price2 = document.getElementById("price2").style;
//   const price3 = document.getElementById("price3").style;
//   const price4 = document.getElementById("price4").style;
//   const price5 = document.getElementById("price5").style;
//   const price6 = document.getElementById("price6").style;



//   location1.onmouseover = () =>{
//       nameSection1.transform="translateY(0%)"; 
//       price1.transform="translate(0%)";
//   }
//   location1.onmouseout = () =>{
//       nameSection1.transform="translateY(-100%)";
//       if(!MediaSize.matches){
//           price1.transform="translateX(100%)";
//       }
//   }


//   location2.onmouseover = () =>{
//       nameSection2.transform="translateY(0%)";
//       price2.transform="translateX(0%)";
//   }
//   location2.onmouseout = () =>{
//       nameSection2.transform="translateY(-100%)";
//       if(!MediaSize.matches){
//           price2.transform="translateX(100%)";
//       }
//   }


//   location3.onmouseover = () =>{
//       nameSection3.transform="translateY(0%)";
//       price3.transform="translate(0%)";
//   }
//   location3.onmouseout = () =>{
//       nameSection3.transform="translateY(-100%)";
//       if(!MediaSize.matches){
//           price3.transform="translateX(100%)";
//       }
//   }



//   location4.onmouseover = () =>{
//       nameSection4.transform="translateY(0%)";
//       price4.transform="translate(0%)";
//   }
//   location4.onmouseout = () =>{
//       nameSection4.transform="translateY(-100%)";
//       if(!MediaSize.matches){
//           price4.transform="translateX(100%)";
//       }
//   }



//   location5.onmouseover = () =>{
//       nameSection5.transform="translateY(0%)";
//       price5.transform="translate(0%)";
//   }
//   location5.onmouseout = () =>{
//       nameSection5.transform="translateY(-100%)";
//       if(!MediaSize.matches){
//           price5.transform="translateX(100%)";
//       }
//   }



//   location6.onmouseover = () =>{
//       nameSection6.transform="translateY(0%)";
//       price6.transform="translateY(0%)";
//   }
//   location6.onmouseout = () =>{
//       nameSection6.transform="translateY(-100%)";
//       if(!MediaSize.matches){
//           price6.transform="translateX(100%)";
//       }
//   }




















//  const locationsHover = () =>{
//      const locations = document.querySelector(".locations");
//      const locationsImg = document.getElementById("locations").style;

//      const location1 = document.querySelector(".location1");
//      const location2 = document.querySelector(".location2");
//      const location3 = document.querySelector(".location3");
//      const location4 = document.querySelector(".location4");
//      const location5 = document.querySelector(".location5");
//      const location6 = document.querySelector(".location6");
//      const location8 = document.querySelector(".location7");
//      const location7 = document.querySelector(".location8");    

//      location1.addEventListener("mouseover", ()=>{
//          locationsImg.background ="url(../Web_Photoes/Top-10-of-the-most-beautiful-places-to-visit-in-Vietnam.jpg)";
//          locations.classList.toggle("locations-hover");
//      });
//      location2.addEventListener("mouseover", ()=>{
//          locationsImg.background="url(../Web_Photoes/Orogold-8-travel-tips-if-youre-visiting-South-America-Machu-Picchu.jpg)";
//          locations.classList.toggle("locations-hover");
//      });
//      location3.addEventListener("mouseover", ()=>{
//          locationsImg.background="url(../Web_Photoes/Egypt-desert.jpg)";
//          locations.classList.toggle("locations-hover");
//      });
//      location4.addEventListener("mouseover", ()=>{
//          locationsImg.background="url(../Web_Photoes/world-top-rated-tourist-attractions-chichen-itza-mexico.jpg)";
//          locations.classList.toggle("locations-hover");
//      });
//      location5.addEventListener("mouseover", ()=>{
//          locationsImg.background="url(../Web_Photoes/Plitvice-Lakes-Croatia-GettyImages-1080935866.webp)";
//      });
//      location6.addEventListener("mouseover", ()=>{
//          locationsImg.background="url(../Web_Photoes/5d3878bb36e03c348c7cfcd6.webp)";
//      });
//      location7.addEventListener("mouseover", ()=>{
//          locationsImg.background="url(../Web_Photoes/8.jpg)";
//      });

//      location8.addEventListener("mouseover", ()=>{
//          locationsImg.background="url(../Web_Photoes/Egypt-desert.jpg)";
//      });


//  }

//  locationsHover();


//  const locations = document.getElementById("locations-section").style;
//  const location1 = document.querySelector(".location1");
//  const location2 = document.querySelector(".location2");
//  const location3 = document.querySelector(".location3");
//  const location4 = document.querySelector(".location4");
//  const location5 = document.querySelector(".location5");
//  const location6 = document.querySelector(".location6");
//  const location8 = document.querySelector(".location7");
//  const location7 = document.querySelector(".location8");



//  location1.onmouseover = function(){
//      locations.background="url(../Web_Photoes/Top-10-of-the-most-beautiful-places-to-visit-in-Vietnam.jpg)";
   
    
//  }
//  location2.onmouseover = () =>{
//      locations.background="url(../Web_Photoes/Orogold-8-travel-tips-if-youre-visiting-South-America-Machu-Picchu.jpg)";
//  }
//  location3.onmouseover = function(){
//      locations.background="url(../Web_Photoes/Egypt-desert.jpg)";
//  }
//  location4.onmouseover = () =>{
//      locations.background="url(../Web_Photoes/world-top-rated-tourist-attractions-chichen-itza-mexico.jpg)";
//  }
//  location5.onmouseover = function(){
//      locations.background="url(../Web_Photoes/Plitvice-Lakes-Croatia-GettyImages-1080935866.webp)";
//  }
//  location6.onmouseover = function(){
//      locations.background="url(../Web_Photoes/5d3878bb36e03c348c7cfcd6.webp)";
//  }
//  location7.onmouseover = function(){
//      locations.background="url(../Web_Photoes/8.jpg)";
//  }
//  location8.onmouseover = function(){
//      locations.background="url(../Web_Photoes/Egypt-desert.jpg)";
//  }

























