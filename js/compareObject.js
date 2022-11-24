function compareObject(obj1, obj2) {
    var result = true;
    if (typeof obj2 === 'object') {
        for (var key in obj1) {
            if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object'){
                result = compareObject(obj1[key], obj2[key]);

            }
            else if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
                var is_same = (obj1[key].length == obj2[key].length) && obj1[key].every(function(element, index) {
                    return element === obj2[key][index]; 
                });
                result = is_same;
            }
            else if (obj1[key] != obj2[key]) {
                return false;
            }
        }
    }else{
        result = false;
    }

    return result;
}
module.exports = compareObject;