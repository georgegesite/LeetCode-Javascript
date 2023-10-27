var twoSum = function(nums, target) {
    const numIndexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (complement in numIndexMap) {
            return [numIndexMap[complement], i];
        }

        numIndexMap[nums[i]] = i;
    }

    return [];
};