
var outer = (function(){
    var obj = {
        privateData:"Private Data"
    };
    return {
        inner:function(){
            console.log(obj.privateData);
        }
    };
})();

outer.inner();