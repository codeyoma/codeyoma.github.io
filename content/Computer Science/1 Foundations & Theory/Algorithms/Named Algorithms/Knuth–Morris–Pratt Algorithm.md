---
created: 2025/5/09 08:29:04
modified: 2025/5/09 08:35:14
aliases:
  - kmp
  - kmp algorithm
---
- ```cpp
	int M = //string size;
	vector<int> pi(M, 0);
	
	for (int i = 1; i < M; ++i) {
		
		int j = pi[i - 1];
			
		while (j > 0 && comb[i] != comb[j])
			j = pi[ j - 1];
			
		if (comb[i] == comb[j]) ++j;
		
		pi[i] = j;
	}
	
	return pi[M-1]; 