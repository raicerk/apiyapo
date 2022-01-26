var data = []
for (let index = 1; index < 10; index++) {
  const pi = this.piWithLen(index)
  data = [...data, {
    index,
    len: pi.length - 2,
    pi
  } ]
  
}
console.table(data)