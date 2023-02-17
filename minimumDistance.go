/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDiffInBST(root *TreeNode) int {
    if root == nil{
        return 0
    }

    
    // get the sorted array using in order traversal
    var sortedList []int
    var minimumValue int = math. MaxInt64
    InOrderTraversal(root, &sortedList)
    fmt.Println(sortedList)
    for i:= 0; i < len(sortedList)-1;i++{
        currentMinimum := sortedList[i+1] - sortedList[i]
        if(minimumValue > currentMinimum){
            minimumValue = currentMinimum
        }
    }

    return minimumValue
}


func InOrderTraversal(root *TreeNode, sortedList *[]int){
    if root != nil{
if root.Left != nil{
        InOrderTraversal(root.Left, sortedList)    
    }

    *sortedList = append(*sortedList, root.Val)

    if root.Right != nil{
        InOrderTraversal(root.Right, sortedList)    
    }

    }

    
}
