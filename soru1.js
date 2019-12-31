/*
1. Problem :
    Parametre olarak bir array alacak. 
    Array içerisinde string veya number tipi elemanlar olabilir. 
    Bu array içerisinde tekrarlanan elemanlardan olusan yeni bir array'i console'a 
    yazdıran fonksiyonu yazmak. 

    Örneğin : 
    console.log(func_name ([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));  ---> [4, 7] 
    olacak şekilde.
 */


let tekrarEdenDegerleriBul = function (array) {

    let tekrarEdenler = array.filter(function(item,index){
      return array.indexOf(item) != index;    
    })
    
    return tekrarEdenler;

}

console.log(tekrarEdenDegerleriBul ([2, -2, 3, 5, 6, 7, 6, -2, 'ali', 'veli', 'ali']));


/*
let tekrarEdenElemanlar = [];

let tekrarEdenDegerleriBul = function (array) {

let i,j;

for ( i = 0; i < array.length; i++) {

    for ( j = i + 1; j < array.length; j++) {

        if (array[i] == array[j] && tekrarEdenElemanlar.indexOf(array[i]) == -1 ) {
           // indexOf = - 1 ise bu deger indexte yok demektir
           
           tekrarEdenElemanlar.push(array[i]);
        }
    }
}

return tekrarEdenElemanlar;

}

console.log(tekrarEdenDegerleriBul ([2, 3, 5, 6, 6, 2, -2, -2, 'ali', 'veli', 'ali']));
*/
