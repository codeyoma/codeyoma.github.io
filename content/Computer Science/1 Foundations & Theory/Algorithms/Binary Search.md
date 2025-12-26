---
description:
aliases:
created: 2025-05-18
modified: 2025-12-27
---

- [[Two Pointers]] 기법의 일종
- 결정 문제에서 많이 쓰인다
	- 어떤 값 x가 해가 될 수 있는지를 확인할 수는 있다면, 이분 탐색으로 가능한 값의 범위를 줄여가며 최적 해를 찾아낼 수 있다
	- 특정 값 가정
		- 가능하면 -> 더 좋은 값으로 이동
		- 불가능하면 -> 가능한 값으로 이동
- 값 찾기
	-  ```cpp
		int binary_search(int[] nums, int target){
			int left = 0;
			int right = nums.length - 1;
			while (left <= right){
				int mid = left + (right - left) / 2;
				if (nums[mid] == target){
					return mid;
				} else if (nums[mid] < target){
					left = mid + 1;
				} else if (nums[mid] > target){
					right = mid - 1;
				}
			}
			return -1;
		}
		```
- 왼쪽 가장자리 값 찾기
	- ```cpp
		int left_bound(int[] nums, int target){
			int left = 0;
			int right = nums.length - 1;
			while (left <= right){
				int mid = left + (right - left) / 2;
				if (nums[mid] == target){
					// 반환 안하고 오른쪽 가장자리를 축소하여 왼쪽 가장자리 확정
					right = mid - 1;
				} else if (nums[mid] < target){
					left = mid + 1;
				} else if (nums[mid] > target){
					right = mid - 1;
				}
			}
			// left 경계확인
			if (left > nums.length || nums[left] != target)
				return -1;
			return left;
		}
		```
- 오른쪽 가장자리 값 찾기
	- ```cpp
		int right_bound(int[] nums, int target){
			int left = 0;
			int right = nums.length - 1;
			while (left <= right){
				int mid = left + (right - left) / 2;
				if (nums[mid] == target){
					// 반환 안하고 왼쪽 가장자리를 축소하여 오른쪽 가장자리 확정
					left = mid + 1;
				} else if (nums[mid] < target){
					left = mid + 1;
				} else if (nums[mid] > target){
					right = mid - 1;
				}
			}
			// right 경계확인
			if (right < 0 || nums[right] != target)
				return -1;
			return right;
		}
		```
