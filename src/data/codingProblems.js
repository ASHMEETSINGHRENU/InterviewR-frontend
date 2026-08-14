export const codingProblems = [
  {
    id: "two-sum",
    title: "1. Two Sum",
    difficulty: "Easy",
    category: "Arrays & Hash Maps",
    companies: ["Google", "Amazon", "Meta", "Microsoft"],
    acceptance: "88.4%",
    description: `Given an array of integers \`nums\` and an integer \`target\`, return the **indices** of the two numbers such that they add up to \`target\`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice. You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1, 2]",
        explanation: "nums[1] + nums[2] == 6."
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0, 1]",
        explanation: "nums[0] + nums[1] == 6."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your code here
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
      python: `def twoSum(nums, target):
    # Write your code here
    seen = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in seen:
            return [seen[diff], i]
        seen[num] = i
    return []`,
      cpp: `#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    for (int i = 0; i < nums.size(); i++) {
        int diff = target - nums[i];
        if (map.count(diff)) {
            return {map[diff], i};
        }
        map[nums[i]] = i;
    }
    return {};
}`,
      java: `import java.util.HashMap;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if (map.containsKey(diff)) {
                return new int[] { map.get(diff), i };
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`
    },
    testCases: [
      { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { input: [[3, 2, 4], 6], expected: [1, 2] },
      { input: [[3, 3], 6], expected: [0, 1] }
    ],
    hints: [
      "Try using a Hash Map to store previously seen numbers and their indices.",
      "The complement of any number `x` is `target - x`. Check if the complement is already in your Hash Map."
    ],
    aiReview: {
      optimalTimeComplexity: "O(N)",
      optimalSpaceComplexity: "O(N)",
      overview: "Using a Hash Map (or JavaScript Map/Object) allows looking up complements in O(1) average time, reducing brute force O(N^2) to linear O(N).",
      idealCode: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
    }
  },
  {
    id: "valid-palindrome",
    title: "2. Valid Palindrome",
    difficulty: "Easy",
    category: "Strings & Two Pointers",
    companies: ["Meta", "Apple", "Uber"],
    acceptance: "91.2%",
    description: `A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Alphanumeric characters include letters and numbers. Given a string \`s\`, return \`true\` if it is a palindrome, or \`false\` otherwise.`,
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.'
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.'
      }
    ],
    constraints: [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters."
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your code here
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}`,
      python: `def isPalindrome(s: str) -> bool:
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]`,
      cpp: `#include <string>
#include <cctype>
using namespace std;

bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++; right--;
    }
    return true;
}`,
      java: `public class Solution {
    public boolean isPalindrome(String s) {
        String cleaned = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int left = 0, right = cleaned.length() - 1;
        while (left < right) {
            if (cleaned.charAt(left) != cleaned.charAt(right)) return false;
            left++; right--;
        }
        return true;
    }
}`
    },
    testCases: [
      { input: ["A man, a plan, a canal: Panama"], expected: true },
      { input: ["race a car"], expected: false },
      { input: [" "], expected: true }
    ],
    hints: [
      "Filter out non-alphanumeric characters and normalize casing.",
      "Use two pointers (left starting at 0, right starting at length - 1) moving inward."
    ],
    aiReview: {
      optimalTimeComplexity: "O(N)",
      optimalSpaceComplexity: "O(1) in-place or O(N) cleaned string",
      overview: "Two-pointer traversal verifies palindrome property in O(N) time with minimal space allocation.",
      idealCode: `function isPalindrome(s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0, j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}`
    }
  },
  {
    id: "valid-parentheses",
    title: "3. Valid Parentheses",
    difficulty: "Easy",
    category: "Stacks & Queues",
    companies: ["Amazon", "Microsoft", "Google", "LinkedIn"],
    acceptance: "85.7%",
    description: `Given a string \`s\` containing just the characters \`'(' \`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    examples: [
      {
        input: 's = "()"',
        output: "true"
      },
      {
        input: 's = "()[]{}"',
        output: "true"
      },
      {
        input: 's = "(]"',
        output: "false"
      }
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'."
    ],
    starterCode: {
      javascript: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}`,
      python: `def isValid(s: str) -> bool:
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if top != mapping[char]:
                return False
        else:
            stack.push(char)
    return not stack`,
      cpp: `#include <stack>
#include <string>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') st.push(c);
        else {
            if (st.empty()) return false;
            if (c == ')' && st.top() != '(') return false;
            if (c == '}' && st.top() != '{') return false;
            if (c == ']' && st.top() != '[') return false;
            st.pop();
        }
    }
    return st.empty();
}`,
      java: `import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}`
    },
    testCases: [
      { input: ["()"], expected: true },
      { input: ["()[]{}"], expected: true },
      { input: ["(]"], expected: false },
      { input: ["([)]"], expected: false }
    ],
    hints: [
      "Use a Stack (LIFO data structure).",
      "When encountering an open bracket, push it onto the stack.",
      "When encountering a closing bracket, check if the stack top matches."
    ],
    aiReview: {
      optimalTimeComplexity: "O(N)",
      optimalSpaceComplexity: "O(N)",
      overview: "Stack holds open brackets. Matching closing brackets pop the top element. Linear time scan with space proportional to depth.",
      idealCode: `function isValid(s) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  for (const c of s) {
    if (c in pairs) {
      if (stack.length === 0 || stack.pop() !== pairs[c]) return false;
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}`
    }
  },
  {
    id: "max-subarray",
    title: "4. Maximum Subarray (Kadane's Algorithm)",
    difficulty: "Medium",
    category: "Dynamic Programming",
    companies: ["Amazon", "Google", "Microsoft", "Apple"],
    acceptance: "79.1%",
    description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return *its sum*.`,
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        input: "nums = [1]",
        output: "1"
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23"
      }
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`,
      python: `def maxSubArray(nums):
    max_sum = current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum`,
      cpp: `#include <vector>
#include <algorithm>
using namespace std;

int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0], currentSum = nums[0];
    for (size_t i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}`,
      java: `public class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0], currentSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }
}`
    },
    testCases: [
      { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
      { input: [[1]], expected: 1 },
      { input: [[5, 4, -1, 7, 8]], expected: 23 }
    ],
    hints: [
      "Kadane's Algorithm maintains a running sum.",
      "If the running sum becomes less than the current element alone, reset running sum to the current element."
    ],
    aiReview: {
      optimalTimeComplexity: "O(N)",
      optimalSpaceComplexity: "O(1)",
      overview: "Kadane's algorithm is optimal in linear O(N) time and constant O(1) space.",
      idealCode: `function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let currMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currMax);
  }
  return maxSoFar;
}`
    }
  },
  {
    id: "async-promise-all",
    title: "5. Custom Promise.all Polyfill",
    difficulty: "Medium",
    category: "Async JS",
    companies: ["Meta", "Uber", "Airbnb", "Netflix"],
    acceptance: "76.3%",
    description: `Write a function \`promiseAll(functions)\` that accepts an array of asynchronous functions. Each function returns a Promise.

Return a new Promise that resolves with an array of values of all promises returned by the functions in the same order as they were passed in, once all input promises resolve. If any promise rejects, immediately reject with the first error.`,
    examples: [
      {
        input: "functions = [() => new Promise(res => setTimeout(() => res(5), 200))]",
        output: '{"t": 200, "resolved": [5]}'
      }
    ],
    constraints: [
      "functions is an array of async functions",
      "0 <= functions.length <= 10"
    ],
    starterCode: {
      javascript: `function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    if (functions.length === 0) {
      resolve([]);
      return;
    }
    const results = new Array(functions.length);
    let completed = 0;
    
    functions.forEach((fn, idx) => {
      fn()
        .then(res => {
          results[idx] = res;
          completed++;
          if (completed === functions.length) resolve(results);
        })
        .catch(err => reject(err));
    });
  });
}`,
      python: `# Async JS Polyfill (JS runtime primary for this web challenge)
def promiseAll(functions):
    return "Async JS Challenge - Run in JS tab"`,
      cpp: `// Async JS Polyfill - Select JavaScript tab to test`,
      java: `// Async JS Polyfill - Select JavaScript tab to test`
    },
    testCases: [
      { input: [[]], expected: [] }
    ],
    hints: [
      "Track `completed` count and array index for each resolved promise.",
      "Reject as soon as any promise fails."
    ],
    aiReview: {
      optimalTimeComplexity: "O(N)",
      optimalSpaceComplexity: "O(N)",
      overview: "Standard polyfill tracks execution order using array indexing and resolves when completed counter matches array length.",
      idealCode: `function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    if (!functions.length) return resolve([]);
    const results = [];
    let resolvedCount = 0;
    functions.forEach((fn, i) => {
      Promise.resolve(fn())
        .then(val => {
          results[i] = val;
          resolvedCount++;
          if (resolvedCount === functions.length) resolve(results);
        })
        .catch(reject);
    });
  });
}`
    }
  }
];
