console.log("this is cvScreener");

//array of object containint

const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },

  {
    name: "Shubham Sharma",
    age: 28,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },

  {
    name: "Camella Cabello",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

  {
    name: "Aishwariya Rai",
    age: 45,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
  },

  {
    name: "Rohit Sharma",
    age: 34,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];

//CV Iterator

function cvIterator(profiles) {
  let index = 0;

  return {
    next: () => {
      return index < profiles.length
        ? {
            value: profiles[index++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

// console.log(cvIterator(data).next());

let nextBtn = document.getElementById("next");

//call iterator
const candidate = cvIterator(data);

nextCV();
nextBtn.addEventListener("click", nextCV);
function nextCV() {
  const currentCandidate = candidate.next().value;

  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  //    console.log(currentCandidate)
  //    console.log(profile);
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
   <li class="list-group-item">${currentCandidate.name}</li>
   <li class="list-group-item">${currentCandidate.age} years old</li>
   <li class="list-group-item">${currentCandidate.city}</li>
   <li class="list-group-item">${currentCandidate.language}</li>
   <li class="list-group-item">${currentCandidate.framework}</li>
 </ul>`;
  } else {
    alert("End");
  }
}
