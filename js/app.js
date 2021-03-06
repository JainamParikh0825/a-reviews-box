const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const surpriseMeBtn = document.getElementById("surprise-me-btn");

const profile = document.getElementById("profile");
const fullName = document.getElementById("name");
const position = document.getElementById("position");
const review = document.getElementById("message");

let reviewNumber = 0;

const reviewers = [
  {
    profilePicture: "./images/image-1.png",
    fullName: "John Doe",
    position: "ML Engineer",
    reviewText:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi veritatis ducimus, facere, odit blanditiis nemo aspernatur architecto magnam odio praesentium ab minus doloribus laboriosam maiores deleniti.",
  },
  {
    profilePicture: "./images/image-2.jpg",
    fullName: "Mark Twain",
    position: "Web Developer",
    reviewText:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    profilePicture: "./images/image-3.jpg",
    fullName: "Ben Miller",
    position: "Manager",
    reviewText:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    profilePicture: "./images/image-4.jpg",
    fullName: "Paoula Pist",
    position: "Head of Department",
    reviewText:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Lorem ipsum is that it has more or less normal distribution.",
  },
];

const changeReviewer = () => {
  profile.setAttribute("src", `${reviewers[reviewNumber].profilePicture}`);
  fullName.textContent = reviewers[reviewNumber].fullName;
  position.textContent = reviewers[reviewNumber].position;
  review.textContent = reviewers[reviewNumber].reviewText;
};

prevBtn.addEventListener("click", () => {
  // Check if it is the first reviewer then switch back to last else decrement by 1
  reviewNumber === 0 ? (reviewNumber = reviewers.length - 1) : reviewNumber--;

  // Change Reviewer details
  changeReviewer();
});

nextBtn.addEventListener("click", () => {
  // Check if it is the last reviewer then switch back to first else increment by 1
  reviewNumber === reviewers.length - 1 ? (reviewNumber = 0) : reviewNumber++;

  // Change Reviewer details
  changeReviewer();
});

surpriseMeBtn.addEventListener("click", () => {
  let n = Math.floor(Math.random() * 4);
  reviewNumber = n;
  changeReviewer();
});
