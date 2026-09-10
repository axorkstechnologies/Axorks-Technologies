import React, { useEffect, useRef } from 'react';

export const HeroShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl', { powerPreference: 'high-performance', alpha: false }) ||
      canvas.getContext('experimental-webgl');
    if (!gl) return;

    let animationFrameId: number;
    let mouse = { x: canvas.clientWidth / 2, y: canvas.clientHeight / 2 };

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth || 1280;
      const h = canvas.clientHeight || window.innerHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => syncSize())
        : null;

    if (resizeObserver && canvas) {
      resizeObserver.observe(canvas);
    }
    syncSize();

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        vec2 mouseNorm = (u_mouse / u_resolution) * 2.0 - 1.0;
        mouseNorm.x *= u_resolution.x / u_resolution.y;
        float distToMouse = length(p - mouseNorm);
        float mouseWave = smoothstep(0.9, 0.0, distToMouse) * 0.35;

        float t = u_time * 0.09;
        
        float n1 = snoise(p * 0.85 + vec2(t * 0.28 + mouseWave * 0.15, -t * 0.22));
        float n2 = snoise(p * 1.9 + vec2(-t * 0.15, t * 0.32) + vec2(n1 * 0.65));
        float n3 = snoise(p * 3.4 + vec2(n2 * 0.3, n1 * 0.25) + mouseWave);

        vec3 deepNavy   = vec3(0.024, 0.035, 0.065);
        vec3 cosmicBlue = vec3(0.04, 0.07, 0.13);
        vec3 emeraldTeal = vec3(0.02, 0.65, 0.45);
        vec3 deepForest  = vec3(0.01, 0.28, 0.20);
        vec3 champagneGold = vec3(0.96, 0.78, 0.38);
        vec3 antiqueGold   = vec3(0.78, 0.54, 0.18);
        vec3 burgundyWine = vec3(0.55, 0.08, 0.22);
        vec3 royalPlum    = vec3(0.38, 0.08, 0.42);
        vec3 cyanGlow   = vec3(0.02, 0.88, 0.95);
        vec3 violetGlow = vec3(0.62, 0.35, 0.98);

        float waveEmerald  = smoothstep(-0.4, 0.65, n2);
        float waveWine     = smoothstep(-0.2, 0.75, n1 * 0.8 + n3 * 0.4);
        float goldCrest    = pow(abs(n3 * 0.8 + n2 * 0.4), 3.4);
        float iridescentEdge = pow(clamp(1.0 - abs(n2 - n3), 0.0, 1.0), 4.0);

        vec3 col = mix(deepNavy, cosmicBlue, uv.y * 0.8);
        col = mix(col, deepForest, waveEmerald * 0.55);
        col = mix(col, burgundyWine, waveWine * 0.42);
        
        col += emeraldTeal * smoothstep(0.3, 0.9, n2) * 0.38;
        col += royalPlum * smoothstep(0.2, 0.8, n1) * 0.28;

        col += champagneGold * goldCrest * 0.45;
        col += antiqueGold * pow(max(0.0, n3), 2.8) * 0.30;

        vec3 chromatic = mix(cyanGlow, violetGlow, sin(p.x * 2.0 + t) * 0.5 + 0.5);
        col += chromatic * iridescentEdge * 0.32;
        col += cyanGlow * mouseWave * 0.25;

        float sheen = smoothstep(0.35, 0.0, abs(n2 - 0.25)) * 0.22;
        col += mix(champagneGold, vec3(1.0, 0.98, 0.92), 0.6) * sheen;

        float vignette = 1.0 - length(uv - 0.5) * 0.82;
        col *= clamp(vignette, 0.22, 1.0);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string) {
      const s = glCtx.createShader(type);
      if (!s) return null;
      glCtx.shaderSource(s, source);
      glCtx.compileShader(s);
      return s;
    }

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = 1.0 - (e.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    function render(t: number) {
      if (!gl || !canvas) return;
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver && canvas) {
        resizeObserver.unobserve(canvas);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ display: 'block' }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-95 transition-opacity duration-1000"
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
      <div className="absolute inset-0 bg-[#060913]/30 pointer-events-none" />
    </div>
  );
};
