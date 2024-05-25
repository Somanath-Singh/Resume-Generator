//alert("loding");

//add experience
function addNewExperience(){
    //column 1

    let label1=document.createElement("label");
    label1.classList.add("mb-1");
    label1.innerText="Start Date";

    let input1=document.createElement("input");
    input1.classList.add("form-control");
    input1.classList.add("sDate");
    input1.setAttribute("type","date");

    let col1=document.createElement("div");
    col1.classList.add("col-md-6");

    col1.appendChild(label1);
    col1.appendChild(input1);

    //column 2

    let label2=document.createElement("label");
    label2.classList.add("mb-1");
    label2.innerText="End Date";

    let input2=document.createElement("input");
    input2.classList.add("form-control");
    input2.classList.add("eDate");
    input2.setAttribute("type","date");

    let col2=document.createElement("div");
    col2.classList.add("col-md-6");

    col2.appendChild(label2);
    col2.appendChild(input2);

    //row inside column

    let row=document.createElement("div");
    row.classList.add("row");
    row.classList.add("mt-2");

    //add col1 and col2 into row

    row.appendChild(col1);
    row.appendChild(col2);

    //main content

    let label = document.createElement("label");
    label.classList.add("mb-1");
    label.innerText="Work Experience";


    let wtextArea=document.createElement("textarea");
    wtextArea.classList.add("form-control");
    wtextArea.classList.add("weField");
    wtextArea.setAttribute("placeholder","Enter Here");

    //add all content to one div

    let wdiv=document.createElement("div");
    wdiv.classList.add("form-group");
    wdiv.classList.add("mt-2");
    wdiv.classList.add("mb-2");

    wdiv.appendChild(label);
    wdiv.appendChild(wtextArea);
    wdiv.appendChild(row);

    //append div to already created div

    let weob=document.getElementById("we");

    weob.appendChild(wdiv);


}

function addNewQualification(){

    //first row
    let label1=document.createElement("label");
    label1.classList.add("mb-1");
    label1.innerText="Enter CGPA/%";

    let input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.classList.add("form-control");
    input1.classList.add("cgpa");

    let col1=document.createElement("div");
    col1.classList.add("col-md-6");

    col1.appendChild(label1);
    col1.appendChild(input1);

    //second row
    let label2=document.createElement("label");
    label2.classList.add("mb-1");
    label2.innerText="End Year";

    let input2=document.createElement("input");
    input2.setAttribute("type","month");
    input2.classList.add("form-control");
    input2.classList.add("eYear");

    let col2=document.createElement("div");
    col2.classList.add("col-md-6");

    col2.appendChild(label2);
    col2.appendChild(input2);

    //row contain column

    let row=document.createElement("div");
    row.classList.add("row");
    row.classList.add("mt-2");

    row.appendChild(col1);
    row.appendChild(col2);

    //course name

    //course name
    let clabel=document.createElement("label");
    clabel.classList.add("mb-1");
    clabel.innerText="Enter Course Name";

    let cinput=document.createElement("input");
    cinput.setAttribute("type","text");
    cinput.classList.add("form-control");
    cinput.classList.add("course");
    cinput.setAttribute("placeholder","Enter Here");

    //univercity name
    let ulabel=document.createElement("label");
    ulabel.classList.add("mb-1");
    ulabel.innerText="Enter Univercity Name";

    let uinput=document.createElement("input");
    uinput.setAttribute("type","text");
    uinput.classList.add("form-control");
    uinput.classList.add("uName");
    uinput.setAttribute("placeholder","Enter Here");

    //add all the content into one div

    let div = document.createElement("div");
    div.classList.add("form-group");
    div.classList.add("mt-2");
    div.classList.add("mb-2");

    //add all content to div 

    div.appendChild(clabel);
    div.appendChild(cinput);
    div.appendChild(ulabel);
    div.appendChild(uinput);
    div.appendChild(row);

    //get already created div obj
    let qualification = document.getElementById("qual");
    qualification.appendChild(div);

}

function addNewSkills(){

    let sinput=document.createElement("input");
    sinput.setAttribute("type","text");
    sinput.classList.add("form-control");
    sinput.classList.add("skills");
    sinput.setAttribute("placeholder","Enter Here");

    //add all the content into one div

    let div = document.createElement("div");
    div.classList.add("form-group");
    div.classList.add("mt-2");
    div.classList.add("mb-2");

    //add sinput to div
    div.appendChild(sinput);

    let skills=document.getElementById("skill");
    skills.appendChild(div);
}


function addNewProject(){

    let textarea=document.createElement("textarea");
    textarea.classList.add("form-control");
    textarea.classList.add("pDesc");
    textarea.setAttribute("placeholder","Enter Here");

    let pinput=document.createElement("input");
    pinput.setAttribute("type","text");
    pinput.classList.add("form-control");
    pinput.classList.add("pLink");
    pinput.classList.add("mt-1");
    pinput.setAttribute("placeholder","GitHub Link");
    //add all the content into one div

    let div = document.createElement("div");
    div.classList.add("form-group");
    div.classList.add("mt-2");
    div.classList.add("mb-2");

    //add sinput to div
    div.appendChild(textarea);
    div.appendChild(pinput);
    

    let projects=document.getElementById("project");
    projects.appendChild(div);
}

//generating cv
function generateCV(){
    console.log("add");

    //name fieds

    let nameField=document.getElementById("nameField").value;

    let name=document.getElementById("name");

    name.innerHTML=nameField;

    let nameT=document.getElementById("nameT");

    nameT.innerText=nameField;

    //email
    document.getElementById("email").innerHTML=document.getElementById("emailField").value;

    //contact no
    document.getElementById("phone").innerHTML=document.getElementById("contactField").value;

    //DOB
    document.getElementById("dob").innerHTML=document.getElementById("dobField").value;

    //email
    document.getElementById("address").innerHTML=document.getElementById("addressField").value;

    //importants link
    document.getElementById("githubL").innerHTML=document.getElementById("githubField").value;

    document.getElementById("linkedL").innerHTML=document.getElementById("linkedinField").value;

    //objective
     document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //work experience
    const wes=document.getElementsByClassName("weField");

    const sDate=document.getElementsByClassName("sDate");

    const eDate=document.getElementsByClassName("eDate");

    //one way

    // let str = "";

    // for(let e of wes ){
    //     str = str + `<li>${e.value}</li>`;
    // }

    // document.getElementById("weT").innerHTML = str;

    let str1 = "";

    for(let i=0;i<wes.length;i++){
        str1 = str1 + `<li>${wes[i].value}&nbsp;&nbsp;&nbsp;{${sDate[i].value}&nbsp;-&nbsp;${eDate[i].value}}</li>`
    }

    document.getElementById("weT").innerHTML = str1;

    //educational qualification
    const course=document.getElementsByClassName("course");

    const uName=document.getElementsByClassName("uName");

    const cgpa=document.getElementsByClassName("cgpa");

    const year=document.getElementsByClassName("eYear");

    let str2 = "";

    for(let i=0;i<course.length;i++){
        str2 = str2 + `<li>Passed out ${course[i].value} from ${uName[i].value} in the year ${year[i].value}. CGPA- <b>${cgpa[i].value}</b> .</li>`
    }

    document.getElementById("eqT").innerHTML = str2;

    //skills

    const skill = document.getElementsByClassName("skills");

    let str3 = "";

    for(let s of skill){
        str3 = str3 + `<li>${s.value}</li>`;
    }

    document.getElementById("ts").innerHTML = str3;


    //projects

    const description = document.getElementsByClassName("pDesc");

    const link = document.getElementsByClassName("pLink");

    let str4 = "";

    for(let i=0;i<description.length;i++){
        str4 = str4 + `<li>${description[i].value}    {<b>${link[i].value}</b>}</li>`;
    }

    document.getElementById("projectT").innerHTML = str4;

    //code for setting image

    let file = document.getElementById("photoField").files[0];

    console.log(file);

    let reader = new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set image to templet
    //after loading image it shoe result
    reader.onload = ()=>
    {
        document.getElementById("imgField").src=reader.result;
    }

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';

}


function printCV(){
    window.print();
}