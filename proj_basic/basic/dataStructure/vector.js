class Vector {
    constructor(arr) {
        this.arr = arr;
    }

    add(other)  {
        const oa = other.arr;
        if (this.arr.length === oa.length) {
            let res = []
            for(let key in this.arr) {
              res[key] = this.arr[key] + oa[key]
            }
            return new Vector(res)
          }
    }
}

let a = [1, 2, 3];
let v = new Vector(a);
v.add(v);
console.log(v);
