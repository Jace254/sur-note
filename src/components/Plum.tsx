import { useEffect, useRef } from "react";

export default function Plum() {
  const r180 = Math.PI;
  const r90 = Math.PI / 2;
  const r15 = Math.PI / 12;

  const { random } = Math;
  interface Point {
    x: number;
    y: number;
  }

  interface Branch {
    start: Point;
    length: number;
    theta: number;
  }

  const el = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D;
  const MIN_BRANCH = 30;
  let animationPlaying = true;
  const color = "#88888825";

  const size = { width: window.innerWidth, height: window.innerHeight };
  const len = 0.001;

  const init = (width = 400, height = 400, _dpi?: number) => {
    const canvas = el!.current!;
    ctx = canvas.getContext("2d")!;

    const dpr = window.devicePixelRatio || 1;
    // @ts-expect-error vendor
    const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;

    const dpi = _dpi || dpr / bsr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.width = dpi * width;
    canvas.height = dpi * height;
    ctx.scale(dpi, dpi);

    start(width, height);
  };

  let steps: Function[] = [];
  let tasks: Function[] = [];

  const step = (
    branch: Branch,
    depth = 0,
    counter: { value: number } = { value: 0 }
  ) => {
    const end = getEndPoint(branch);
    drawBranch(branch);
    counter.value += 1;

    if (
      end.x < -100 ||
      end.x > size.width + 100 ||
      end.y < -100 ||
      end.y > size.height + 100
    )
      return;

    const rate = counter.value * 4 <= MIN_BRANCH ? 0.8 : 0.5;

    if (depth < 4 || random() < rate) {
      steps.push(() =>
        step(
          {
            start: end,
            length: branch.length + (random() * 10 - 5),
            theta: branch.theta - r15 * random(),
          },
          depth + 1,
          counter
        )
      );
    }

    if (depth < 4 || random() < rate) {
      steps.push(() =>
        step(
          {
            start: end,
            length: branch.length + (random() * 10 - 5),
            theta: branch.theta + r15 * random(),
          },
          depth + 1,
          counter
        )
      );
    }
  };

  const getEndPoint = (b: Branch) => {
    return {
      x: b.start.x + b.length * Math.cos(b.theta),
      y: b.start.y + b.length * Math.sin(b.theta),
    };
  };

  const drawBranch = (b: Branch) => {
    lineTo(b.start, getEndPoint(b));
  };

  const lineTo = (p1: Point, p2: Point) => {
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  };

  let lastTime = performance.now();
  const interval = 1000 / 40; // 50fps

  const frame = () => {
    if (performance.now() - lastTime < interval) return;

    tasks = [...steps];
    steps = [];
    lastTime = performance.now();

    if (!tasks.length) {
      pause();
    }

    tasks.forEach((i) => {
      // 50% chance to keep the step for the next frame, to create a more organic look
      if (random() < 0.5) steps.push(i);
      else i();
    });
  };

  let frameCount = 0;
  const startFrame = () => {
    if (animationPlaying) {
      requestAnimationFrame(() => {
        frameCount += 1;
        if (frameCount % 3 === 0) frame();
        startFrame();
      });
    }
  };

  const pause = () => {
    animationPlaying = false;
  };

  const resume = () => {
    animationPlaying = true;
  };

  startFrame();

  /**
   * 0.2 - 0.8
   */
  const randomMiddle = () => random() * 0.6 + 0.2;

  const start = (width: number, height: number) => {
    pause();
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    tasks = [];
    steps = [
      () =>
        step({
          start: { x: randomMiddle() * size.width, y: -5 },
          length: len,
          theta: r90,
        }),
      () =>
        step({
          start: { x: randomMiddle() * size.width, y: size.height + 5 },
          length: len,
          theta: -r90,
        }),
      () =>
        step({
          start: { x: -5, y: randomMiddle() * size.height },
          length: len,
          theta: 0,
        }),
      () =>
        step({
          start: { x: size.width + 5, y: randomMiddle() * size.height },
          length: len,
          theta: r180,
        }),
    ];
    if (size.width < 500) steps = steps.slice(0, 2);
    resume();
  };

  useEffect(() => {
    if (size.width && size.height) init(size.width, size.height);
  }, [size.width, size.height]);

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden -z-1"
      style={{ mask: "url(radial-gradient(circle, transparent, black))" }}
    >
      <canvas width={600} height={600} ref={el} />
    </div>
  );
}
