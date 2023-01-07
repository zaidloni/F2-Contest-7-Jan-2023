/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function addData() {
  let b = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(b);
  console.log(arr[arr.length - 1]);
  //Write your code here
}

function removeAdmin() {
  let c = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].profession === "admin") {
      continue;
    } else {
      c.push(arr[index]);
    }
  }
  c.forEach((item) => {
    console.log(item);
  });
}

function concatenateArray() {
  let d = [
    { id: 10, name: "zaid", age: "22", profession: "frontend" },
    { id: 20, name: "anas", age: "22", profession: "frontend" },
    { id: 30, name: "hisam", age: "23", profession: "backend" },
  ];

  let newArray = [...d, ...arr];
  newArray.forEach((item) => {
    console.log(item);
  });
  //Write your code here
}
