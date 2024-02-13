// objective: get base,height of a triangle.Calculated the area by using the provided formula and then display the area



function calculateTriangle(){
   // get triangle base
   const triangleBaseInput=document.getElementById('triangle-base');
   const triangleBaseText =triangleBaseInput.value;
   const base=parseFloat(triangleBaseText)
    console.log(base);

   // get triangle height
   const triangleHeightInput=document.getElementById('triangle-height');
   const triangleHeightText=triangleHeightInput.value;
   const height=parseFloat(triangleHeightText)
   console.log(height);
   // calculate triangle
   const area =0.5*base *height;
   console.log(' area of the triangle',area)

}