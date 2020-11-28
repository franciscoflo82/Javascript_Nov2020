function bubbleSort (items){
    const elementos =  items.length
    console.log ("Elementos: ", elementos)

    for (var i = (elementos - 1); i > 0 ; i--){
        console.log ("Index i : ", i)
        for (var j = (elementos - i); j > 0; j--){
            console.log ("Index j : ", j)
            console.log ("elemento1: ", items[j] , " contra ", items[j-1] )
            if (items[j] < items [j - 1]){
                // Refactor aquí
                [items[j], items[j - 1]] = [items [j -1], items[j]]
                //Mare,Paco = Paco, Mare
            }
        }
    }
    return items
}

//antes de ordenar
var array = [7,32,91,15,17,25,0,40,8,234,-4]
//var array = [8,5,9]
console.log (array)

//despues de ordenar
console.log (bubbleSort(array))
