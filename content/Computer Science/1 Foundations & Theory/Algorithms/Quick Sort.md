---
description:
aliases:
created: 2025-05-18
modified: 2025-08-21
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
- 최초 조건
	- left_index = -1 (pivot 보다 같거나 작은 값 )
	- right_index = 0 (looping 용 index) 
- left_index < right_index
- 맨 오른쪽 요소를 pivot으로 삼는다
- loop
	- right_index 요소와 pivot 비교
		- 같거나 작으면 `left_index++` + `swap(arr[left_index], arr[right_index])`
		- 크면 pass
	- `right_index++`
- right_index가 pivot 위치 전까지 오면 `swap(arr[left_index + 1], arr[pivot])`
	- pivot은 제자리에 가게됨
- left_side, right_side 재귀로 quick_sort 호출 
- ```cpp
	void quickSort(int arr[], int low, int high){
		if (low < high){
			int pivot_index = partition(arr, low, high);
	
			quickSort(arr, low, pivot_index - 1);
			quickSort(arr, pivot_index + 1, high)
		}
	}
	
	int partition(int arr[], int low, int high){
		int pivot = arr[high];
		int left_index = (low - 1);
		
		for (int right_index = low; right_index < high; right_index++){
			if (arr[right_index] <= pivot){
				left_index++;
				swap(&arr[left_index], &arr[right_index]);	
			}
		}
		swap(&arr[left_index + 1], &arr[high]);
		return (left_index + 1);
	}
	

