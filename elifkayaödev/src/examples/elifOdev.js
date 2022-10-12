var root = document.getElementById("root");

var employeeName = "Elif";
var employeeBirth = 1921;
var employeWork = "She is engineer";
 
function formatPrice(b) {
    return b + " yılı doğdu";
}

var employee = {
    employeeName: "",
    employeeBirth: 1984,
    employeWork: "software developer",
    type: ["she", "he"]
}

function formatPrice2(b) {
    return b.employeeBirth + " yılı doğdu";
}

function getDescription(description) {
 
    return description ? description : "no-description"
}

var number = 0;

function artiBir() { tarih++; renderApp(); console.log("tarih 1 arttı"); }
var dateTime = new Date().toLocaleTimeString();
function renderApp() {
    var template =
        <div id="employeeDetail">
            <h1>tarih: {tarih}</h1>
            <button id="btnArttir" onClick={artiBir}>+1</button>
            <button id="btnAzalt"
                onClick={
                    () => {
                        tarih != 1900 ? tarih-- : alert("tarih değeri 0");
                        renderApp();
                        console.log("tarih 1 azaldı")
                    }
                }>-1</button>
            <div>{dateTime}</div>
        </div>;
    ReactDOM.render(template, root);
}

renderApp();

function tick() {
    var element =
    (
        <div>
            <h2>Saat : {new Date().toLocaleTimeString()} </h2>
        </div>
    );
    ReactDOM.render(element, root);
}

setInterval(tick, 1000)