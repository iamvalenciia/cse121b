

// Hotstoks SQL Finance - Credentials
const options = {
	method: 'POST',
	headers: {
		'content-type': 'text/plain',
		'X-RapidAPI-Key': '79a7582b4fmsh63f0994783c5112p1f1986jsn6b547a9163a1',
		'X-RapidAPI-Host': 'hotstoks-sql-finance.p.rapidapi.com'
	},      // edit this to retrieve any data
            //"SELECT * FROM stocks WHERE TYPE = 'etf' and symbol in ('VOO') ORDER BY price_1d DESC"
            //"SELECT * FROM stocks WHERE TYPE = 'stock' and symbol in ('$SPX','SPX','.SPX','.INX','SPDR','S&P500') ORDER BY price_1d ASC LIMIT 30"
	body: "SELECT * FROM stocks WHERE symbol in ('META') ORDER BY price_1d DESC"
};

// TO USE THE DATA FROM THE API
const stonks = async() => {
    try {
        const response = await fetch('https://hotstoks-sql-finance.p.rapidapi.com/query', options);
        console.log(response);

        const stonks = await response.json();

        stonks.results.forEach(element => {
            console.log(element);

            let article = document.createElement('article');

            let StockSymbol = document.createElement('p');
            StockSymbol.textContent = `Symbol: ${element.symbol}`;

            let CurrentPrice = document.createElement('p');
            CurrentPrice.textContent = `Current Price: $${element.price}`;

            let MarketChange = document.createElement('p');
            MarketChange.textContent = `Market Change: $${element.price_change_1d}`;

            
            article.appendChild(StockSymbol);
            article.appendChild(CurrentPrice);
            article.appendChild(MarketChange);

            document.querySelector('#nameStock').textContent = (`Tracking: ${element.name}`);
            document.querySelector('#infoStock').appendChild(article);

            // CHART VALUES
            metaChart(element.price_open, element.price_high, element.price_low, element.price);
            

        });


    } catch(error) {
        console.log(error)
    }
}


// CHART
let metaChart = function (open, high, low, current) {

    let labels = [
        'Open Price',
        'High Price',
        'Low Price',
        'Current Price',
    ];

    let data = {
        labels: labels,
        datasets: [{
        label: 'Last 24 Hours',
        backgroundColor: '#0668E1',
        borderColor: '#0668E1',
        data: [open, high, low, current],
        }]
    };


    let config = {
        type: 'line',
        data: data,
        options: {
            aspectRatio: 1|2,
        }
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
    
};


//Buton interaction
function myFunction() {

    let chart = document.getElementById("myChart");
    let button = document.querySelector('#button');

    if (chart.style.display == "none") {
        chart.style.display = "block";
        button.textContent = 'Close Chart'
    } else {
        chart.style.display = "none";
        button.textContent = 'Open Chart'
    }
}


// Date footer
const timing = new Date();
const day = timing.getDay();
let secondMessage = ''
switch (day) {
    case 0:
        secondMessage = 'Sunday';
            break
    case 1:
        secondMessage = 'Monday';
            break
    case 2:
        secondMessage = 'Tuesday';
            break
    case 3:
        secondMessage = 'Wednesday';
            break
    case 4:
        secondMessage = 'Thursday';
            break
    case 5:
        secondMessage = 'Friday';
            break
    case 6:
        secondMessage = 'Saturday';
            break
}


let hours = ('0' + timing.getHours()).slice(-2);
let minutes = ('0' + timing.getMinutes()).slice(-2);

// To create the AM and PM
let ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
let strTime = hours + ':' + minutes + ' ' + ampm;

document.querySelector('#the_time').textContent = (`Updated: Today, ${secondMessage} ${strTime}`);
stonks();
