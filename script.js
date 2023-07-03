function threeSum(arr, target) {
// write your code here
	arr.sort((a,b)=>a-b);

	let closeSum=Infinity;
	for(leti=0;i<arr.length-2;i++){
		let left=i+1;
		let right=arr.length-1;

		while(left<right){
			const sum=arr[i]+arr[left]+arr[right];
			const diff=Math.abs(sum-target);


			if(diff<Math.abs(closeSum-target)){
				closeSum=sum;
				
			}
			if(sum<target){
				left++;
				
			}else if(sum>target){
				right--;
			}else{
				return sum;
			}
		}
	}
  return closeSum;
}

module.exports = threeSum;
