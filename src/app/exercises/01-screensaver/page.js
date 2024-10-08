import React from 'react';
import Link from 'next/link';



function ScreenSaverPickExercise() {
  return (
    <main className="screen-saver-wrapper">
      <p>
        This screen saver consists of two color:
      </p>
      <ol>
        <li>
          <Link href="/exercises/01-screensaver/red">
            red
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/blue">
            blue
          </Link>
        </li>
      </ol>
    </main>
  );
}

export default ScreenSaverPickExercise;