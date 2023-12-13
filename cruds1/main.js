let title = document.getElementById('title');
let price = document.getElementById('price');
let taxs = document.getElementById('taxs');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

let mood ='create';
let temp;



function getTotal(){
    if(price.value != "")
    {
        let result = (+price.value + +taxs.value + +ads.value) - +discount.value ;
        total.innerHTML = result;
        total.style.background = "green"
    }else{
        total.innerHTML = "";
        total.style.background="rgba(227, 30, 73, 0.798)"
    }
}
let datapro;
if(localStorage.product != null){
    datapro=JSON.parse(localStorage.product);
}else{
    datapro=[];
}

submit.onclick=function(){
    let newpro = {
        title:title.value.toLowerCase(),
        price:price.value,
        taxs:taxs.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }

    if (mood==='create'){
      if(newpro.count>1){
        for(let i = 0;i<newpro.count;i++){
            datapro.push(newpro);
        }
    }else{    datapro.push(newpro);
    }
    localStorage.setItem(  'product'   ,   JSON.stringify(datapro)   );
       
    }else{
        datapro[temp]=newpro;
        mood='create';
        submit.innerHTML='create';
        count.style.display='block';
    }
    

    cleardata();
    showdata();
}

function cleardata(){
    title.value='',
    price.value='',
    taxs.value='',
    ads.value='',
    discount.value='',
    total.innerHTML='',
    count.value='',
    category.value='';


}
function showdata()
{
    getTotal();
    let table='';
    for (let i=0 ; i < datapro.length ; i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxs}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick='updatedata(${i})' id="update">update</button></td>
            <td><button onclick='deletedata(${i})' id="delete">delete</button></td>
        </tr>
        `
        

    }
    document.getElementById('tbody').innerHTML = table;
    let btndelete = document.getElementById('deleteall');
    if (datapro.length>0){
        btndelete.innerHTML=`<button onclick='deleteall()' >delete all (${datapro.length})</button>`
    }else{
        btndelete.innerHTML='';
    }
}
showdata();
function deletedata(i){
    datapro.splice(i,1);
    localStorage.product=JSON.stringify(datapro);


    showdata()
}
function deleteall(){
    localStorage.clear();
    datapro.splice(0);
    showdata()

}
function updatedata(i){
    title.value=datapro[i].title;
    price.value=datapro[i].price;
    taxs.value=datapro[i].taxs;
    ads.value=datapro[i].ads;
    discount.value=datapro[i].discount;
    count.style.display='none';
    category.value=datapro[i].category;
    submit.innerHTML='update';
    mood='update';

    getTotal();
    temp=i;
    scroll({
        top:0,
        behavior :'smooth',
    })
}
let moodsearch='title';


function serchmood(id){

    let search=document.getElementById('search');
    if(id==='searchtitle'){
        moodsearch='title';
        search.placeholder='search by title';

    }
    else{
        moodsearch='category';
        search.placeholder='search by category';

    }
search.focus();
search.value='';
showdata();
}
function searchdata(value){
    let table='';
    if (moodsearch==='title'){
        for (let i=0;i<datapro.length;i++){
            if(datapro[i].title.includes(value.toLowerCase())){
                table += `
                    <tr>
                        <td>${i}</td>
                        <td>${datapro[i].title}</td>
                        <td>${datapro[i].price}</td>
                        <td>${datapro[i].taxs}</td>
                        <td>${datapro[i].ads}</td>
                        <td>${datapro[i].discount}</td>
                        <td>${datapro[i].total}</td>
                        <td>${datapro[i].category}</td>
                        <td><button onclick='updatedata(${i})' id="update">update</button></td>
                        <td><button onclick='deletedata(${i})' id="delete">delete</button></td>
                    </tr>
                    `
            }
        }
          
    }
    else{
        for (let i=0;i<datapro.length;i++){
            if(datapro[i].category.includes(value.toLowerCase())){
                table += `
                    <tr>
                        <td>${i}</td>
                        <td>${datapro[i].title}</td>
                        <td>${datapro[i].price}</td>
                        <td>${datapro[i].taxs}</td>
                        <td>${datapro[i].ads}</td>
                        <td>${datapro[i].discount}</td>
                        <td>${datapro[i].total}</td>
                        <td>${datapro[i].category}</td>
                        <td><button onclick='updatedata(${i})' id="update">update</button></td>
                        <td><button onclick='deletedata(${i})' id="delete">delete</button></td>
                    </tr>
                    `;
            }
        }

    }
    document.getElementById('tbody').innerHTML = table;
}