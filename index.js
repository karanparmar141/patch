let id = -1;
let ui1=0
let ui = (data) => {
    data.map((e) => {
        console.log(e);
        
        let name = document.createElement("h1")
        name.innerHTML = e.name
        let btn = document.createElement("button")
        btn.innerHTML = "update"
        btn.addEventListener("click", () => {
            document.getElementById("name").value = e.name
            document.getElementById("btn").innerHTML = "update"
            document.getElementById("btn").value = "update"
            id = e.id
        })
        let del = document.createElement("button")
        del.innerHTML = "delete"
        del.addEventListener("click", () => {
            fetch(`http://localhost:3000/student/${e.id}`, {
                method: "delete"
            })
        })
        let div = document.createElement("div")
        div.append(name, btn, del)
        // ui1=`
        // <tr>
        //     <td>${e.id}</td>
        //     <td>${e.name}</td>
        //     <td><button>delete</button></td>
        //     <td><button>update</button></td>
        // </tr>`
        // console.log(ui1);
        
        document.getElementById("dis").append(div)
    })
}




let get = async () => {
    await fetch("http://localhost:3000/student")
        .then(res => res.json())
        .then(res => ui(res))
}


get()



document.getElementById("btn").addEventListener("click", () => {
    var name = document.getElementById("name").value;
    var btn = document.getElementById("btn").value;
    let obj = {
        name: name
    }
    console.log(id);
    if (btn == "submit") {
        fetch("http://localhost:3000/student", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(obj)
        })
    }
    else {
        fetch(`http://localhost:3000/student/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(obj)
        })
    }
})