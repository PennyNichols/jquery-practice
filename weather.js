const form = $(".top-banner form").eq(0);
const input = $(".top-banner input").eq(0);
const msg = $(".msg").eq(0);
const list = $(".cities").eq(0);

form.on("submit", (e) => {
    e.preventDefault();
    console.log("Working");
    getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
    let apiKey = "6fa14046f47a4a9f9787346b2f6a6a1c";
    let inputVal = input.val();
    let unit = "metric";
    let url = `https://api/openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=${unit}`;
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: (response) => {
            console.log(response);
        }
    })

};