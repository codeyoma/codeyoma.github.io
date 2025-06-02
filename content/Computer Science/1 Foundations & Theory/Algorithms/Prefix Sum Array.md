---
description:
created: 2025-05-18
modified: 2025-06-02
aliases:
  - psum
---

- p_sum
- 
	```cpp
	vector<int> findPrefixSum(vector<int> &arr) {
	    int n = arr.size();
	    vector<int> prefixSum(n);
	    prefixSum[0] = arr[0];
	    
	    for (int i = 1; i < n; i++)
	        prefixSum[i] = prefixSum[i - 1] + arr[i];
	        
	    return prefixSum;
	}
	```
	- library ![[Terms#^f67ff6]]
- [[Imos Algorithm|imos]]