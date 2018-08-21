'use strict';

const fs = require('fs');

const SpectrumGenerator = require('spectrum-generator').default;

const generator = new SpectrumGenerator({
  start: 0,
  end: 100,
  peakWidthFct: (x) => 5,
  pointsPerUnit: 1
});
generator.addPeak([5, 20]);
generator.addPeak([30, 56]);
generator.addPeaks([[40, 12], [10, 25]]);
// generator.addNoise(5);
generator.addBaseline((x) => x / 5);
const spectrum = generator.getSpectrum();

fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(spectrum), 'utf8');

