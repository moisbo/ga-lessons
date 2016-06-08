var phone = {
    type: 'smartphone',
    size: {
        with: 35,
        height: 100
    },
    brand: "Apple",
    model: "iPhone 6",
    cost: '$500',
    greeting :function() {
        console.log('Hello from my function');
    },
    OS:'iOS 9'
};

var phoneKeys = Object.keys(phone);

phoneKeys.forEach(function (key) {
    if(typeof phone[key] == 'object'){   
        printObj(phone[key]);
    }else if(typeof phone[key] == 'function'){
        phone[key]();
    }else{
        console.log(phone[key]);
    }
});

function printObj(obj){
    var keys = Object.keys(obj);
    keys.forEach(function (key) {
        console.log(key + ': ' +obj[key]);
    });
};