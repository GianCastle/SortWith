//Sorting algorithms if i need it one day   

function SortWith() {};

//Sorting Algorithm: The Cocktail Shaker Sort
// Complexity: O(n^2)
SortWith.cocktail = function (arr) {
    for (var i = 0; i < arr.length / 2; ++i) {
        var swap = false;
        for (var j = i; j < arr.length - i - 1; ++j) {
            if (arr[j] < arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swap = true;
            }
        }
        for (var j = arr.length - 2 - i; j > i; --j) {
            if (arr[j] > arr[j - 1]) {
                var tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
                swap = true;
            }
        }
        if (!swap)
            break;
    }
}
SortWith.bubble = function (arr) {
    var aux;
    for (var i = 0; i < arr.length; ++i) {
        for (var j = 0; j < arr.length - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
}

SortWith.selection = function (arr) {
    for (var i = 0; i < arr.length - 1; ++i) {
        var max = i;
        for (var j = i + 1; j < arr.length; ++j) {
            if (arr[j] > arr[max])
                max = j;
        }
        var aux = arr[i];
        arr[i] = arr[max];
        arr[max] = aux;
    }
}

SortWith.insertion =  function(arr) {
    for(var i = 0; i < arr.length - 1; ++i) {
        var j = i + 1;
        var aux = arr[j];
        while( j > 0 && aux > arr[j - 1]) {
            arr[j] = arr[j - 1];
            --j;
        }
        arr[j] = aux;
    }
    
    for (var h = a.length; h = parseInt(h / 2);) {
        for (var i = h; i < a.length; i++) {
            var k = a[i];
            for (var j = i; j >= h && k < a[j - h]; j -= h)
                a[j] = a[j - h];
            a[j] = k;
        }
    }
    return arr;
} 


/*  Function to create an array[elements] and put some random numbers for testing
 *  Where [Elements] is the amount of elements to be stored in the array
 *  WHere [range] is the range of the numbers to be stored in the array
 */
SortWith.createRamdomArr = function (elements, range) {
    var _arr = [];
    while (--elements) {
        _arr.push(Math.floor(Math.random() * range) + 1);
    }

    return _arr;
}

