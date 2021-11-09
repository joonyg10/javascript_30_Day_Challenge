const CHEKCED = "checked";
const checkboxContainer = document.querySelector(".check__container");
let firstCheckedNode = null,
  lastCheckedNode = null;

function toggleChecked(checkboxNode, bool) {
  checkboxNode[0].checked = bool;
  checkboxNode[0].checked
    ? checkboxNode[1].classList.add(CHEKCED)
    : checkboxNode[1].classList.remove(CHEKCED);
}

function toggleBetween(startNode, lastNode, dir, bool) {
  let currCheckBox = startNode;
  while (currCheckBox && currCheckBox !== lastNode) {
    toggleChecked(currCheckBox.children, bool);
    dir === "NEXT"
      ? (currCheckBox = currCheckBox.nextElementSibling)
      : (currCheckBox = currCheckBox.previousElementSibling);
  }
}

checkboxContainer.addEventListener("input", (e) => {
  const clickedNode = e.target.closest(".checkbox");
  toggleChecked(clickedNode.children, clickedNode.children[0].checked);

  // 1. 1st X -> 1st에 node추가
  // 1_1) 1st O -> 2nd X -> 2nd에 node 추가 -> 2nd에 추가 시 사이의 모든 span에 chekced class
  if (!firstCheckedNode) {
    if (lastCheckedNode === clickedNode) {
      lastCheckedNode = null;
      return;
    }
    firstCheckedNode = clickedNode;
    lastCheckedNode &&
      toggleBetween(firstCheckedNode, lastCheckedNode, "NEXT", true);
  } else if (!lastCheckedNode) {
    if (firstCheckedNode === clickedNode) {
      firstCheckedNode = null;
      return;
    }
    lastCheckedNode = clickedNode;
    toggleBetween(firstCheckedNode, lastCheckedNode, "NEXT", true);
  } else {
    // 둘 다 있는 상태에서 click
    // 2-1) 1st, 2nd 둘중 1개를 click -> 1_1)의 행동 rollback
    // 1st라면 next / 2nd라면 previous sibling을 따라 가면서 toggle해주어야 한다.
    if (firstCheckedNode === clickedNode) {
      toggleBetween(clickedNode, lastCheckedNode, "NEXT", false);
      firstCheckedNode = null;
    } else if (lastCheckedNode === clickedNode) {
      toggleBetween(clickedNode, firstCheckedNode, "", false);
      lastCheckedNode = null;
    }
  }
});
