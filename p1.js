import { tampilkanCuaca } from "./ui.js"
export async function cariLokasi() {
    try{
         let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${kota.value}&count=1`)
         if(!response.ok) throw new Error('terjadi kocak')
         let data = await response.json() 
         let hasil=data.results
         if(!hasil) throw new Error('kota tidak ditemukan')
        return { latitude:hasil[0].latitude,longitude: hasil[0].longitude}
        }catch(error){
          tampilkanCuaca('lokasi' + error.message)
         }
    
}
 
export async function cuaca(latitude,longitude) {
    try{ let ko=await cariLokasi()
        let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${ko.latitude}&longitude=${ko.longitude}&current=temperature_2m,wind_speed_10m`)
        if(!response.ok)throw new Error('terjadi kesalahan')
        
    let data = await response.json()
    let current=data.current
    let hasil =`cuaca saat ini
suhu: ${current.temperature_2m}°C
Angin: ${current.wind_speed_10m} km/h`
       tampilkanCuaca(hasil)
    }catch(error)
    {console.log('cuaca'+ error.message)}
}