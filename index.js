function largestSubarraySum(array) {

    let localMax = array[0]
    let globalMax = 0

    for (let i = 1; i < array.length; i++) {
      if (localMax < 0) {
          localMax = array[i]
      } else {
          localMax += array[i]
      }
      if (globalMax < localMax) {
          globalMax = localMax
      }
    }
    return globalMax
}