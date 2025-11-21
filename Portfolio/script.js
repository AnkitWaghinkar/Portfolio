let opensidebar = document.querySelector(".showSideBar");
let closesidebar = document.querySelector(".hideSideBar");
let sidebar = document.querySelector("#sidebar");

// for opening Sidebar
opensidebar.addEventListener("click", ()=>{
    sidebar.classList.add("open");
});

// To close sidebar when any link is clicked
document.querySelectorAll("#sidebar a").forEach(link => {
  link.addEventListener("click" , () => {
    sidebar.classList.remove("open");
  });
});

// for closing Sidebar
closesidebar.addEventListener("click", ()=>{
    sidebar.classList.remove("open");
});

// to hide Navbar on scroll down and to show Navbar on scroll up.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

//to copy Phone Number and Email
document.querySelectorAll(".personal-copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Find the related text (sibling .copy-text element)
    const text = btn.parentElement.querySelector(".personal-label-info").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied: " + text);
      })
      .catch(() => {
        alert("Failed to copy.");
      });
  });
});


// for smooth animation of section
function revealSections() {
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (rect < windowHeight - 120) {
      section.classList.add("show");    // fade/slide IN
    } else {
      section.classList.remove("show"); // fade/slide OUT when scrolling up
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections(); // run on page load