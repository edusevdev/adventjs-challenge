function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => b.l - a.l) // Sorted from largest to smallest
    .every((box, index, boxes) => { 
      const nextBox = boxes[index + 1]
      return !nextBox || (box.l > nextBox.l && box.w > nextBox.w && box.h > nextBox.h)
     })
}

export { fitsInOneBox }
