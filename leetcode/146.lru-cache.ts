/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 *
 * https://leetcode.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (40.52%)
 * Likes:    16688
 * Dislikes: 744
 * Total Accepted:    1.3M
 * Total Submissions: 3.1M
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * Design a data structure that follows the constraints of a Least Recently
 * Used (LRU) cache.
 * 
 * Implement the LRUCache class:
 * 
 * 
 * LRUCache(int capacity) Initialize the LRU cache with positive size
 * capacity.
 * int get(int key) Return the value of the key if the key exists, otherwise
 * return -1.
 * void put(int key, int value) Update the value of the key if the key exists.
 * Otherwise, add the key-value pair to the cache. If the number of keys
 * exceeds the capacity from this operation, evict the least recently used
 * key.
 * 
 * 
 * The functions get and put must each run in O(1) average time complexity.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * Output
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * Explanation
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // cache is {1=1}
 * lRUCache.put(2, 2); // cache is {1=1, 2=2}
 * lRUCache.get(1);    // return 1
 * lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
 * lRUCache.get(2);    // returns -1 (not found)
 * lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
 * lRUCache.get(1);    // return -1 (not found)
 * lRUCache.get(3);    // return 3
 * lRUCache.get(4);    // return 4
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= capacity <= 3000
 * 0 <= key <= 10^4
 * 0 <= value <= 10^5
 * At most 2 * 10^5 calls will be made to get and put.
 * 
 * 
 */

// @lc code=start
class DNode {
  key: number
  value: number | null = null

  pre: DNode | null = null
  post: DNode | null = null
}

class LRUCache {
  private count: number
  private head: DNode
  private tail: DNode
  private cache: Map<number, DNode> = new Map()

  constructor(private capacity: number) {
    this.count = 0
    this.head = new DNode()
    this.head.pre = null

    this.tail = new DNode()
    this.tail.post = null

    this.head.post = this.tail
    this.tail.pre = this.head
  }

  get(key: number): number {
    const node = this.cache.get(key)
    if (!node) return -1

    this.moveToHead(node)

    return node.value!
  }

  put(key: number, value: number): void {
    const node = this.cache.get(key)
    if (node) {
      node.value = value
      this.moveToHead(node)
      return
    }

    const newNode = new DNode()
    newNode.key = key
    newNode.value = value
    this.cache.set(key, newNode)
    this.addNode(newNode)
    this.count++

    if (this.count > this.capacity) {
      const tail = this.popTail()
      this.cache.delete(tail.key)
      this.count--
    }
  }

  private addNode(node: DNode) {
    node.pre = this.head
    node.post = this.head.post

    this.head.post!.pre = node
    this.head.post = node
  }

  private removeNode(node: DNode) {
    const pre = node.pre
    const post = node.post

    pre!.post = post
    post!.pre = pre
  }

  private moveToHead(node: DNode) {
    this.removeNode(node)
    this.addNode(node)
  }

  private popTail(): DNode {
    const node = this.tail.pre
    this.removeNode(node!)

    return node!
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
