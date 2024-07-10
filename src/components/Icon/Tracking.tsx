const Tracking = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 56 34'>
      <defs>
        <filter id='a' width='102.9%' height='112.5%' x='-1.5%' y='-4.5%' filterUnits='objectBoundingBox'>
          <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1' />
          <feColorMatrix
            in='shadowBlurOuter1'
            result='shadowMatrixOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'
          />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <g fill='none' fillRule='evenodd' filter='url(#a)' transform='translate(1.51 1)'>
        <path
          fill='#C8102E'
          d='M0 20.8l16.506-16c4.072 2.533 6.291 4.235 6.657 5.105.549 1.306-.714 1.075.837 9.504-3.587 0-11.587.464-24 1.391zM18.601 3.702c-1.194-.867-1.32-1.778-.379-2.732.942-.954 1.765-1.204 2.471-.75C22.7.51 25.135 1.797 28 4.085c0 0-2.691 2.121-3.268 3.914-2.276-2.266-4.32-3.698-6.13-4.298zM31.924 8c-1.895 1.03-2.826 2.145-3.07 4.934-.164 1.86.047 2.936.63 3.231.302-.367.922-.55 1.86-.55 1.405 0 2.12.235 3.056 1.185 0-1.185-.488-4.4-2.476-8.8zM30.4 18.973l2.394-.573 1.606 1.849c-.124 1.14-.66 1.558-1.606 1.256-.946-.302-1.744-1.146-2.394-2.532zM.8 21.791L24.875 20c1.299 2.644 2.34 4.178 3.125 4.601 0 0-18.348 1.799-25.028 1.799A20.972 20.972 0 0 0 .8 21.791z'
        />
        <ellipse cx='36.8' cy='15.2' stroke='#C8102E' strokeWidth='4' rx='10.4' ry='11.2' />
        <path
          fill='#C8102E'
          d='M44.623 22.401l2.848-.801 4.164 3.616c.593 1.527.464 2.756-.387 3.686-.85.93-2.11.93-3.777 0L44 25.216l.623-2.815z'
        />
        <path
          stroke='#FFF'
          strokeWidth='.8'
          d='M15.2 15.335l1.6-.135M19.2 9.6l1.6.136M20.8 12.831c1.039.997 1.042 1.064.147-.031'
        />
      </g>
    </svg>
  )
}

export default Tracking
