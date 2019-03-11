function solution(priorities, location) {
    var answer = location
    var origin = priorities
    var temp = new Array;
    priorities.forEach(function(item){
        temp.push(item)
    })
    var max = findMax(origin)
    var mine = origin[answer]
    for(var num of origin){
		if(num < max){
			temp.shift()
			temp[temp.length] = num
			if(answer == 0){
				answer = temp.length
			}else{
				answer--
			}
        }else if(num == max){
			if(mine == max){
                break
            }else{
				if(answer == 0){
					answer = temp.length
				}else{
					answer--
				}
			}
			temp.shift()
			max = findMax(temp)
        }
    }

    return answer+1
}

function findMax(array){
    var max = array[0]

    array.forEach(function(num){
        if(max < num){
           max = num
        }
    })

    return max
}