participant = ["mislav", "stanko", "mislav", "ana", "ana"]
completion = ["stanko", "ana", "mislav"]

function solution(participant, completion) {
    let key = {}

    for(let i in participant){
		var name = participant[i];
		var check = name in key;
        if(!check){
            key[name] = 1
        }else{
			key[name] = key[name] + 1
        }        
    }

    for(let i in completion){
		var name = completion[i]
		let count = key[name]
        key[name] = count-1
    }

	var value = []
	
	Object.keys(key).map((k,i) => {
		var v = key[k];
		if(v > 0){
			value.push(k)
		}
	});
	
	return value[0];
}

solution(participant, completion)