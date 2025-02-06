# ac-phase-calculator
[Phase angle calculation time delay frequency calculate phase lag time shift between voltage difference time of arrival ITD oscilloscope measure two signals formula angle current voltage phi phase shift time difference - sengpielaudio Sengpiel Berlin](https://sengpielaudio.com/calculator-timedelayphase.htm)

![](./394358342-a2bef090-25ae-47ed-b524-299a000086f6.png)

### SPICE
[dirkarnez/ngspice-netlists-collection](https://github.com/dirkarnez/ngspice-netlists-collection)
```
"Diode circuit",
"D1 OUT 0 1N914",
"V1 OUT 0 0",
".model 1N914 D(Is=2.52e-9 Rs=0.568 N=1.752 Cjo=4e-12 M=0.4 tt=20e-9)",
".DC V1 -1 1 10e-3",
".SAVE i(V1)",
".END");
```
### Hz to sine function
```
60hz = (1 / 60)s = 0.01666666666s per period
sin (t) = (2 * pi)s per period
sin(t) is slower

(2 * pi) / (1 / 60) = 60 * 2 * pi is the mulipler

60hz = sin(t * 60 * 2 * pi ) // the bigger the parameter the faster is the sin output
generally the sin function on time axis for nHz = sin( nHz * 2 * pi * t)

To be simple: sin (2 * pi * t) is 1 hz
we take this as a unit, we can add multiplier to get any hz we want
```











### TODOs
- [ ] DFT: `new fftwJS.r2c.fft1d(4).forward([1, 2, 2, 0]); // [5, 0, -1, -2, 1, 0]`
- [ ] matlab checking
- [ ] Quadratic Equation complex root on RLC circuit
- [ ] plotting
      - [dirkarnez/tiny-spice-parser](https://github.com/dirkarnez/tiny-spice-parser)

- https://github.com/j-funk/fftw-js/blob/master/test/fft.spec.js
- http://www.physicsbootcamp.org/Circuit-Analysis-Using-Complex-Numbers.html
- https://ciiec.buap.mx/FFT.js/
- [FFTW3学习笔记2：FFTW（快速傅里叶变换）中文参考 - 爱国呐 - 博客园](https://www.cnblogs.com/aiguona/p/9407425.html)
- [Complex One-Dimensional DFTs (FFTW 3.3.10)](https://www.fftw.org/doc/Complex-One_002dDimensional-DFTs.html)
- [C++ Tutorial: Computing the 1-D FFT using the FFTW library on Ubuntu/Linux - YouTube](https://www.youtube.com/watch?v=CMyG4hsKCJo)
- [**Understanding the Discrete Fourier Transform and the FFT - YouTube**](https://www.youtube.com/watch?v=QmgJmh2I3Fw)
- [Understanding the Discrete Fourier Transform and the FFT - YouTube](https://www.youtube.com/watch?v=QmgJmh2I3Fw)
- models
      - https://www.ni.com/en/shop/electronic-test-instrumentation/application-software-for-electronic-test-and-instrumentation-category/what-is-multisim/spice-simulation-fundamentals/spice-simulation-models.html
- EE4007
- Diodes
      - [最简单的半导体-二极管！通俗讲解二极管的8个作用！ - YouTube](https://www.youtube.com/watch?v=lsSHvi6ncyI)
