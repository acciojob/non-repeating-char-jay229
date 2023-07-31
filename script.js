//your JS code here. If required.
//let str=prompt("Enter a string")
let map=new Map();
for(let i=0;i<str.length;i++){
	let freq=1;
	if(map.has(str[i])){
		freq=map.get(str[i]);
		freq+=1;
	}
	map.set(str[i],freq)
}
let ans;
for (let i = 0; i < str.length; i++) {
		let freq=map.get(str[i])
		if (freq==1) {
			ans=str[i];
			break;
			
		}
}


alert(ans)

