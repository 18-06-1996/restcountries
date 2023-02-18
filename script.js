async function api(){
    v=fetch('https://restcountries.com/v3.1/all')
    out=await v
    prom=out.json()
    res=await prom
    console.log(res[0]);
    parentas=document.querySelector('.all_data')
    
    for(let i of res){
    
      try{

boss=document.querySelector('body')
h=document.createElement('h1')
h.setAttribute('id','title')
h.classList.add('text-center')
h.innerText='Rest Country'


all_parent=document.createElement('div')
all_parent.classList.add('col-lg-4')
all_parent.classList.add('col-sm-12')
all_parent.classList.add('container')
boss.append(all_parent)

row=document.createElement('div')
row.classList.add('row')
// row.setAttribute('class','card')
all_parent.append(row)

colm=document.createElement('div')
colm.classList.add('as')
colm.classList.add('col-lg-4')
colm.classList.add('col-sm-12')
colm.setAttribute('class','card')
colm.classList.add('text-center')
// colm.innerText='one'
row.append(colm)
colm.append(h)

colm1=document.createElement('div')
 colm1.classList.add('vir')
colm1.setAttribute('class','col-lg-4')
colm1.setAttribute('class','col-sm-12')
colm1.classList.add('text-center')
//  colm1.innerText= result

row.append(colm1)

     lat=i.latlng[0]
     lng=i.latlng[1]

    colm.setAttribute('lat',lat)
     colm.setAttribute('lon',lng)


head=document.createElement('div')
head.classList.add('card-header')
colm.append(head)
con_name=document.querySelector('.card-header')
 head.innerText= `Country Name:${i.name.common}`

body1 =document.createElement('div')
body1.classList.add('card-body')
colm.append(body1)
para=document.createElement('p')
para.innerText='Flag Of The Country :'
body1.append(para)
pic=document.createElement('img')
pic.setAttribute('class','card-img-top')
pic.setAttribute('src',i.flags.png)
body1.append(pic)

cap=document.createElement('p')
cap.innerText=` Capital: ${i.capital[0]}`
body1.append(cap)

reg=document.createElement('p')
reg.innerText=` Region: ${i.region}`
body1.append(reg)

 code=document.createElement('p')
 code.innerText=` Country Code: ${i.altSpellings
[0]}`
 body1.append(code)

 buttons=document.createElement('button')
 buttons.innerText='Click For Weather'
 buttons.setAttribute('onclick','weatherapi(this)')
body1.append(buttons)




}

catch{
    //
}
}
}
api()

async function weatherapi(e){
    console.log(e.parentElement);
    var parent=e.parentElement.parentElement
    var lat=parent.getAttribute('lat')
    var lon=parent.getAttribute('lon')
    var API_key = '7c2a1ad54eb7a410b534febfc41746aa'
    var url1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
 
  v1=fetch(url1)
    out1=await v1
    prom1=out1.json()
    res1= await prom1
   
  try{
    console.log(res1)
   
  result=document.querySelector('.col-6')
  result.innerText=''
   nop=res1.weather[0]
value=` id: ${nop.id},  main: ${nop.main} ,  description: ${nop.description}, icon:${nop.icon}`
 console.log(nop)
 result.append(value)
 

  }
  catch{
    //
  }
   
}



