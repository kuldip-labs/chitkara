let Factory = () => {  
    let data;  
    return {
        getType: (type) => {  
            if (type === 'one') {  
                data = require('./class-one')();  
            }  
            if (type === 'two') {  
                data = require('./class-two')();  
            }  
            return data;  
        }  
    };
};  
console.log(Factory().getType('two').describe());  