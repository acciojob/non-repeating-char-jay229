//your JS code here. If required.
let str=prompt("Enter a string")
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
map.forEach((value,key)=>{
	if (value==1) {
		ans=key;
		break;
	}
})
alert(ans)

