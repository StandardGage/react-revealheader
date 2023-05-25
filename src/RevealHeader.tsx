import { useEffect, useState, useRef } from "react";

export interface HeaderProps {
  neutralColor?: string;
  upColor?: string;
  throttleAmount?: number;
  children?: any;
  parentRef?: React.RefObject<HTMLElement>;
}

export default function RevealHeader({
  neutralColor = 'white',
  upColor = 'white',
  throttleAmount,
  children = <div>React Reveal-Header</div>,
  parentRef}: HeaderProps) {
  const [childrenHeight, setChildrenHeight] = useState(0);
  const scrollDirection = useScrollDirection(throttleAmount, parentRef);
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (childrenRef.current) {
      setChildrenHeight(childrenRef.current.offsetHeight);
    }
  }, [childrenRef]);

  return (
    <div className={`max-w-full overflow-visible sticky z-10 ${scrollDirection === "up" ? `${upColor}` : scrollDirection === "neutral" ? `${neutralColor}` : `${upColor}`} transition-all duration-300`}
    style={{top: `${scrollDirection === "down" ? `-${childrenHeight}px` : '0px'}`,
      backgroundColor: `${scrollDirection === "up" ? `${upColor}` : scrollDirection === "neutral" ? `${neutralColor}` : `${upColor}`}`
    }}
    >
      <div ref={childrenRef}>{children}</div>
    </div>
  );
}

function useScrollDirection(throttleAmount:number = 25, parentRef: React.RefObject<HTMLElement> | undefined) {
  const [scrollDirection, setScrollDirection] = useState("neutral");
  useEffect(() => {
    let lastScrollY = 0;
    if (parentRef) {
      lastScrollY = parentRef.current?.scrollTop || 0;
    } else {
      lastScrollY = window.pageYOffset;
    }

    const updateScrollDirection = () => {
      const scrollY = parentRef ? parentRef.current?.scrollTop || 0 : window.pageYOffset;
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
    if (parentRef) {
      parentRef.current?.addEventListener("scroll", throttledUpdateScrollDirection);
      return () => {
        parentRef.current?.removeEventListener("scroll", throttledUpdateScrollDirection);
      };
    } else {
      window.addEventListener("scroll", throttledUpdateScrollDirection);
      return () => {
        window.removeEventListener("scroll", throttledUpdateScrollDirection);
      };
    }
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
