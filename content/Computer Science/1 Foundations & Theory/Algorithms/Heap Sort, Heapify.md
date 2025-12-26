---
description:
aliases:
created: 2025-05-18
modified: 2025-07-04
---

- 완전이진트리 특성 활용
- ```cpp
	#include <iostream>
	#include <vector>
	using namespace std;
	template <typename T, typename Compare = std::less<T>>
	class pq {
	    vector<T> base;
	    Compare cmp;
	
		// 위에서 부터 heapify(for pop)
		// i = parent
		// l = child l
		// r = child r
	    void downheap(size_t i)
	    {
	        size_t best = i;
	        size_t l = i * 2 + 1;
	        size_t r = i * 2 + 2;
	
	        if (l < base.size() && cmp(base[l], base[best]))
	            best = l;
	
	        if (r < base.size() && cmp(base[r], base[best]))
	            best = r;
	
	        if (best != i) {
	            swap(base[best], base[i]);
	            downheap(best);
	        }
	    }
	
		// 아래서부터 heapify(for push)
	    void upheap()
	    {
	        size_t idx = base.size() - 1;
	
	        while (idx > 0) {
		        // p = parent node
	            size_t p = (idx - 1) / 2;
	            
	            if (!cmp(base[idx], base[p]))
	                break;
	                
	            swap(base[idx], base[p]);
	            idx = p;
	        }
	    }
	
	public:
	    void push(int i)
	    {
	        base.push_back(i);
	        upheap();
	    }
	
	    void print() const
	    {
	        int size = 1;
	        int count = 0;
	        for (size_t i = 1; i <= base.size(); ++i) {
	            cout << base[i - 1] << " ";
	            count++;
	
	            if (count == size) {
	                cout << "\n";
	                size = (size << 1);
	                count = 0;
	            }
	        }
	    }
	
	    int top()
	    {
	        int r = base[0];
	
	        swap(base[0], base[base.size() - 1]);
	        base.pop_back();
	        downheap(0);
	
	        return r;
	    }
	
	    bool empty()
	    {
	        return base.empty();
	    }
	};
	```