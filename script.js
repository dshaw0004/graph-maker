const TESTER = document.getElementById("graph");
const x_axis = document.querySelector(".x-axis-input");
const axis_input = document.querySelector(".axis-input");
const y_axis = document.querySelector(".y-axis-input");
const graph_title = document.querySelector(".graph-title");
const x_name = document.querySelector(".y-name.axis-name");
const y_name = document.querySelector(".axis-name.y-name");
const download_type = document.querySelector("#download-type");
let layout = {
	title: "title here",
	xaxis: {
		title: "x-axis",

		showline: true,
	},
	yaxis: {
		title: "y-axis",
		showline: true,
	},
};
let config = {
	toImageButtonOptions: {
		format: download_type.value,
		filename: graph_title.textContent,

		scale: 1,
	},
	showSendToCloud: true,
	displaylogo: false,
};
download_type.addEventListener("change", () => {
	config.toImageButtonOptions.format = download_type.value;
	console.table(config.toImageButtonOptions.format);
});
Plotly.plot(
	TESTER,
	[
		{
			x: x_axis.textContent.split(","),
			y: y_axis.textContent.split(","),
			mode: "lines+markers",
		},
	],
	layout,

	config
);

document.querySelector("#update-graph").addEventListener("click", () => {
	layout.title = graph_title.textContent;
	layout.xaxis.title = x_name.textContent;
	layout.yaxis.title = y_name.textContent;
	config.toImageButtonOptions.format = download_type.value;
	Plotly.react(
		TESTER,
		[
			{
				x: x_axis.textContent.split(","),
				y: y_axis.textContent.split(","),
			},
		],
		layout,
		config
	);
});
