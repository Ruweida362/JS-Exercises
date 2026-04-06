let temperature = 20;    //output: Warm
// let temperature = -5; //output: Very cold
// let temperature = 10; //output: Cold
// let temperature = 30; //output: Hot


if (temperature < 0) {
  console.log("Very cold");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("Cold");
} else if (temperature > 15 && temperature <= 25) {
  console.log("Warm");
} else {
  console.log("Hot");
}