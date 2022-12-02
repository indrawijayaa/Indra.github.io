document.querySelectorAll('a[href^="#"]').forEach(ancor => {
    ancor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior : "smooth"
        })
    })
})

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

function clickHandle(evt, animalName) {
  let i, tabcontent, tablinks;

  // This is to clear the previous clicked content.
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Set the tab to be "active".
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Display the clicked tab and set it to active.
  document.getElementById(animalName).style.display = "block";
  evt.currentTarget.className += " active";
}

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "indrawijaya210305@gmail.com",
    Password : "3147858EF14ACB6622CF86445A25BBF30D6E",
    To : 'indrawijaya210305@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Message From Website",
    Body : "Name: " + document.getElementById("name").value
      +"<br> Email: " + document.getElementById("email").value
      +"<br> Phone No: " + document.getElementById("phone").value
      +"<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("message sent succefully")
);
}