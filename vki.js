/*Beden Kitli İndeksi Uygulaması 
Vücut kitle indeksi, vücut ağırlığının boy uzunluğunun karesine bölünmesiyle (kg/m²) hesaplanır.

18, 5 kg/m² ‘nin altındaki sonuçlar: İdeal kilonun altında
18, 5 kg/m² ile 24, 9 kg/m² arasındaki sonuçlar: İdeal kiloda
25 kg/m² ile 29, 9 kg/m² arasındaki sonuçlar: İdeal kilonun üstünde
30 kg/m² ile 39, 9 kg/m² arasındaki sonuçlar: İdeal kilonun çok üstünde (obez)
40 kg/m² üzerindeki sonuçlar: İdeal kilonun çok üstünde (morbid obez)


*/


let kilo =Number(window.prompt('Kilonuzu Giriniz'));
let boy =Number(window.prompt('Boyunuzu cm olarak Giriniz'));
boy=Math.pow(boy,2);
let vki=(kilo/boy)*10000;
console.log(vki);

if (vki < 18.5) {
    console.log('ideal kilonun altındasınız');
    
}
 else if (vki >= 18.5 && vki < 24.9) {
    console.log ('İdeal Kilodasınız');

}else   if (vki >= 24.9 && vki < 29.9) {
    console.log ('İdeal Kilonun Üstündesiniz');

} else if (vki >= 30 && vki < 39.9) {
    console.log ('İdeal Kilonun Çok Üstünde OBEZ');

} else  if (vki >= 40 ) {
    console.log ('İdeal kilonun çok üstünde (morbid obez)')
} 