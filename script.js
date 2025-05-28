function stringChop(str, size) {
  let res = [];
	if(str === "")
		return [];
	str = str.toString();
	size  = +size;
	for(let i=0;i<str.length;i+=size){
       res.push(str.split("").slice(i,i+size).join(""));
	}
	
   return res;
}


 
//Doot change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

