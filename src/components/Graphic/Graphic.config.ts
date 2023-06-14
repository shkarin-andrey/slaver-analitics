export const options = {
  scales: {
    xAxes: [
      {
        stacked: true,
        parsing: false,
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
          min: 0,
        },
      },
    ],
  },
  pan: {
    enabled: true,
    mode: 'x',
  },
  zoom: {
    enabled: true,
    mode: 'x',
    sensitivity: 1,
  },
};
