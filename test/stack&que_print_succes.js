function solution(priorities, location) {
	var answer = 0, max = Math.max.apply(null, priorities);
	
	while(priorities.length > 0){
		//최대값이면
		if(priorities[0] == max){
			priorities.shift();
			max = Math.max.apply(null, priorities);
			answer++;
			if(location == 0)break;
			location--;
			
		}else{
			priorities.push(priorities[0]);
			priorities.shift();
			if(location == 0){
				location = priorities.length-1;
			}else{
				location--;
			}

		}

	}
	
	return answer;
}