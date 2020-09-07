let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  
  
  console.log( unique(values) );