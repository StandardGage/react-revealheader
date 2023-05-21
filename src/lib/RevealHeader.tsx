import { useEffect, useState, useRef } from "react";

interface HeaderProps {
  neutralColor: string | undefined;
  upColor: string | undefined;
  throttleAmount?: number;
  children: any;
}

export default function RevealHeader(props: HeaderProps) {
  const [childrenHeight, setChildrenHeight] = useState(0);
  const scrollDirection = useScrollDirection(props.throttleAmount);
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childrenRef.current) {
      setChildrenHeight(childrenRef.current.offsetHeight);
    }
  }, [childrenRef]);

  return (
    <div style={{
      maxWidth: '100%',
      overflow: 'visible',
      position: 'sticky',
      zIndex: 10,
      top: scrollDirection === "down" ? `-${childrenHeight}px` : '0px',
      transition: 'all 1s ease-in-out',
      backgroundColor: scrollDirection === "up" ? `${props.upColor}` : scrollDirection === "neutral" ? `${props.neutralColor}` : `${props.upColor}`,
      height: `${childrenHeight}px`,
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '300ms'
    }}
    >
      <div ref={childrenRef}>{props.children}</div>
    </div>
  );
}

function useScrollDirection(throttleAmount:number = 25) {
  const [scrollDirection, setScrollDirection] = useState("neutral");
  console.log(scrollY)
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : scrollY === lastScrollY ? "neutral" : "up";
      if (direction !== scrollDirection && scrollY !== 0) {
        setScrollDirection(direction);
      }
      if (scrollY <= 50) {
        setScrollDirection("neutral")
      }

      lastScrollY = scrollY;
    };

    const throttledUpdateScrollDirection = throttle(updateScrollDirection, throttleAmount); // Adjust the throttle duration as needed

    window.addEventListener("scroll", throttledUpdateScrollDirection);
    return () => {
      window.removeEventListener("scroll", throttledUpdateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function throttle(func: { (): void; apply?: any; }, wait: number) {
  let context, args, prevArgs: IArguments, argsChanged, result: any;
  let previous = 0;
  return function (e: any) {
    let now = 0
    let remaining = 0;
    if (wait) {
      now = Date.now();
      remaining = wait - (now - previous);
    }
    context = e;
    args = arguments;
    argsChanged = JSON.stringify(args) !== JSON.stringify(prevArgs);
    prevArgs = Object.assign({}, args);

    if (argsChanged || (wait && remaining <= 0)) {
      if (wait) {
        previous = now;
      }
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}
