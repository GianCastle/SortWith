//Sorting algorithms if i need it one day   

function SortWith() {}; 
    

// Sorting Algorithm: The Cocktail Shaker Sort
// Time complexity: O(n2)
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


// Sorting Algorithm: The Bubble Sort
// time complexity:  O(n2)
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


// Sorting algorithm: Selection Sort
// Time complexity: O(n2) 
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


// Sorting algorithm: Inserstion Sort
// Time complexity: O(n2)
SortWith.insertion = function (arr) {
    for (var i = 0; i < arr.length - 1; ++i) {
        var j = i + 1;
        var aux = arr[j];
        while (j > 0 && aux > arr[j - 1]) {
            arr[j] = arr[j - 1];
            --j;
        }
        arr[j] = aux;
    }

    for (var h = arr.length; h = parseInt(h / 2);) {
        for (var i = h; i < arr.length; i++) {
            var k = arr[i];
            for (var j = i; j >= h && k < arr[j - h]; j -= h)
                arr[j] = arr[j - h];
            arr[j] = k;
        }
    }
    return arr;
}


// Sorting algorithm: The Quick Sort
// Time complexity: O(n log n)
SortWith.quickSort = function (arr) {
    var left = []; 
    var rigth = [];
    var piv = arr[0];

    for (var i = 0; i < arr.length; ++i) {
        arr[i] < piv ? left.push(arr[i]) : rigth.push(arr[i]);
    }

    return SortWith.quickSort(left).concat(piv, SortWith.quickSort(rigth));
}


// Sorting algotithm: Merge Sort
// Time complexity: O(n log n)
SortWith.mergesort = function (arr) {
    var a, b, n, pivot;
    n = arr.length;
    if (n === 1)
        return arr;
    pivot = Math.floor(n / 2);
    return (function (a, b) {
        var c, i, j, k, max;
        i = j = k = 0;
        c = [];
        max = a.length + b.length;
        while (i < a.length && j < b.length)
            if (a[i] < b[j])
                c[k++] = a[i++];
            else
                c[k++] = b[j++];

        while (i < a.length)
            c[k++] = a[i++];

        while (j < b.length)
            c[k++] = b[j++];

        return c;
    })(mergesort(arr.slice(0, pivot)), mergesort(arr.slice(pivot, n)));
};


/*  Function to create an array[elements] and put some random numbers for testing
 *  Where [Elements] is the amount of elements to be stored in the array
 *  WHere [range] is the range of the numbers to be stored in the array
 * Time complexity: O(n)
 */

SortWith.createRamdomArr = function (elements, range) {
    var arr = [];
    while (--elements) {
        arr.push(Math.floor(Math.random() * range) + 1);
    }

    return arr;
}

