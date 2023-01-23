export const outerBudgetOptions = {
  responsive: true,
  cutout: "91%",
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
  },
};
export const innerBudgetOptions = {
  responsive: true,
  cutout: "87%",
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
  },
  layout: {
    padding: 18,
  },
};

export const outerBudgetData = {
  labels: [
    "Rent or Mortgage",
    "Food and Groceries",
    "Home Energy Bills",
    "Council Tax",
    "Credit Repayments",
    "Leftover Income",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [85, 70, 75, 40, 70, 85],
      backgroundColor: [
        "#B884FF",
        "#FFD482",
        "#F68DFF",
        "#ABE6FF",
        "#FFA59E",
        "#F5F5F5",
      ],
      hoverOffset: 0,
      responsive: true,
      maintainAspectRatio: true,
      borderWidth: 0,
    },
  ],
};

export const innerBudgetData = {
  labels: [
    "Rent or Mortgage",
    "Food and Groceries",
    "Home Energy Bills",
    "Council Tax",
    "Credit Repayments",
    "Leftover Income",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [100],
      backgroundColor: ["#139C72"],
      hoverOffset: 0,
      responsive: true,
      maintainAspectRatio: true,
      borderWidth: 0,
    },
  ],
};
// export const savingsData = {
//   labels: ["Christmas", "Target", "Holiday", "Target", "Nursery", "Target", "Birthday", "Target"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [5, 95],
//       backgroundColor: [
//         "#FFA59E",
//         "#AFF192",
//         "#B884FF",
//         "#ABE6FF",],
//       hoverOffset: 0,
//       responsive: true,
//       maintainAspectRatio: true,
//       borderWidth: 0,
//     },
//   ],
// };

export const savingsData = {
  datasets: [
    {
      data: [5, 95],
      hoverOffset: 0,
      responsive: true,
      maintainAspectRatio: true,
      borderWidth: 0,
    }],
  
};

export const savingsOptions = {
  responsive: true,
  cutout: "90%",
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
  },
};
