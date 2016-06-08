function phoneMaker(type, brand) {
    return {
        setType: function (newType) {
            if(typeof(type) !== 'string' ){
                console.error('The element has to be a string');
                return;
            }
            type = newType;        
        },
        getType: function () {
            return type;
        },
        setBrand: function (newBrand) {
            if(typeof(newBrand !== 'string')){
                console.error('The element has to be a string');
                return;
            }
            brand = newBrand;        
        },
        getBrand: function () {
            return brand;
        }
    };
}

var phone = phoneMaker('SmartPhone', 'Apple');

console.log(phone.getType());
console.log(phone.getBrand());