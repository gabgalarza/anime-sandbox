export const drawGraph = (audioContext) => {
  document.getElementById('player').appendChild(audioContext);
  const context = new AudioContext();

  if (context) {
    const analyser = context.createAnalyser();
    const canvas = document.getElementById('visualizer');
    const ctx = canvas.getContext('2d');

    const source = context.createMediaElementSource(audioContext);
    source.connect(analyser);
    analyser.connect(context.destination);

    const frameLooper = (...args) => {
      window.requestAnimationFrame(frameLooper);

      const fbc_array = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(fbc_array);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#46000273';

      const bars = 100;

      for (let i = 0; i < bars; i++) {
        let bar_x = i * 3;
        let bar_width = 2;
        let bar_height = -(fbc_array[i] / 2);

        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
      }

    };

    frameLooper(analyser, ctx, canvas);
  } else {
      // Web Audio API is not supported
      alert("The Web Audio API is not supported by your browser. Please upgrade to the latest version of Chrome or Firefox");
  }

}


export const setAudioContext = (music) => {
  const context = new Audio();
  context.src = music;
  context.controls = true;
  context.loop = true;
  context.autoplay = false;

  return context;

}
