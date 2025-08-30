---
description:
aliases:
created: 2025-05-18
modified: 2025-08-30
tags:
  - field/computer
  - format/article
references:
  - https://www.youtube.com/watch?v=PgBzjlCcFvc
---

# Choice of Pivot
- 처음, 마지막 요소 피벗
- 랜덤 요소 피벗
- 중앙값 피벗
# Partition Algorithm
##  Naive Partition
- 피벗은 가장 왼쪽 값(혹은 마지막)
- 피벗 보다 작으면 왼쪽 임시 리스트에 추가
- 크거나 같으면 오른쪽 임시 리스트에 추가
- return `quicksort(left) + [pivot] + quicksort(right)`
- ```python
	def qsort(data):
		if len(data) <= 1:
			return data
			
		pivot = data[0]
		
		left, right = list(), list()
		for index in range(1, len(data)):
			if pivot > data[index]:
				left.append(data[index])
			else:
				right.append(data[index])
				
		#left = [ item for item in data[1:] if pivot > item]
		#right = [ item for item in data[1:] if pivot <= item]
	
		return qsort(left) + [pivot] + qsort(right)

## Lomuto Partition
- when `left_index < right_index`
- 최초 조건
	- `left_index = low -1` (pivot 보다 같거나 작은 값 )
	- `right_index = low` (looping 용 index) 
- 맨 오른쪽 요소를 `pivot`으로 삼는다
- loop
	- `if cmp(right_index, pivot)`
		- true -> `left_index++` + `swap(arr[left_index], arr[right_index])`
			- cmp가 `<` 라면
			- 현재 left_index는 피벗 보다 큰 값
			- 현재 right_index는 피벗 보다 작은 값, 고로 swap
	- `right_index++` loop
- `right_index`가 `pivot` 위치 전까지 오면(loop가 끝나면) `swap(arr[left_index + 1], arr[pivot])`
	- `pivot`은 순서상 제자리에 가게됨
- `left_side, right_side` 재귀로 `quick_sort` 호출 
- ```cpp
	template<typename T, typename Compare>
	int partition(vector<T>& arr, int low, int high, Compare cmp) {
	    int pivot = high;
	    int left  = low - 1;
	
	    for (int right = low; right < high; ++right) {
	        if (cmp(arr[right], arr[pivot])) {
	            left++;
	            swap(arr[left], arr[right]);
	        }
	    }
	    left++;
	    swap(arr[left], arr[pivot]);
	    return left;
	}
	
	template<typename T, typename Compare>
	void q_sort(vector<T>& arr, int low, int high, Compare cmp) {
	    if (low < high) {
	        int pivot = partition(arr, low, high, cmp);
	
	        q_sort(arr, low, pivot - 1, cmp);
	        q_sort(arr, pivot + 1, high, cmp);
	    }
	}