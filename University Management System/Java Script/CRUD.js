id = localStorage.length+1;
userForm.id.value = id;

function delete_data(){
    localStorage.clear();
    read_data();
    id = localStorage.length++;
    userForm.id.value = id;
}

function update_data(){
    var id = userForm.id.value;
    var studentName = userForm.studentName.value;
    var course = userForm.course.value;
    var courseTime = userForm.courseTime.value;
    
    var user = {
        id: id,
        studentName: studentName,
        course: course,
        courseTime: courseTime
    };

    localStorage.setItem(id, JSON.stringify(user));
    read_data();
}

function edit_user(obj){
    row = obj.parentElement.parentElement;
    id = row.children[0].innerHTML;
    studentName = row.children[1].innerHTML;
    course = row.children[2].innerHTML;
    courseTime = row.children[3].innerHTML;
    
    userForm.id.value=id;
    userForm.studentName.value=studentName;
    userForm.course.value=course;
    userForm.courseTime.value=courseTime;
}

function delete_user(obj){
    row = obj.parentElement.parentElement;
    id = row.children[0].innerHTML;
    localStorage.removeItem(id);
    row.remove();
}

function create_user() {
    event.preventDefault();
    var id = userForm.id.value;
    var studentName = userForm.studentName.value;
    var course = userForm.course.value;
    var courseTime = userForm.courseTime.value;
    
    var user = {
        id: id,
        studentName: studentName,
        course: course,
        courseTime: courseTime
    };

    localStorage.setItem(id, JSON.stringify(user));


    tdata = document.getElementById("all_data");
    row = tdata.insertRow(-1);
    cell0 = row.insertCell(0);
    cell1 = row.insertCell(1);
    cell2 = row.insertCell(2);
    cell3 = row.insertCell(3);
    cell4 = row.insertCell(4);
    cell5 = row.insertCell(5);

    cell0.innerHTML = id;
    cell1.innerHTML = studentName;
    cell2.innerHTML = course;
    cell3.innerHTML = courseTime;
    cell4.innerHTML = `
<span onclick="edit_user(this)" class="aa"><i class="fas fa-edit"></i></span>`;
    cell5.innerHTML = `
<span onclick="delete_user(this)" class="aa"><i class="fas fa-trash"></i></span>`;
    
        id++;
    userForm.id.value = id;
    userForm.studentName.value = null;
    userForm.course.value = null;
    userForm.courseTime.value = null;
}



function read_data() {
    tdata = document.getElementById("all_data");
    tdata.innerHTML = null;
    for (i = 0; i < localStorage.length; i++) {
        row = tdata.insertRow(-1);
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell5 = row.insertCell(5);

        user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        cell0.innerHTML = user_data.id;
        cell1.innerHTML = user_data.studentName;
        cell2.innerHTML = user_data.course;
        cell3.innerHTML = user_data.courseTime;
    cell4.innerHTML = `
<span onclick="edit_user(this)" class="aa"><i class="fas fa-edit"></i></span>`;
    cell5.innerHTML = `
<span onclick="delete_user(this)" class="aa"><i class="fas fa-trash"></i></span>`;


    }

}

