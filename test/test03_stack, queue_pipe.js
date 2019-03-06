
function solution(arrangement) {
    var answer = 0, test = [];
	
	//레이저 L 로 표시
	var laserArrangement = getLaserPosition(arrangement);
	var i=0;

	for(var x in laserArrangement){
		if(laserArrangement[x] == "("){
			test.push(1);
		}else if(laserArrangement[x] == ")"){
			test.pop();
			answer += 1;
		}else{
			answer += test.length;
		}
	}
	
   return answer;
}

function getLaserPosition(arrangement){
	return arrangement.replace(/\(\)/gi, "L").split("");
}