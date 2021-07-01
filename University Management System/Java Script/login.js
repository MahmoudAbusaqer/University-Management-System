function Login() {
    event.preventDefault();
    users = [
        { username: "mahmoud", password: "123", permetion: "std" },
        { username: "osama", password: "456", permetion: "iug" }
        // { username: "ali", password: "789", permetion: "student" },
    ];

    var username = userLogin.username.value;
    var password = userLogin.password.value;

    user = Check_user(users, username, password);
    if (user != null) {
        var date = new Date();
        var exp = date.getTime() + 3 * 24 * 60 * 60 * 1000;
        date.setTime(exp);
        document.cookie = "username=" + user.username + ";expires=" + date;
        if (user.permetion == "iug") {
            window.location.href = "teacher page.html";
        } else {
            window.location.href = "student page.html";
            
        }
    } else {
        alert("error");
    }

}

function Check_user(users, username, password) {
    for ( i in users) {
        user = users[i];
        if (user.username == username && user.password == password) {
            return user;
        }
    }
    return null;
}


