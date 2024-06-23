import TreeNode from "./TreeNode";

const root: TreeNode = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(5);
root.left.left.left.left = new TreeNode(6);

function bfsBinaryTree(root: TreeNode, k: number): TreeNode {
    let node: TreeNode = root;
    let queue: Array<TreeNode> = [];
    queue.push(node);
    while (queue.length) {
        //@ts-ignore
        node = queue.shift();
        if (node.val === k) return node;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return node;
}

function getMaxLength(root: TreeNode): number {
    if (!root) return 0;
    let node: TreeNode = root;
    let queue: Array<TreeNode> = [];
    queue.push(node);
    let height: number = 0;
    while (queue.length) {
        //@ts-ignore
        node = queue.shift();
        height++;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return height;
}

function findClosestLeaf(root: TreeNode, k: number): number {
    let found: TreeNode = bfsBinaryTree(root, k);
    //@ts-ignore
    let leftHeight = getMaxLength(found.left);
    //@ts-ignore
    let rightHeight = getMaxLength(found.right);
    //@ts-ignore
    if (leftHeight > rightHeight) return found.right.val;
    //@ts-ignore
    else if (leftHeight < rightHeight) return found.left.val;
    return found.val;
}


// console.log(findClosestLeaf(root,2))


/*Design Hit Counter*/

class HitCounter {
    readonly #hitCounterMap: Map<number, number>;

    constructor() {
        this.#hitCounterMap = new Map();
    }

    hit(timestamp: number): void {
        if (this.#hitCounterMap.has(timestamp)) {
            const prevCounter: number = this.#hitCounterMap.get(timestamp) || 0;
            this.#hitCounterMap.set(timestamp, prevCounter + 1);
        } else {
            this.#hitCounterMap.set(timestamp, 1);
        }
        console.log({hitCounter: this.#hitCounterMap.entries()})
    }

    getHits(timestamp: number): number {
        const counterEntries: Array<Array<number>> = Array.from(this.#hitCounterMap.entries());
        let numberHits: number = 0;
        for (let index: number = 0; index < counterEntries.length; index++) {
            const [entryTimestamp, hits]: Array<number> = counterEntries[index];
            if (entryTimestamp > timestamp) {
                break;
            } else if (entryTimestamp < timestamp - 299) {
                continue;
            }
            numberHits += hits;
        }
        console.log({numberHits})
        return numberHits;
    }
}


// const obj: HitCounter = new HitCounter()
// obj.hit(1);
// obj.hit(2);
// obj.hit(3);
// obj.getHits(4);
// obj.hit(300);
// obj.getHits(300);
// obj.getHits(301);


/* Snapshot Array */

class SnapshotArray {
    constructor(length: number) {

    }

    set(index: number, val: number): void {

    }

    snap(): number {

    }

    get(index: number, snap_id: number): number {
        return 0;
    }
}
