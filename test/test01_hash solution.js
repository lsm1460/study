participant = ["mislav", "stanko", "mislav", "ana", "ana"]
completion = ["stanko", "ana", "mislav"]

function solution(participant, completion) {
    let key = new Map()

    for(let i in participant){
        if(!key.has(participant[i])){
            key.set(participant[i],1)
        }else{
            key.set(participant[i], key.get(participant[i])+1)
        }        
    }

    for(let i in completion){
		let count = key.get(completion[i])
        key.set(completion[i], count-1)
    }

	var value = []
	
	key.forEach((v,k,m) => {
		if(v > 0){
			value.push(k)
		}
	})
	
	return value[0];
}

solution(participant, completion)