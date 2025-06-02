---
description:
aliases:
created: 2025-05-18
modified: 2025-06-02
---

# Algorithm Library
- sort
	- sort(first, last)
	- stable_sort(first, last) - 안정 정렬
	- partial_sort(first, middle, last) - middle까지 부분 정렬
	- nth_element(first, nth, last) - n번째 원소를 nth 위치에 둔다
		- nth 앞,뒤 원소는 순서 보장 안됨
	- is_sorted(first, last) - 정렬 여부 확인
- binary search
	- binary_search(first, last, value) - value 존재 여부 반환
	- lower_bound(first, last, value) - value이상 첫 위치 반환
	- upper_bound(first, last, value) - value 초과 첫 위치 반환
	- equal_range(first, last, value) - [lower_bound, upper_bound] 구간 반환
- min / max
	- min(a, b)
	- max(a, b)
	- minmax(a, b) - pair(min, max) 반환
	- min_element(first, last)
	- max_element(first, last)
	- minmax_element(first, last)
- permutation, set
	- unique(first, last) - 중복 원소 제거, 유일 원소 정렬
	- next_permutation(first, last) - 사전순 다음 순열
	- prev_permutation(first, last) - 사전순 이전 순열
	- is_permutation
	- set_union(first1, last1, first2, last2, ouput) - 합집합
	- set_intersection(first1, last1, first2, last2, output) - 교집합
	- set_difference(first1, last1, first2, last2, output) - 차집합
	- set_symmetric_difference(first1, last1, first2, last2, output) - 대칭 차집합
	- includes
- math
	- accumulate - 구간 합
	- iota
	- gcd(a, b)
	- lcm(a, b)
	- modulus
	- partial_sum(first, last, d_first, (op)) ^f67ff6
	- adjacent_difference
		- code
		- 
			```cpp
			std::array<int, 10> a {1};
			
			std::adjacent_difference(std::begin(a), std::prev(std::end(a)),
									 std::next(std::begin(a)), std::plus<>{});
			
			println("Fibonacci, a = ", a);
			// Fibonacci, a = 1 1 2 3 5 8 13 21 34 55
			```
- data control, manipulation
	- reverse
	- rotate
	- fill
	- replace
	- shuffle
	- swap
	- clamp
- condition
	- any_of()
	- all_of()
	- none_of()
	- equal
	- lexicographical_compare
- copy and transform
	- copy
	- copy_if
	- reverse_copy
	- transform
	- unique
	- remove
	- remove_if
- `auto eq = [](int x, int y) { return x == y; };`
- boolalpha
- distance
- inplace_merge
- find
- find_if

# Data Structures
- hash
	- unordered_map
	- unordered_set
	```cpp
	unordered_map<string, int> myMap = {{"apple", 10}, {"banana", 20}};
	auto it = myMap.find("apple");
	if (it != myMap.end()) {
		it->second = 50;
	}
	```
- map, set
- pair
	- `make_pair({a, b})`
- tuple
	- `get<n>(mytuple)`
	- `make_tuple(...)`
- priority_queue
	- `priority_queue<type, container<type>, op<type> >`
	- `priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq`
	- 허프만 알고리즘
	