function randomlinks(){
    var myrandom=Math.round(Math.random()*12) //produces a random integer
    var links=new Array()
    links[0]="https://en.m.wikipedia.org/wiki/Goku" 
    links[1]="https://www.reddit.com/r/Eyebleach/"
    links[2]="https://www.gofundme.com/discover/computer-fundraiser"
    links[3]="https://onetreeplanted.org/"
    links[4]="https://youtu.be/GZtnbeHWjx0"
    links[5]="https://time.com/5312483/how-to-deal-with-impostor-syndrome/"
    links[6]="https://gamesdonequick.com/"
    links[7]="https://youtu.be/09wBn4ux3N0"
    links[8]="https://www.thetrevorproject.org/"
    links[9]="https://linktr.ee/jakesaintg"
    links[10]="https://yogawithadriene.com/"
    links[11]="https://en.m.wikipedia.org/wiki/List_of_free_and_open-source_software_packages"
    links[12]="https://teamtreehouse.com"
 
    window.location=links[myrandom]
}