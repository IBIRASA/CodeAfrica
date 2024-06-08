
function hasContiguousSubarrayWithSum(arr, target) {
    let left = 0; 
    let sum = 0; 

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while (sum > target) {
            sum -= arr[left];
            left++;
        }
        if (sum === target) {
            return true;
        }
    }
    return false;
}
function checkSubarraySum() {
    const inputArray = document.getElementById("inputArray").value.trim();
    const targetSum = parseInt(document.getElementById("targetSum").value);

    if (!inputArray || isNaN(targetSum)) {
        document.getElementById("result").textContent = "Please enter a valid array and target sum.";
        return;
    }
    const arr = inputArray.split(',').map(num => parseInt(num));

    const result = hasContiguousSubarrayWithSum(arr, targetSum);

    if (result) {
        document.getElementById("result").textContent = "Yes, there exists a contiguous subarray with the target sum.";
    } else {
        document.getElementById("result").textContent = "No, there is no contiguous subarray with the target sum.";
    }
}
