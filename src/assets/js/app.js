var EspaceType = [], SurfaceMoyennee = [];
var NombreCat = [], Categories = [];
var NombreType = [], Types = [];


function getRandomColor(length) {
    var randomColor = [];
    for (let i = 0; i <= length; i++) {
        randomColor.push("#" + Math.floor(Math.random() * 16777215).toString(16));
        console.log("#" + Math.floor(Math.random() * 16777215).toString(16));
    }
    return randomColor;
}


async function initializeCharts() {
    await getSurfaceParTypeData();
    await getRepartitionParCat();
    await getRepartitionParType();

    const surfaceParTypeChart = document.getElementById('surfaceParType').getContext('2d');
    const canvas = document.getElementById('does-not-exist');
    console.log(canvas);
    const repartitionParCatChart = document.getElementById('repartitionParCat').getContext('2d');
    const repartitionParTypeChart = document.getElementById('repartitionParType').getContext('2d');

    const barChart = new Chart(surfaceParTypeChart, {
        type: 'bar',
        data: {
            labels: EspaceType,
            datasets: [{
                label: "Type d'espace",
                backgroundColor: 'green',
                borderColor: 'rgb(255, 99, 132)',
                data: SurfaceMoyennee
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: "Surface moyenne par type d'espace vert"
            }
        }
    });

    const doughnutChart = new Chart(repartitionParCatChart, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: "Répartition des espaces vert par catégorie",
                data: NombreCat,
                borderWidth: 1,
                backgroundColor: getRandomColor(100)
            }],
            labels: Categories
        },
        options: {
            title: {
                display: true,
                text: "Répartition des espaces vert par catégorie"
            },
            legend: {
                display: true
            }
        }
    });

    const doughnutChart2 = new Chart(repartitionParTypeChart, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: "Répartition des espaces vert par Type",
                data: NombreType,
                borderWidth: 1,
                backgroundColor: getRandomColor(100)
            }],
            labels: Types
        },
        options: {
            title: {
                display: true,
                text: "Répartition des espaces vert par Type"
            },
            legend: {
                display: true
            }
        }
    });




}

initializeCharts()


//Fetch Data from API

async function getSurfaceParTypeData() {
    const apiUrl = "http://localhost:5000/surface_par_type"

    const response = await fetch(apiUrl)
    const barChatData = await response.json()

    let surfaceMoyenne = barChatData.map((x) => x.surface)
    let espaceType = barChatData.map((x) => x.type)
    SurfaceMoyennee = surfaceMoyenne
    EspaceType = espaceType
}

async function getRepartitionParCat() {
    const apiUrl = "http://localhost:5000/repartition_par_categorie"

    const response = await fetch(apiUrl)
    const doughnutChartData = await response.json()

    let nombreCat = doughnutChartData.map((x) => x.nombre)
    let categorie = doughnutChartData.map((x) => x.categorie)
    NombreCat = nombreCat
    Categories = categorie
}

async function getRepartitionParType() {
    const apiUrl = "http://localhost:5000/repartition_par_type"

    const response = await fetch(apiUrl)
    const doughnutChartData = await response.json()

    let nombreType = doughnutChartData.map((x) => x.nombre)
    let types = doughnutChartData.map((x) => x.type)
    NombreType = nombreType
    Types = types
}