const amountRaisedInput: HTMLInputElement | null = document.getElementById('amountRaised') as HTMLInputElement;
const rangeValuePercentages: HTMLSpanElement | null = document.getElementById('rangeValuePercentages') as HTMLSpanElement;
const rangeValue: HTMLSpanElement | null = document.getElementById('rangeValue') as HTMLSpanElement;

if (amountRaisedInput && rangeValuePercentages) {
  amountRaisedInput.addEventListener('input', () => {
    const percentage = amountRaisedInput.value + '%';
    rangeValuePercentages.textContent = percentage;
  });
}

// const amountRaisedInput: HTMLInputElement | null = document.getElementById('amountRaised') as HTMLInputElement;
// const rangeValuePercentages: HTMLSpanElement | null = document.getElementById('rangeValuePercentages') as HTMLSpanElement;
// const rangeValue: HTMLSpanElement | null = document.getElementById('rangeValue') as HTMLSpanElement;
// const valueManySpan: HTMLSpanElement | null = document.getElementById('valueMany') as HTMLSpanElement;

// if (amountRaisedInput && rangeValuePercentages && rangeValue && valueManySpan) {
//   amountRaisedInput.addEventListener('input', () => {
//     const percentage = amountRaisedInput.value + '%';
//     const value = amountRaisedInput.value;
//     rangeValuePercentages.textContent = percentage;
//     rangeValue.textContent = value;
//     updateMaxValue(value);
//   });
// }

// function updateMaxValue(value: string): void {
//   const maxFundraising = 1000000; // Задайте ваш максимальний фонд тут
//   const currentPercentage = parseInt(value, 10);
//   const calculatedValue = (currentPercentage / 100) * maxFundraising;
//   valueManySpan.textContent = calculatedValue.toFixed(0).toString() + '₴';
// }
