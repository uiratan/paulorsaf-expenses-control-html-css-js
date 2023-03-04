function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../";
    }).catch(() => {
        alert("Erro ao fazer logout!");
    })
}


