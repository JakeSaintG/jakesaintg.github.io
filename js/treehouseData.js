const url = "https://teamtreehouse.com/jakestgermain.json"

const getTreehouseData = fetch(url)
    .then(r=>r.json())
    .then(treehouse => {
        updateTreehouseResult(treehouse)
    })
    .catch((error) => {
        console.error('Error:', error);
        return
});
window.onload = async () => {
    let placeholderData = await getTreehouseData;
};

updateTreehouseResult = (treehouse) => {
    
    const treehouseData = document.getElementById("treehouseData")
    const dataDiv = document.createElement('div')

    const date = document.createElement('div')
    let today = new Date(); // "new" operator prevents the date from being a string 
    let d = today.getDate();
    let m = today.getMonth()+1; //will return the month starting at 0, +1 is used to simulate returning the month starting at 1.
    let y = today.getFullYear();

    if(d<10) {
        d='0'+d; //adds a zero to the day if it is a single digit
    } 

    if(m<10) {
        m='0'+m; //adds a zero to the month if it is a single digit
    } 
    today = `${m}/${d}/${y}`; //formats the post date

    

    date.textContent = `Progress as of: ${today}`
    date.className = `courseDataHead`
    dataDiv.appendChild(date)

    const badgesTotal = document.createElement('span')
    badgesTotal.className = `courseData`
    badgesTotal.textContent = `Total number of badges: ${treehouse.badges.length}`
    dataDiv.appendChild(badgesTotal)

    for (const [key, value] of Object.entries(treehouse.points)) {
        if (value === 0) {
            //Do nothing
        } else if (key === `total`) {
            //Do nothing
        } else {
            const subject = document.createElement('span')
            subject.className = `courseData`
            subject.textContent = `${key}: ${value} points`
            dataDiv.appendChild(subject)
        }
    }
    treehouseData.parentNode.replaceChild(dataDiv, treehouseData);
}