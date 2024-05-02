<script>
	let arrowUrl = '/arrow.jpg';
	let creditCardUrl = '/creditCard.jpg';
	let portfolioUrl = '/portfolio.jpg';
	let homeUrl = '/home.jpg';
	import '../../app.css';
	import Chart from 'chart.js';
	export let cuenta = { nivel: 1, balance: 24000 };

	import { onMount } from 'svelte';


	// init chart
	onMount(() => {
	
		const ctx = document.getElementById('line-chart');
		if (ctx) {
			const config = {
				type: 'line',
				data: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
					datasets: [
						{
							label: new Date().getFullYear(),
							backgroundColor: '#3182ce',
							borderColor: '#3182ce',
							data: [65, 78, 66, 44, 56, 67, 75],
							fill: false
						},
						{
							label: new Date().getFullYear() - 1,
							fill: false,
							backgroundColor: '#000000', // Cambiado a negro
							borderColor: '#000000', // Cambiado a negro
							data: [40, 68, 86, 74, 56, 60, 87]
						}
					]
				},
				options: {
					maintainAspectRatio: false,
					responsive: true,
					legend: {
						labels: {
							fontColor: 'black'
						},
						align: 'end',
						position: 'bottom'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					hover: {
						mode: 'nearest',
						intersect: true
					},
					scales: {
						xAxes: [
							{
								ticks: {
									fontColor: 'rgba(255,255,255,.7)'
								},
								display: true,
								gridLines: {
									display: false,
									borderDash: [2],
									borderDashOffset: [2],
									color: 'rgba(33, 37, 41, 0.3)',
									zeroLineColor: 'rgba(0, 0, 0, 0)',
									zeroLineBorderDash: [2],
									zeroLineBorderDashOffset: [2]
								}
							}
						],
						yAxes: [
							{
								ticks: {
									fontColor: 'black'
								},
								display: true,
								gridLines: {
									borderDash: [3],
									borderDashOffset: [3],
									drawBorder: false,
									color: 'rgba(255, 255, 255, 0.15)',
									zeroLineColor: 'rgba(33, 37, 41, 0)',
									zeroLineBorderDash: [2],
									zeroLineBorderDashOffset: [2]
								}
							}
						]
					}
				}
			};
			new Chart(ctx.getContext('2d'), config);
		} else {
			console.error('The canvas element for the chart is not available.');
		}
	});





  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }


</script>

<div class="container bg-white h-screen flex flex-col px-6 pt-14">
	<button class="icon-button bg-transparent border-none flex items-center mx-2.5">
		<img src={arrowUrl} alt="Back" class="h-6" />
	</button>

	<div class="account-balance text-center p-4">
		<h1 class="title ml-4 text-2xl mb-3 font-bold text-black">Riesgo {cuenta.nivel}</h1>
		<p class="balance text-3xl font-bold text-black text-blue-700">
			${cuenta.balance.toLocaleString('en-US')}
		</p>
		<p class="subtitle text-xl text-black">Balance de cuenta</p>
	</div>

	<div class="compare-button text-center p-4">
		<button class="bg-blue-200 text-black px-6 py-3 rounded-lg font-bold">
			COMPARAR CON: S&P 500
		</button>
	</div>

	<div class="performance-section p-4">
		<div style="display: flex; align-items: center; justify-content: space-between;">
			<h2 class="section-title text-md font-bold text-black">
				Performance Of Your Portfolio Against The Benchmark Index
			</h2>

	
      <div class="relative inline-block">  
		
        <button on:click={toggleDropdown} class="text-black bg-gray-300 font-medium rounded-3xl text-lg w-20 px-4 py-2.5 text-center inline-flex items-center focus:outline-none focus:shadow-outline-green transition duration-150 ease-in-out">
          All <svg
		  class="w-2.5 h-2.5 ms-3"
		  aria-hidden="true"
		  xmlns="http://www.w3.org/2000/svg"
		  fill="none"
		  viewBox="0 0 10 6"
	  >
		  <path
			  stroke="currentColor"
			  stroke-linecap="round"
			  stroke-linejoin="round"
			  stroke-width="2"
			  d="m1 1 4 4 4-4"
		  />
	  </svg>
        </button>
        {#if isOpen}
          <div class="absolute bg-gray-300 text-black right-0 mt-2 w-20 rounded-3xl shadow-lg z-50 ">
            <div class="py-1">
				<a href="#" class="block px-4 py-2 text-sm   hover:bg-gray-100">Week</a>
              <a href="#" class="block px-4 py-2 text-sm   hover:bg-gray-100">Month</a>
              <a href="#" class="block px-4 py-2 text-sm   hover:bg-gray-100">Year</a>
              
            </div>
          </div>
        {/if}
      </div>
      
		</div>

		<div
			class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
		>
			<div class="rounded-t mb-0 px-4 py-3 bg-transparent">
				<div class="flex flex-wrap items-center"></div>
			</div>
			<div class="p-4 flex-auto">
				<!-- Chart -->
				<div class="relative h-350-px">
					<canvas id="line-chart"></canvas>
				</div>
			</div>
		</div>
	</div>

	<div
		class="navigation-bar fixed bottom-0 left-0 right-0 bg-white px-12 py-8 flex justify-between"
	>
		<button class="text-gray-600">
			<img src={homeUrl} alt="Home" class="h-6 mx-2" />
		</button>
		<button class="text-gray-600">
			<img src={portfolioUrl} alt="Portfolio" class="h-6 mx-2" />
		</button>
		<button class="text-gray-600">
			<img src={creditCardUrl} alt="Credit Card" class="h-6 mx-2" />
		</button>
	</div>
</div>
