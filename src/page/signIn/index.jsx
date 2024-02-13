import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';

import Button from '../../components/button';

export default function SignIn() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  function handleSignin() {
    navigate('/Products');

  }

  return (
    <div className='Container'>
    <div className='Signin-container'>
    <svg className='svg' width="126" height="45" viewBox="0 0 126 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_158)">
<path d="M15.6305 3.09597C13.7388 4.48154 13.0521 6.72255 13.5581 8.74669C13.8955 10.1443 13.5581 11.6263 12.546 12.6504L10.9677 14.2287C9.94358 15.2529 8.47367 15.5782 7.06401 15.2408C5.03987 14.7468 2.78681 15.4336 1.41328 17.3131C0.124101 19.0843 0.0397618 21.5421 1.23256 23.3856C3.18441 26.3856 7.24473 26.6868 9.63033 24.3133C11.0641 22.8795 11.5099 20.8554 10.9918 19.0361C10.6183 17.7228 11.0761 16.3011 12.0521 15.3251L13.6304 13.7468C14.5943 12.7829 16.016 12.313 17.3413 12.6865C19.1606 13.2046 21.1848 12.7588 22.6185 11.3251C25.0041 8.93947 24.6909 4.87914 21.6908 2.92729C19.8595 1.73449 17.3895 1.81883 15.6184 3.10802L15.6305 3.09597Z" fill="#061DB2"/>
<path d="M31.233 5.1079C29.3414 6.49347 28.6667 8.73448 29.1607 10.7586C29.498 12.1562 29.1607 13.6382 28.1486 14.6623L26.2932 16.5178C25.3293 17.4817 23.9076 17.9515 22.5822 17.578C20.7629 17.06 18.7388 17.5058 17.305 18.9395C15.8713 20.3733 15.4255 22.3974 15.9435 24.2167C16.317 25.53 15.8592 26.9517 14.8833 27.9277L13.0278 29.7831C12.0037 30.8072 10.5338 31.1325 9.12413 30.7952C7.09999 30.3012 4.84693 30.988 3.4734 32.8675C2.18422 34.6386 2.09988 37.0965 3.29268 38.9399C5.24453 41.94 9.30485 42.2412 11.6904 39.8677C13.1242 38.4339 13.57 36.4098 13.0519 34.5904C12.6784 33.2772 13.1363 31.8554 14.1122 30.8795L15.9676 29.0241C16.9315 28.0602 18.3532 27.5903 19.6786 27.9638C21.4979 28.4819 23.522 28.0361 24.9558 26.6023C26.3895 25.1686 26.8353 23.1444 26.3173 21.3251C25.9438 20.0118 26.4016 18.5901 27.3775 17.6142L29.233 15.7587C30.1969 14.7949 31.6186 14.325 32.9439 14.6985C34.7632 15.2165 36.7874 14.7708 38.2211 13.337C40.6067 10.9514 40.2935 6.89107 37.2934 4.93922C35.462 3.74643 32.9921 3.83077 31.221 5.11995L31.233 5.1079Z" fill="#061DB2"/>
<path d="M33.2451 20.7227C31.3535 22.1083 30.6788 24.3493 31.1728 26.3735C31.5102 27.7711 31.1728 29.253 30.1607 30.2772L28.5824 31.8555C27.5583 32.8796 26.0884 33.2049 24.6787 32.8676C22.6546 32.3736 20.4015 33.0603 19.028 34.9399C17.7388 36.711 17.6544 39.1689 18.8472 41.0123C20.7991 44.0124 24.8594 44.3256 27.245 41.9401C28.6788 40.5063 29.1246 38.4821 28.6065 36.6628C28.233 35.3496 28.6908 33.9278 29.6667 32.9519L31.2451 31.3736C32.209 30.4097 33.6307 29.9398 34.956 30.3133C36.7753 30.8314 38.7995 30.3856 40.2332 28.9518C42.6188 26.5662 42.3056 22.5059 39.3055 20.5541C37.4741 19.3613 35.0042 19.4456 33.2331 20.7348L33.2451 20.7227Z" fill="#061DB2"/>
</g>
<path d="M60.9624 8.93366L68.4955 30.9779H68.7994L76.3326 8.93366H80.7467L71.0065 36H66.2884L56.5482 8.93366H60.9624ZM88.7391 8.93366V36H84.6553V8.93366H88.7391ZM94.6863 8.93366H99.6423L108.259 29.9735H108.576L117.193 8.93366H122.149V36H118.264V16.4139H118.012L110.03 35.9604H106.805L98.8229 16.4007H98.5718V36H94.6863V8.93366Z" fill="#061DB2"/>
<defs>
<clipPath id="clip0_0_158">
<rect width="41.4346" height="41.4346" fill="white" transform="translate(0.376953 2.07172)"/>
</clipPath>
</defs>
</svg>
 <h2>
           Xush kelibsiz!
           </h2>
           <p>
           Login parolingizni kiritib o'z kabinetingizga kiring.
           </p>

      <div className='Sign-Card'>
      <Input
            label="Login"
            type="text"
            placeholder="Loginingizni kiriting"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Paroliningizni kiriting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Kirish" onClick={handleSignin} />
      </div>
    </div>
    <div className='Signin-wrapper-picture'>
<svg width="600" height="90vh" viewBox="0 0 1020 960" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_5)">
<path d="M823.101 191.895H192.898V818.686H823.101V191.895Z" fill="#AAE0FF"/>
<path d="M5.82193 960H1014.43C1017.51 960 1020 957.511 1020 954.44C1020 951.369 1017.51 948.88 1014.43 948.88H5.82193C2.74638 948.88 0.253174 951.369 0.253174 954.44C0.253174 957.511 2.74638 960 5.82193 960Z" fill="#2D5B98"/>
<path d="M221.252 771.839H333.969V848.549C333.969 879.606 308.714 904.822 277.608 904.822C246.502 904.822 221.247 879.606 221.247 848.549V771.839H221.252Z" fill="#5896FA"/>
<path d="M221.252 829.816H215.005V948.884H221.252V829.816Z" fill="#0E0E0E"/>
<path d="M340.216 829.816H333.969V948.884H340.216V829.816Z" fill="#0E0E0E"/>
<path d="M292.413 829.816H286.166V948.884H292.413V829.816Z" fill="#0E0E0E"/>
<path d="M334.26 904.822H215.005V911.059H334.26V904.822Z" fill="#0E0E0E"/>
<path d="M365.384 645.107C372.186 654.887 358.496 663.318 356.362 676.878C354.229 690.437 369.784 698.064 353.287 715.816C343.128 726.75 334.547 712.228 326.289 728.985C318.032 745.742 324.538 748.568 315.256 754.596C299.073 765.107 274.314 741.877 282.64 725.138C290.966 708.398 307.813 709.897 300.02 696.124C292.226 682.351 289.328 676.419 302.768 669.342C319.401 660.584 334.056 668.628 335.398 655.814C336.735 643 356.39 632.166 365.389 645.107H365.384Z" fill="#FFCA59"/>
<path d="M294.283 771.072L291.485 770.517C304.597 704.337 348.073 657.999 348.514 657.536L350.584 659.498C350.152 659.952 307.235 705.727 294.287 771.072H294.283Z" fill="#0E0E0E"/>
<path d="M147.402 620.655C140.368 634.964 160.187 643.372 165.737 660.888C171.288 678.404 150.846 684.591 176.251 704.773C191.902 717.202 195.173 709.434 200.929 737.239C205.992 761.719 224.623 738.424 238.554 752.793C256.53 771.331 284.619 730.643 270.229 710.165C255.838 689.688 239.046 694.984 246.584 675.193C254.123 655.405 245.133 640.492 225.924 633.828C202.148 625.574 193.599 645.498 189.245 628.809C184.896 612.119 156.702 601.731 147.402 620.659V620.655Z" fill="#ED5A24"/>
<path d="M266.862 773.075C236.548 689.156 170.551 637.249 169.891 636.731L172.234 633.719C172.907 634.242 239.769 686.835 270.456 771.78L266.862 773.075Z" fill="#0E0E0E"/>
<path d="M349.461 540.765C482.586 540.765 590.505 433.015 590.505 300.098C590.505 167.181 482.586 59.4299 349.461 59.4299C216.336 59.4299 108.416 167.181 108.416 300.098C108.416 433.015 216.336 540.765 349.461 540.765Z" stroke="#2E77E6" stroke-width="8.73" stroke-miterlimit="10"/>
<path d="M410.49 284.303C410.744 282.427 410.922 280.524 410.922 278.575C410.922 255.149 391.904 236.162 368.442 236.162C350.839 236.162 335.739 246.85 329.297 262.081C324.051 257.416 317.158 254.559 309.583 254.559C293.186 254.559 279.897 267.828 279.897 284.199H274.355C258.591 284.199 245.693 297.077 245.693 312.817C245.693 328.557 258.591 341.435 274.355 341.435H408.374C424.138 341.435 437.037 328.557 437.037 312.817C437.037 297.79 425.271 285.403 410.49 284.308V284.303Z" fill="white"/>
<path d="M436.855 423.477H257.417C251.379 423.477 246.484 428.364 246.484 434.393V584.696C246.484 590.725 251.379 595.612 257.417 595.612H436.855C442.893 595.612 447.787 590.725 447.787 584.696V434.393C447.787 428.364 442.893 423.477 436.855 423.477Z" fill="#5896FA"/>
<path d="M408.078 527.41H286.726C282.754 527.41 279.505 524.167 279.505 520.201C279.505 516.236 282.754 512.992 286.726 512.992H408.078C412.05 512.992 415.299 516.236 415.299 520.201C415.299 524.167 412.05 527.41 408.078 527.41Z" fill="white"/>
<path d="M408.078 550.627H286.726C282.754 550.627 279.505 547.384 279.505 543.418C279.505 539.453 282.754 536.209 286.726 536.209H408.078C412.05 536.209 415.299 539.453 415.299 543.418C415.299 547.384 412.05 550.627 408.078 550.627Z" fill="white"/>
<path d="M309.387 544.059C309.387 545.462 308.25 546.598 306.844 546.598C305.438 546.598 304.301 545.462 304.301 544.059C304.301 542.655 305.438 541.519 306.844 541.519C308.25 541.519 309.387 542.655 309.387 544.059Z" fill="#80B2FF"/>
<path d="M318.1 544.059C318.1 545.462 316.963 546.598 315.557 546.598C314.151 546.598 313.014 545.462 313.014 544.059C313.014 542.655 314.151 541.519 315.557 541.519C316.963 541.519 318.1 542.655 318.1 544.059Z" fill="#80B2FF"/>
<path d="M326.817 544.059C326.817 545.462 325.68 546.598 324.274 546.598C322.868 546.598 321.731 545.462 321.731 544.059C321.731 542.655 322.868 541.519 324.274 541.519C325.68 541.519 326.817 542.655 326.817 544.059Z" fill="#80B2FF"/>
<path d="M335.53 544.059C335.53 545.462 334.392 546.598 332.986 546.598C331.581 546.598 330.443 545.462 330.443 544.059C330.443 542.655 331.581 541.519 332.986 541.519C334.392 541.519 335.53 542.655 335.53 544.059Z" fill="#80B2FF"/>
<path d="M344.247 544.059C344.247 545.462 343.109 546.598 341.704 546.598C340.298 546.598 339.16 545.462 339.16 544.059C339.16 542.655 340.298 541.519 341.704 541.519C343.109 541.519 344.247 542.655 344.247 544.059Z" fill="#80B2FF"/>
<path d="M352.964 544.059C352.964 545.462 351.826 546.598 350.421 546.598C349.015 546.598 347.877 545.462 347.877 544.059C347.877 542.655 349.015 541.519 350.421 541.519C351.826 541.519 352.964 542.655 352.964 544.059Z" fill="#80B2FF"/>
<path d="M361.676 544.059C361.676 545.462 360.539 546.598 359.133 546.598C357.727 546.598 356.59 545.462 356.59 544.059C356.59 542.655 357.727 541.519 359.133 541.519C360.539 541.519 361.676 542.655 361.676 544.059Z" fill="#80B2FF"/>
<path d="M370.394 544.059C370.394 545.462 369.256 546.598 367.85 546.598C366.444 546.598 365.307 545.462 365.307 544.059C365.307 542.655 366.444 541.519 367.85 541.519C369.256 541.519 370.394 542.655 370.394 544.059Z" fill="#80B2FF"/>
<path d="M379.111 544.059C379.111 545.462 377.973 546.598 376.567 546.598C375.162 546.598 374.024 545.462 374.024 544.059C374.024 542.655 375.162 541.519 376.567 541.519C377.973 541.519 379.111 542.655 379.111 544.059Z" fill="#80B2FF"/>
<path d="M347.445 492.819C362.851 492.819 375.339 480.35 375.339 464.969C375.339 449.587 362.851 437.119 347.445 437.119C332.04 437.119 319.551 449.587 319.551 464.969C319.551 480.35 332.04 492.819 347.445 492.819Z" fill="white"/>
<path d="M347.482 463.847C350.202 463.847 352.718 462.52 354.324 460.499C355.512 459.036 356.208 457.151 356.208 455.062C356.208 450.251 352.295 446.276 347.477 446.276C342.659 446.276 338.678 450.251 338.678 455.062C338.678 457.156 339.374 459.036 340.562 460.499C342.168 462.52 344.679 463.847 347.477 463.847H347.482Z" fill="#005CEA"/>
<path d="M362.946 479.505C362.946 485.051 331.935 485.051 331.935 479.505L331.945 473.045C333.168 464.215 360.425 463.842 362.95 473.045V479.505H362.946Z" fill="#005CEA"/>
<path d="M292.745 542.092V541.706C292.745 540.143 291.471 538.871 289.906 538.871C288.341 538.871 287.067 540.143 287.067 541.706V542.092H286.635V547.202C286.635 548.083 293.195 548.083 293.195 547.202V542.092H292.745ZM288.077 541.706C288.077 540.725 288.682 539.834 289.906 539.834C291.13 539.834 291.753 540.67 291.753 541.706V542.092H288.077V541.706ZM290.388 544.667V546.144C290.388 546.407 290.161 546.598 289.897 546.598C289.633 546.598 289.442 546.407 289.442 546.144V544.667C289.178 544.518 288.987 544.25 288.987 543.909C288.987 543.418 289.405 543 289.897 543C290.388 543 290.807 543.418 290.807 543.909C290.807 544.25 290.616 544.513 290.388 544.667Z" fill="#5896FA"/>
<path d="M289.91 519.679C290.484 519.679 291.016 519.397 291.353 518.975C291.603 518.666 291.749 518.271 291.749 517.826C291.749 516.813 290.925 515.972 289.906 515.972C288.887 515.972 288.05 516.813 288.05 517.826C288.05 518.266 288.195 518.666 288.445 518.975C288.782 519.402 289.314 519.679 289.906 519.679H289.91Z" fill="#5896FA"/>
<path d="M293.173 522.981C293.173 524.153 286.594 524.153 286.594 522.981L286.63 521.619C286.889 519.756 292.64 519.674 293.173 521.619V522.981Z" fill="#5896FA"/>
<path d="M332.418 522.318H305.825C304.66 522.318 303.705 521.364 303.705 520.201C303.705 519.038 304.66 518.085 305.825 518.085H332.418C333.582 518.085 334.538 519.038 334.538 520.201C334.538 521.364 333.582 522.318 332.418 522.318Z" fill="#80B2FF"/>
<path d="M367.491 522.318H340.898C339.734 522.318 338.778 521.364 338.778 520.201C338.778 519.038 339.734 518.085 340.898 518.085H367.491C368.656 518.085 369.611 519.038 369.611 520.201C369.611 521.364 368.656 522.318 367.491 522.318Z" fill="#80B2FF"/>
<path d="M356.294 560.771H332.199C328.782 560.771 326.012 563.536 326.012 566.946C326.012 570.357 328.782 573.122 332.199 573.122H356.294C359.712 573.122 362.482 570.357 362.482 566.946C362.482 563.536 359.712 560.771 356.294 560.771Z" fill="#1251B3"/>
<path d="M100.423 289.668C86.6008 304.454 64.5396 316.569 40.936 321.734C40.9269 323.31 40.8905 332.027 40.7086 372.224C40.4674 425.844 91.5781 452.045 99.5126 456.065C107.202 452.531 158.954 426.371 159.195 372.751C159.377 332.559 159.413 323.837 159.422 322.261C135.864 316.887 114.112 304.577 100.423 289.668Z" fill="white"/>
<path d="M100.282 299.362C86.7464 311.758 67.9927 321.507 47.3692 326.817L47.1645 372.247C47.0735 393.033 55.3402 411.839 71.7507 428.142C82.5288 438.854 93.8665 445.499 99.6173 448.484C99.863 448.357 100.136 448.216 100.404 448.08V299.471C100.363 299.434 100.322 299.403 100.286 299.366L100.282 299.362Z" fill="#296ACC"/>
<path d="M100.395 299.466V448.075C106.373 444.968 117.247 438.549 127.657 428.388C144.208 412.235 152.648 393.501 152.739 372.715L152.944 327.285C132.429 321.806 113.812 311.935 100.395 299.466Z" fill="#2E77E6"/>
<path d="M76.4369 364.947V400.142C76.4369 404.063 124.363 404.063 124.363 400.142V364.947H76.4369ZM102.82 383.635V393.61C102.82 394.941 101.737 396.04 100.409 396.04C99.0804 396.04 97.9749 394.937 97.9749 393.61V383.612C95.923 382.69 94.4807 380.619 94.4807 378.229C94.4807 374.963 97.1423 372.328 100.413 372.328C103.685 372.328 106.323 374.963 106.323 378.229C106.323 380.637 104.904 382.708 102.829 383.635H102.82Z" fill="white"/>
<path d="M120.163 362.439H115.314V360.068C115.314 351.855 108.621 345.178 100.4 345.178C92.1786 345.178 85.4861 351.86 85.4861 360.068V362.439H80.6362V360.068C80.6362 349.184 89.5034 340.331 100.404 340.331C111.305 340.331 120.168 349.184 120.168 360.068V362.439H120.163Z" fill="white"/>
<path d="M455.144 0H368.574V107.89H455.144V0Z" fill="#296ACC"/>
<path d="M466.373 11.1383H379.802V119.028H466.373V11.1383Z" fill="white" stroke="#5896FA" stroke-width="6.34" stroke-miterlimit="10"/>
<path d="M480.627 22.0812H394.056V129.971H480.627V22.0812Z" fill="white" stroke="#5896FA" stroke-width="6.34" stroke-miterlimit="10"/>
<path d="M491 33.2195H404.429V141.109H491V33.2195Z" fill="#5896FA"/>
<path d="M477.528 50.9308H432.751V57.9491H477.528V50.9308Z" fill="#005CEA"/>
<path d="M477.533 67.4202H419.511V74.4384H477.533V67.4202Z" fill="#005CEA"/>
<path d="M477.533 83.9051H419.511V90.9233H477.533V83.9051Z" fill="#005CEA"/>
<path d="M477.533 100.39H419.511V107.408H477.533V100.39Z" fill="#005CEA"/>
<path d="M477.533 116.875H419.511V123.893H477.533V116.875Z" fill="#005CEA"/>
<path d="M208.45 124.235C212.22 107.802 201.933 91.429 185.474 87.6652C169.015 83.9014 152.616 94.1722 148.846 110.606C145.077 127.039 155.364 143.412 171.823 147.176C188.282 150.94 204.681 140.669 208.45 124.235Z" fill="white"/>
<path d="M226.898 146.465C230.861 139.901 233.34 132.805 234.391 125.646L236.671 125.978L241.17 126.637H241.229C242.444 118.451 242.03 110.165 240.046 102.252L233.354 103.906C231.557 96.7468 228.395 89.9194 223.891 83.9096L229.437 79.7941C224.691 73.3619 218.599 67.7382 211.329 63.3638L207.758 69.2781C201.161 65.3034 194.077 62.8459 186.907 61.7966L187.908 54.9737C179.705 53.7608 171.392 54.1969 163.481 56.1548L165.137 62.8368C157.962 64.6266 151.128 67.7882 145.109 72.2853L140.987 66.7479C134.545 71.4858 128.912 77.5682 124.531 84.8272L130.455 88.3931C126.478 94.9797 124.012 102.052 122.961 109.211L118.125 108.503L116.151 108.23L116.128 108.217C114.913 116.407 115.35 124.706 117.311 132.606L124.003 130.952C125.8 138.111 128.981 144.948 133.489 150.962L127.943 155.077C132.689 161.51 138.758 167.12 146.028 171.494L149.6 165.58C156.197 169.55 163.303 172.026 170.473 173.075L169.686 178.376L169.472 179.898C177.675 181.111 185.965 180.661 193.877 178.703L192.221 172.021C199.391 170.227 206.238 167.052 212.285 162.563L216.406 168.101C222.826 163.349 228.445 157.29 232.826 150.031L226.903 146.465H226.898ZM162.88 143.576C148.408 134.863 143.753 116.112 152.484 101.662C161.197 87.2347 179.978 82.5923 194.45 91.3048C208.9 100.008 213.554 118.755 204.837 133.182C196.111 147.632 177.33 152.279 162.88 143.576Z" fill="#005CEA"/>
<path d="M112.465 142.413C110.236 139.047 107.415 136.267 104.244 134.15L104.918 133.142L106.251 131.156L106.264 131.129C102.638 128.704 98.5981 127.027 94.3806 126.178L93.6572 129.73C89.8401 128.962 85.8774 128.926 81.992 129.707L81.2868 126.146C77.1512 126.946 73.0974 128.567 69.3713 131.029L71.3822 134.064C67.9973 136.299 65.2266 139.106 63.1064 142.272L60.0809 140.255C57.6514 143.876 55.9771 147.923 55.1218 152.12L58.6796 152.842C57.9107 156.654 57.8743 160.61 58.6569 164.49L55.09 165.194C55.8907 169.323 57.5149 173.37 59.9808 177.091L63.02 175.083C65.2584 178.462 68.0701 181.229 71.2412 183.346L69.8126 185.481L69.2348 186.357L69.2211 186.366C72.8472 188.792 76.9009 190.464 81.1048 191.318L81.8282 187.765C85.6453 188.533 89.6217 188.565 93.5026 187.784L94.2077 191.345C98.3434 190.545 102.388 188.933 106.114 186.466L104.103 183.432C107.488 181.197 110.268 178.385 112.388 175.214L114.736 176.786L115.414 177.231C117.843 173.611 119.504 169.573 120.359 165.375L116.801 164.653C117.57 160.842 117.602 156.872 116.829 152.988L120.395 152.284C119.581 148.164 117.966 144.125 115.5 140.405L112.461 142.413H112.465ZM96.6236 172.157C89.2031 177.059 79.2212 175.033 74.3122 167.624C69.4077 160.224 71.4414 150.262 78.8618 145.356C86.2732 140.46 96.2505 142.49 101.155 149.89C106.064 157.299 104.035 167.265 96.6236 172.162V172.157Z" fill="#1251B3"/>
<path d="M612.525 156.681H538.198C536.633 156.681 535.364 157.948 535.364 159.511V201.62C535.364 203.183 536.633 204.45 538.198 204.45H612.525C614.091 204.45 615.36 203.183 615.36 201.62V159.511C615.36 157.948 614.091 156.681 612.525 156.681Z" fill="#005CEA"/>
<path d="M615.36 165.702H535.363V173.947H615.36V165.702Z" fill="#5896FA"/>
<path d="M553.689 195.283H541.929C541.182 195.283 540.573 195.887 540.573 196.637C540.573 197.382 541.178 197.991 541.929 197.991H553.689C554.436 197.991 555.045 197.387 555.045 196.637C555.045 195.892 554.44 195.283 553.689 195.283Z" fill="#D1F5FF"/>
<path d="M571.774 195.283H560.013C559.267 195.283 558.658 195.887 558.658 196.637C558.658 197.382 559.263 197.991 560.013 197.991H571.774C572.52 197.991 573.13 197.387 573.13 196.637C573.13 195.892 572.525 195.283 571.774 195.283Z" fill="#D1F5FF"/>
<path d="M589.864 195.283H578.103C577.357 195.283 576.747 195.887 576.747 196.637C576.747 197.382 577.352 197.991 578.103 197.991H589.864C590.61 197.991 591.219 197.387 591.219 196.637C591.219 195.892 590.614 195.283 589.864 195.283Z" fill="#D1F5FF"/>
<path d="M607.953 195.283H596.192C595.446 195.283 594.836 195.887 594.836 196.637C594.836 197.382 595.441 197.991 596.192 197.991H607.953C608.699 197.991 609.309 197.387 609.309 196.637C609.309 195.892 608.704 195.283 607.953 195.283Z" fill="#D1F5FF"/>
<path d="M541.383 159.107C540.559 159.107 539.89 159.774 539.89 160.597V161.119C539.89 161.941 540.559 162.609 541.383 162.609C542.206 162.609 542.875 161.941 542.875 161.119V160.597C542.875 159.774 542.206 159.107 541.383 159.107Z" fill="#D1F5FF"/>
<path d="M544.604 160.86C544.604 161.828 545.391 162.613 546.36 162.613H552.584C553.553 162.613 554.34 161.828 554.34 160.86C554.34 159.892 553.553 159.107 552.584 159.107H546.36C545.391 159.107 544.604 159.892 544.604 160.86Z" fill="#D1F5FF"/>
<path d="M551.824 178.381H543.785C542.496 178.381 541.451 179.424 541.451 180.711V187.634C541.451 188.921 542.496 189.964 543.785 189.964H551.824C553.113 189.964 554.158 188.921 554.158 187.634V180.711C554.158 179.424 553.113 178.381 551.824 178.381Z" fill="#5896FA"/>
<path d="M583.089 326.126V320.671C583.089 318.195 581.078 316.183 578.599 316.183H530.764C528.284 316.183 526.269 318.191 526.269 320.671V417.122H649.996V326.126H583.085H583.089Z" fill="#1251B3"/>
<path d="M655.142 329.438H533.817L526.269 417.118H649.396L655.142 329.438Z" fill="white"/>
<path d="M650.001 417.118H526.273L539.404 330.528C539.786 327.993 541.97 326.122 544.536 326.122H657.767C660.943 326.122 663.372 328.943 662.899 332.077L650.005 417.118H650.001Z" fill="#3383FF"/>
<path d="M682.998 349.454C694.069 338.4 694.069 320.479 682.998 309.425C671.927 298.371 653.977 298.371 642.906 309.425C631.836 320.479 631.836 338.4 642.906 349.454C653.977 360.507 671.927 360.507 682.998 349.454Z" fill="#005CEA"/>
<path d="M662.954 358.778C646.748 358.778 633.563 345.614 633.563 329.438C633.563 313.262 646.748 300.098 662.954 300.098C679.159 300.098 692.344 313.262 692.344 329.438C692.344 345.614 679.159 358.778 662.954 358.778ZM662.954 302.169C647.89 302.169 635.642 314.402 635.642 329.438C635.642 344.474 647.89 356.711 662.954 356.711C678.017 356.711 690.265 344.474 690.265 329.438C690.265 314.402 678.017 302.169 662.954 302.169Z" fill="white"/>
<path d="M649.305 324.318V344.36C649.305 346.59 676.598 346.59 676.598 344.36V324.318H649.305ZM664.332 334.962V340.644C664.332 341.403 663.718 342.03 662.958 342.03C662.198 342.03 661.57 341.403 661.57 340.644V334.952C660.401 334.426 659.578 333.249 659.578 331.886C659.578 330.028 661.093 328.525 662.954 328.525C664.814 328.525 666.32 330.024 666.32 331.886C666.32 333.258 665.51 334.439 664.328 334.962H664.332Z" fill="white"/>
<path d="M674.209 322.888H671.448V321.538C671.448 316.864 667.635 313.057 662.954 313.057C658.272 313.057 654.459 316.864 654.459 321.538V322.888H651.698V321.538C651.698 315.342 656.748 310.3 662.954 310.3C669.159 310.3 674.209 315.342 674.209 321.538V322.888Z" fill="white"/>
<path d="M564.508 103.392C570.504 103.392 575.364 98.5399 575.364 92.554C575.364 86.5681 570.504 81.7155 564.508 81.7155C558.513 81.7155 553.653 86.5681 553.653 92.554C553.653 98.5399 558.513 103.392 564.508 103.392Z" fill="#AAE0FF"/>
<path d="M290.202 134.825C291.218 128.926 287.251 123.322 281.342 122.308C275.433 121.294 269.82 125.255 268.805 131.154C267.79 137.054 271.757 142.658 277.665 143.672C283.574 144.685 289.187 140.725 290.202 134.825Z" fill="#AAE0FF"/>
<path d="M640.619 282.94C643.755 282.94 646.297 280.402 646.297 277.271C646.297 274.14 643.755 271.602 640.619 271.602C637.483 271.602 634.941 274.14 634.941 277.271C634.941 280.402 637.483 282.94 640.619 282.94Z" fill="white"/>
<path d="M51.9103 289.195C52.6269 286.147 50.7329 283.096 47.6801 282.381C44.6272 281.665 41.5715 283.556 40.8548 286.604C40.1382 289.652 42.0321 292.703 45.085 293.419C48.1379 294.134 51.1937 292.243 51.9103 289.195Z" fill="#AAE0FF"/>
<path d="M139.895 504.288C145.295 501.689 147.563 495.21 144.959 489.818C142.355 484.426 135.867 482.163 130.466 484.762C125.066 487.362 122.799 493.84 125.402 499.232C128.006 504.624 134.495 506.888 139.895 504.288Z" fill="#AAE0FF"/>
<path d="M309.378 25.4154C308.341 25.4154 307.499 24.5751 307.499 23.5394V3.43414C307.499 2.39844 308.341 1.55807 309.378 1.55807C310.416 1.55807 311.257 2.39844 311.257 3.43414V23.5348C311.257 24.5705 310.416 25.4109 309.378 25.4109V25.4154Z" fill="#AAE0FF"/>
<path d="M297.431 13.4868C297.431 12.4511 298.273 11.6107 299.31 11.6107H319.442C320.479 11.6107 321.321 12.4511 321.321 13.4868C321.321 14.5224 320.479 15.3628 319.442 15.3628H299.31C298.273 15.3628 297.431 14.5224 297.431 13.4868Z" fill="#AAE0FF"/>
<path d="M523.416 283.531C522.379 283.531 521.537 282.691 521.537 281.655V261.554C521.537 260.519 522.379 259.678 523.416 259.678C524.453 259.678 525.295 260.519 525.295 261.554V281.655C525.295 282.691 524.453 283.531 523.416 283.531Z" fill="white"/>
<path d="M511.469 271.602C511.469 270.567 512.31 269.726 513.348 269.726H533.48C534.517 269.726 535.359 270.567 535.359 271.602C535.359 272.638 534.517 273.478 533.48 273.478H513.348C512.31 273.478 511.469 272.638 511.469 271.602Z" fill="white"/>
<path d="M502.947 548.297C501.91 548.297 501.068 547.457 501.068 546.421V526.32C501.068 525.284 501.91 524.444 502.947 524.444C503.985 524.444 504.826 525.284 504.826 526.32V546.421C504.826 547.457 503.985 548.297 502.947 548.297Z" fill="white"/>
<path d="M491 536.368C491 535.333 491.842 534.492 492.879 534.492H513.011C514.048 534.492 514.89 535.333 514.89 536.368C514.89 537.404 514.048 538.244 513.011 538.244H492.879C491.842 538.244 491 537.404 491 536.368Z" fill="white"/>
<path d="M335.375 404.262C338.699 404.262 341.394 401.572 341.394 398.253C341.394 394.934 338.699 392.243 335.375 392.243C332.051 392.243 329.356 394.934 329.356 398.253C329.356 401.572 332.051 404.262 335.375 404.262Z" stroke="white" stroke-width="4.23" stroke-miterlimit="10"/>
<path d="M483.325 948.821H459.767L457.333 897.681H485.763L483.325 948.821Z" fill="#0E0E0E"/>
<path d="M892.733 948.821H869.175L866.741 897.681H895.172L892.733 948.821Z" fill="#0E0E0E"/>
<path d="M872.196 808.92C869.598 816.96 866.768 825.214 863.674 833.681H472.61C472.61 833.681 422.141 628.582 472.61 591.074C473.902 590.115 475.449 589.171 477.255 588.248C545.227 553.375 817.75 545.19 873.079 590.052C873.502 590.383 873.893 590.729 874.271 591.074C894.658 609.762 912.383 684.346 872.201 808.92H872.196Z" fill="#EA7B00"/>
<path d="M620.05 833.681H472.697L487.065 689.933C512.761 701.067 581.165 759.843 620.046 833.681H620.05Z" fill="#982C20"/>
<path d="M872.196 808.92C869.598 816.96 866.768 825.214 863.675 833.681H721.635C746.062 788.451 805.294 719.941 862.81 688.402L872.201 808.92H872.196Z" fill="#982C20"/>
<path d="M921.2 687.921H866.982C857.869 687.921 850.167 694.662 848.97 703.683L831.677 834.226H514.804L497.51 703.683C496.314 694.662 488.611 687.921 479.498 687.921H425.28C413.97 687.921 405.408 698.128 407.396 709.248L437.496 926.644H467.274H908.02H908.98L939.08 709.248C941.068 698.128 932.506 687.921 921.196 687.921H921.2Z" fill="#EA7B00"/>
<path d="M828.519 762.922C854.034 771.449 849.061 825.387 828.519 833.681H518.998C495.882 827.726 493.93 756.377 527.265 761.746C731.289 800.048 741.175 738.942 828.519 762.927V762.922Z" fill="#F2B066"/>
<path d="M592.607 708.253C592.511 722.18 593.262 735.286 594.764 746.769H739.897L748.491 605.278C739.87 553.598 716.271 541.074 678.914 541.074C645.483 541.074 623.217 568.302 609.686 604.751C597.989 636.245 592.816 674.606 592.607 708.253Z" fill="#007880"/>
<path d="M592.607 710.983L645.128 707.826C615.969 698.296 613.649 653.615 643.29 625.811L609.682 604.747C597.985 636.24 592.812 677.337 592.602 710.979L592.607 710.983Z" fill="#005459"/>
<path d="M582.607 776.009H782.009V708.258H602.393L582.607 776.009Z" fill="#0E0E0E"/>
<path d="M807.486 754.51L753.928 948.821H712.162C725.384 866.133 722.422 812.381 734.861 743.721C745.771 687.362 820.471 702.275 807.486 754.51Z" fill="#0E0E0E"/>
<path d="M738.928 948.821C738.928 948.694 738.919 948.566 738.919 948.435C738.919 934.03 750.616 922.351 765.043 922.351C779.47 922.351 791.167 934.03 791.167 948.435C791.167 948.562 791.158 948.689 791.158 948.821H738.932H738.928Z" fill="#B15626"/>
<path d="M770.075 922.838L760.58 919.939C754.31 907.629 727.581 909.155 731.303 924.137C720.816 925.695 715.297 920.48 715.297 920.48L712.162 948.816H768.796L770.075 922.838Z" fill="#B15626"/>
<path d="M572.306 754.51L625.865 948.821H667.631C654.409 866.133 657.371 812.381 644.932 743.721C634.022 687.362 559.322 702.275 572.306 754.51Z" fill="#0E0E0E"/>
<path d="M640.865 948.821C640.865 948.694 640.874 948.566 640.874 948.435C640.874 934.03 629.177 922.351 614.75 922.351C600.323 922.351 588.626 934.03 588.626 948.435C588.626 948.562 588.635 948.689 588.635 948.821H640.86H640.865Z" fill="#B15626"/>
<path d="M609.718 922.838L619.213 919.939C625.483 907.629 652.212 909.155 648.49 924.137C658.977 925.695 664.496 920.48 664.496 920.48L667.631 948.816H610.997L609.718 922.838Z" fill="#B15626"/>
<path d="M656.548 545.617C676.134 557.486 678.927 592.732 668.886 606.773L612.994 648.346L669.901 677.604L660.656 707.826C660.656 707.826 601.26 703.002 572.184 673.221C544.267 644.63 612.325 560.648 656.552 545.612L656.548 545.617Z" fill="#007880"/>
<path d="M696.284 599.082C679.528 578.078 691.102 545.617 712.458 546.571C782.008 571.019 803.478 638.898 781.444 669.369C762.568 695.475 679.528 705.527 679.528 705.527V676.946L737.226 664.499C737.226 664.499 707.476 618.479 696.284 599.082Z" fill="#007880"/>
<path d="M635.337 698.282C634.259 688.711 639.869 676.741 654.296 674.125C679.496 669.555 688.618 683.36 690.997 693.231C691.616 695.802 689.278 698.523 687.112 698.282C684.946 698.041 683.427 696.824 683.054 694.866C682.608 692.509 681.357 689.592 678.654 688.071C681.257 693.167 680.169 698.282 673.076 698.282H635.333H635.337Z" fill="#F7A594"/>
<path d="M692.235 698.255L712.067 598.973H716.271C714.929 605.81 695.42 705.15 694.81 708.253H635.378L628.886 698.255H692.235Z" fill="#99C1FF"/>
<path d="M716.266 598.973H863.834L842.009 708.258H694.806L716.266 598.973Z" fill="white"/>
<path d="M673.245 552.735C673.245 564.032 707.162 571.523 718.25 559.649C719.929 557.868 721.08 555.656 721.526 552.948L727.913 524.335L687.403 509.086L686.198 512.824L673.245 552.735Z" fill="#F7A594"/>
<path d="M721.521 552.948L727.909 524.335L689.583 514.033C679.66 543.509 715.06 567.062 721.516 552.948H721.521Z" fill="#F4856D"/>
<path d="M684.41 498.093C682.276 526.216 704.537 550.982 723.213 552.24C741.89 553.498 767.609 532.666 769.738 504.543C771.872 476.42 754.497 452.182 730.934 450.396C707.372 448.616 686.539 469.97 684.41 498.093Z" fill="#F7A594"/>
<path d="M715.634 452.531C741.462 436.201 755.675 451.559 768.537 467.849C777.563 479.278 783.956 487.491 795.184 489.212C773.578 516.422 730.37 498.47 716.757 471.206C715.415 486.727 697.094 499.583 684.41 498.097C680.301 480.827 692.28 445.913 715.638 452.531H715.634Z" fill="#0E0E0E"/>
<path d="M691.153 509.512C697.282 508.518 701.443 502.753 700.449 496.634C699.454 490.514 693.679 486.359 687.55 487.352C681.422 488.346 677.26 494.111 678.255 500.23C679.25 506.35 685.024 510.505 691.153 509.512Z" fill="#F7A594"/>
</g>
<defs>
<clipPath id="clip0_0_5">
<rect width="1019.75" height="960" fill="white" transform="translate(0.253174)"/>
</clipPath>
</defs>
</svg>

    </div>
    </div>
  )
}
