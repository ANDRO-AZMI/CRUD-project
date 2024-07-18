var siteNameInput= document.getElementById ('siteName');
var urlInput= document.getElementById ('url');
var btnAdd= document.getElementById ('btnAdd');



products=[];

if (localStorage.getItem('products')) {
    products= JSON.parse(localStorage.getItem('products'))
    displayProduct()
} else {
    products=[]
}


function addProduct() {
    
  var product={
        name : siteNameInput.value,
        url : urlInput.value
    }

    products.push(product);
    localStorage.setItem('products',JSON.stringify(products));
    displayProduct();
    clearProduct();

    
}


function displayProduct() {
   var cartona=''
    for (var i = 0; i < products.length; i++) {
     cartona += `<tr>
                        <td class="w-25">${i}</td>
                        <td  class="w-25">${products[i].name}</td>
                        <td>  <a href="${products[i].url}"> <button  class="w-25 btn btn-info"> visit </a>  </button></td>
                        <td>  <button onclick="deleteProduct(${i})"  class="w-25 btn btn-danger"> delete   </button></td>
                       
                    </tr>`
    }
    document.getElementById('tableBody').innerHTML=cartona
}

function clearProduct() {
    siteNameInput.value=null
    urlInput.value=null
}




function deleteProduct(index) {
    products.splice(index,1);
    displayProduct();
    localStorage.setItem('products',JSON.stringify(products));
    
}



var nameRegax =/^[\w-\W]{1,5}$/
function IsValidName() {
    if (nameRegax.test(siteNameInput.value)) {
        return true;
    } else {
        return false;
    }

}



var urlRegax =/^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
function IsValidUrl() {
    if (urlRegax.test(urlInput.value)) {
        return true;
    } else {
        return false;
    }
}








if (IsValidName() && IsValidUrl() ) {
btnAdd.disabled = true;   //false
   addProduct()
  }  else{ btnAdd.disabled=false; //true
        
    }






















// urlInput.onkeyup=function(){
// if (IsValidName() && IsValiUrl() ) {
//     btnAdd.removeattribute("disabled");
//     addProduct()
//   }  else{ btnAdd.disabled="true";
        
//     }
// }

