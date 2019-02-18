function solution(clothes) {
    var answer = 1
    var result = {}
    clothes.forEach( c=>{
        var wear = c[0]
        var type = c[1]
        if(result[type] == undefined){
            result[type] = new Array;
            result[type] = 1
        }else{
            result[type] = result[type] + 1
        }
    })
    
    Object.values(result).forEach( v => {
        answer = answer * (v+1)
    })
    
    return answer - 1
}