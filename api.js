import { cariLokasi } from "./p1.js"
import { cuaca } from "./p1.js"
import { tampilkanCuaca } from "./ui.js"
const kota = document.getElementById('kota')

const btnCheck=document.getElementById('btnCheck')






btnCheck.addEventListener('click',function(){
    tampilkanCuaca('sedang memuat')
 cuaca()
 .then(function(response){
    return response
 })
 
})







