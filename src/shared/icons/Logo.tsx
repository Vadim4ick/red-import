type Props = {
  variant?: "header" | "footer";
} & ReactTagProps<"svg">;

const Logo = (props: Props) => {
  const { variant = "header", ...otherProps } = props;

  const fill = variant === "footer" ? "white" : "#181818";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="162"
      height="28"
      viewBox="0 0 162 28"
      fill="none"
      {...otherProps}
    >
      <g clip-path="url(#clip0_566_255)">
        <path
          d="M45.2561 14.8261C46.1311 14.4195 46.8539 13.797 47.3992 12.9839C47.9445 12.1708 48.2235 11.1671 48.2235 9.99829C48.2235 9.31223 48.122 8.677 47.9064 8.07988C47.7035 7.49546 47.4246 6.99998 47.0695 6.59343C46.7271 6.18688 46.3213 5.84385 45.8648 5.55164C45.4082 5.27214 44.939 5.05616 44.4444 4.91641C43.9499 4.77666 43.4426 4.71313 42.9354 4.71313H36.5947V21.3563H39.7904V15.3216H41.9589L46.3974 21.3563H50.0242L45.2561 14.8261ZM44.3684 11.7769C43.9372 12.247 43.2905 12.4884 42.4408 12.4884H39.8031V7.54628H42.4408C43.2905 7.54628 43.9372 7.77497 44.3684 8.24504C44.7995 8.70241 45.0278 9.28682 45.0278 9.99829C45.0278 10.7097 44.7995 11.3069 44.3684 11.7769Z"
          fill="#E50E00"
        />
        <path
          d="M62.7559 14.8511C62.7559 14.038 62.6164 13.2757 62.3501 12.5515C62.0838 11.8274 61.7034 11.1921 61.2088 10.6458C60.7142 10.0995 60.0929 9.66755 59.332 9.34994C58.5711 9.03232 57.7468 8.86716 56.8338 8.86716C55.629 8.86716 54.5131 9.14666 53.5239 9.69296C52.5221 10.2393 51.7486 11.0143 51.1779 11.9798C50.6199 12.9581 50.3282 14.038 50.3282 15.2322C50.3282 17.0617 50.9496 18.5862 52.1797 19.7932C53.4098 21.0128 54.9569 21.6227 56.8211 21.6227C57.8102 21.6227 58.7106 21.4702 59.5095 21.1526C60.3211 20.8477 61.0947 20.3522 61.8429 19.6916L60.0421 17.6969C59.5222 18.1035 59.0149 18.383 58.5457 18.5481C58.0765 18.7133 57.5312 18.7895 56.9098 18.7895C56.1363 18.7895 55.4388 18.5735 54.8301 18.1543C54.2214 17.7223 53.8156 17.1379 53.5873 16.3883H62.5277C62.6798 15.9056 62.7559 15.3847 62.7559 14.8511ZM53.5873 14.0761C53.8029 13.3011 54.2087 12.6786 54.7921 12.2212C55.3754 11.7638 56.0475 11.5351 56.8211 11.5351C57.6707 11.5351 58.3428 11.7765 58.8374 12.2593C59.332 12.7421 59.6236 13.3519 59.7124 14.0761H53.5873Z"
          fill="#E50E00"
        />
        <path
          d="M74.2334 4.10298V10.5189C73.7515 9.99796 73.2062 9.5787 72.5975 9.2992C71.9888 9.00699 71.2533 8.86724 70.3656 8.86724C69.275 8.86724 68.2732 9.14674 67.3601 9.69305C66.4471 10.2393 65.7116 11.0143 65.1663 11.9926C64.621 12.9709 64.3547 14.0635 64.3547 15.2577C64.3547 16.4392 64.621 17.5191 65.1663 18.5101C65.7116 19.4884 66.4471 20.2634 67.3601 20.8097C68.2732 21.356 69.2877 21.6355 70.3656 21.6355C71.3548 21.6355 72.1664 21.4703 72.8004 21.14C73.4345 20.8097 74.0178 20.3269 74.5251 19.717V21.3814H77.3276V4.10298H74.2334ZM73.2443 17.6208C72.5975 18.2687 71.7986 18.5863 70.8348 18.5863C69.871 18.5863 69.0721 18.256 68.4254 17.6208C67.7913 16.9728 67.4616 16.1851 67.4616 15.245C67.4616 14.3049 67.7786 13.5172 68.4254 12.8565C69.0721 12.1959 69.871 11.8655 70.8348 11.8655C71.7986 11.8655 72.5975 12.1959 73.2443 12.8565C73.8783 13.5172 74.208 14.3176 74.208 15.245C74.208 16.1851 73.8783 16.9728 73.2443 17.6208Z"
          fill="#E50E00"
        />
        <path
          d="M109.576 10.1506C108.765 9.2867 107.662 8.85474 106.267 8.85474C105.354 8.85474 104.555 9.05801 103.883 9.46456C103.198 9.87111 102.678 10.3666 102.31 10.951C101.828 10.2395 101.283 9.71866 100.712 9.37563C100.129 9.0326 99.3934 8.86744 98.5184 8.86744C97.022 8.86744 95.868 9.5662 95.0817 10.951V9.12154H92.1523V21.3562H95.2846V15.0546C95.2846 14.0891 95.4875 13.3141 95.906 12.7424C96.3245 12.1707 96.9078 11.8785 97.6814 11.8785C98.4423 11.8785 99.0002 12.1198 99.368 12.6153C99.7358 13.1108 99.926 13.8731 99.926 14.9149V21.3562H103.046V14.6481C103.122 13.7842 103.363 13.1108 103.781 12.6153C104.2 12.1198 104.77 11.8785 105.48 11.8785C106.216 11.8785 106.774 12.1198 107.142 12.6153C107.509 13.1108 107.687 13.8731 107.687 14.9149V21.3562H110.807V14.2288C110.794 12.3739 110.388 11.0145 109.576 10.1506Z"
          fill={fill}
        />
        <path
          d="M126.276 11.9925C125.731 11.0143 125.008 10.2393 124.095 9.69296C123.182 9.13396 122.18 8.86716 121.09 8.86716C120.088 8.86716 119.276 9.03232 118.63 9.37534C117.983 9.70567 117.4 10.1884 116.892 10.7983V9.12125H114.128V26.2345H117.235V19.9584C117.717 20.4919 118.249 20.8985 118.858 21.1907C119.467 21.4829 120.202 21.6227 121.103 21.6227C122.193 21.6227 123.195 21.3432 124.121 20.7969C125.034 20.2379 125.769 19.4756 126.302 18.4973C126.834 17.5191 127.113 16.4392 127.113 15.2576C127.088 14.0634 126.822 12.9708 126.276 11.9925ZM123.03 17.6207C122.396 18.2686 121.584 18.599 120.621 18.599C119.657 18.599 118.858 18.2686 118.211 17.6207C117.564 16.9728 117.247 16.1724 117.247 15.2322C117.247 14.2921 117.564 13.5044 118.211 12.8564C118.845 12.2085 119.657 11.8782 120.621 11.8782C121.584 11.8782 122.383 12.2085 123.03 12.8564C123.677 13.5044 123.994 14.3048 123.994 15.2322C123.981 16.1724 123.664 16.9728 123.03 17.6207Z"
          fill={fill}
        />
        <path
          d="M140.886 11.9798C140.315 11.0016 139.529 10.2393 138.527 9.69299C137.525 9.13399 136.422 8.86719 135.217 8.86719C133.379 8.86719 131.844 9.47701 130.601 10.6967C129.359 11.9163 128.737 13.4282 128.737 15.2322C128.737 16.4265 129.016 17.5191 129.587 18.4973C130.145 19.4756 130.931 20.2379 131.92 20.7969C132.909 21.3559 134.013 21.6227 135.217 21.6227C136.435 21.6227 137.538 21.3432 138.527 20.7969C139.516 20.2379 140.303 19.4756 140.873 18.4973C141.444 17.5191 141.736 16.4265 141.736 15.2322C141.736 14.038 141.457 12.9581 140.886 11.9798ZM137.64 17.6207C136.993 18.2687 136.181 18.599 135.217 18.599C134.254 18.599 133.455 18.2687 132.821 17.6334C132.187 16.9855 131.87 16.1851 131.87 15.2322C131.87 14.2921 132.187 13.5044 132.821 12.8565C133.455 12.2085 134.254 11.8782 135.217 11.8782C136.181 11.8782 136.993 12.2085 137.64 12.8565C138.286 13.5044 138.616 14.3048 138.616 15.2322C138.616 16.1724 138.286 16.9728 137.64 17.6207Z"
          fill={fill}
        />
        <path
          d="M149.788 9.07045C149.268 9.1975 148.849 9.37536 148.52 9.61675C148.177 9.85814 147.911 10.1122 147.708 10.379C147.505 10.6458 147.315 10.9635 147.137 11.3319V9.12127H144.297V21.3559H147.404V15.6261C147.404 14.5462 147.721 13.695 148.368 13.0851C149.014 12.4753 150.08 12.1704 151.576 12.1704V8.87988C150.904 8.87988 150.308 8.94341 149.788 9.07045Z"
          fill={fill}
        />
        <path
          d="M159.274 18.5736C158.183 18.5736 157.638 18.0273 157.638 16.9347V12.018H160.834V9.12133H157.638V5.70377H154.861L154.658 7.99061C154.62 8.39716 154.506 8.67666 154.328 8.86723C154.151 9.0451 153.859 9.13403 153.466 9.13403H152.515V12.0307H154.518V17.2142C154.518 18.6498 154.899 19.7297 155.66 20.4793C156.42 21.2289 157.435 21.5973 158.703 21.5973C159.477 21.5973 160.276 21.5084 161.075 21.3432V18.3958C160.517 18.5101 159.908 18.5736 159.274 18.5736Z"
          fill={fill}
        />
        <path
          d="M21.035 16.9349C22.4807 16.2615 23.66 15.2452 24.5604 13.8985C25.4608 12.5518 25.9173 10.9129 25.9173 8.99444C25.9173 7.86373 25.7397 6.80924 25.3974 5.84368C25.055 4.87812 24.5984 4.06502 24.0278 3.39167C23.4571 2.73103 22.7977 2.15932 22.0495 1.68925C21.3013 1.21917 20.5151 0.876146 19.7034 0.647462C18.8918 0.418777 18.0676 0.317139 17.2306 0.317139H0.554688L3.72501 4.14125C5.37358 4.10314 8.23956 4.09043 11.0041 4.33182C15.2143 4.68755 17.4715 5.14492 18.2071 6.66949C18.2071 6.66949 15.2904 6.08507 14.2505 6.41539C14.2505 6.41539 15.2904 6.6949 15.6708 7.27931C16.0639 7.86373 16.4317 8.20675 16.7994 8.10512C17.1672 8.00348 17.3067 7.69857 17.2179 7.54611C17.1165 7.39365 17.015 7.29202 17.015 7.29202C17.015 7.29202 16.9516 7.13956 17.1672 7.11415C17.3828 7.08874 19.2342 6.80924 20.8701 7.17767C22.506 7.54611 22.2651 8.6006 22.2651 8.76576C22.2651 8.91822 21.6944 11.2559 20.8574 12.0817C20.8574 12.0817 20.6926 10.5571 19.7922 10.5063C18.8918 10.4555 17.6237 10.9129 16.3175 11.9038C15.2904 12.6788 14.5802 13.8476 12.8429 15.1435L23.2162 27.6831H29.8358L21.035 16.9349Z"
          fill="#E50E00"
        />
        <path d="M88.715 21.3052H85.5574V4.7637H88.715V21.3052Z" fill={fill} />
      </g>
      <defs>
        <clipPath id="clip0_566_255">
          <rect width="162" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <svg
      width="369"
      height="63"
      viewBox="0 0 369 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M102.585 33.1058C104.593 32.1781 106.252 30.7577 107.503 28.9023C108.754 27.047 109.395 24.7569 109.395 22.0898C109.395 20.5244 109.162 19.0749 108.667 17.7124C108.201 16.3789 107.561 15.2484 106.746 14.3207C105.961 13.393 105.029 12.6103 103.982 11.9436C102.934 11.3058 101.857 10.813 100.722 10.4941C99.5872 10.1752 98.4231 10.0303 97.259 10.0303H82.708V48.0063H90.0417V34.2364H95.0182L105.204 48.0063H113.527L102.585 33.1058ZM100.548 26.1483C99.5581 27.221 98.0739 27.7718 96.124 27.7718H90.0708V16.4949H96.124C98.0739 16.4949 99.5581 17.0167 100.548 18.0893C101.537 19.1329 102.061 20.4664 102.061 22.0898C102.061 23.7132 101.537 25.0757 100.548 26.1483Z"
        fill="#E50E00"
      />
      <path
        d="M142.746 33.1637C142.746 31.3084 142.425 29.5691 141.814 27.9167C141.203 26.2643 140.33 24.8148 139.195 23.5683C138.06 22.3217 136.634 21.3361 134.888 20.6114C133.142 19.8866 131.25 19.5098 129.155 19.5098C126.39 19.5098 123.829 20.1475 121.559 21.3941C119.26 22.6406 117.485 24.409 116.175 26.6122C114.895 28.8443 114.226 31.3084 114.226 34.0334C114.226 38.2079 115.652 41.6866 118.474 44.4406C121.297 47.2236 124.848 48.6151 129.126 48.6151C131.396 48.6151 133.462 48.2672 135.295 47.5425C137.158 46.8467 138.933 45.7161 140.65 44.2087L136.518 39.6574C135.325 40.585 134.16 41.2228 133.084 41.5996C132.007 41.9765 130.756 42.1504 129.33 42.1504C127.554 42.1504 125.954 41.6576 124.557 40.701C123.16 39.7153 122.229 38.3818 121.705 36.6715H142.222C142.571 35.5699 142.746 34.3813 142.746 33.1637ZM121.705 31.3954C122.2 29.627 123.131 28.2066 124.469 27.163C125.808 26.1193 127.351 25.5975 129.126 25.5975C131.076 25.5975 132.618 26.1483 133.753 27.2499C134.888 28.3515 135.557 29.743 135.761 31.3954H121.705Z"
        fill="#E50E00"
      />
      <path
        d="M169.083 8.63892V23.2785C167.977 22.09 166.725 21.1333 165.328 20.4956C163.932 19.8288 162.244 19.5099 160.206 19.5099C157.704 19.5099 155.405 20.1477 153.309 21.3942C151.214 22.6408 149.526 24.4091 148.275 26.6413C147.023 28.8735 146.412 31.3666 146.412 34.0916C146.412 36.7876 147.023 39.2517 148.275 41.5128C149.526 43.745 151.214 45.5134 153.309 46.7599C155.405 48.0065 157.733 48.6442 160.206 48.6442C162.476 48.6442 164.339 48.2674 165.794 47.5136C167.249 46.7599 168.588 45.6583 169.752 44.2668V48.0644H176.183V8.63892H169.083ZM166.813 39.4836C165.328 40.962 163.495 41.6868 161.283 41.6868C159.071 41.6868 157.238 40.933 155.754 39.4836C154.299 38.0051 153.542 36.2078 153.542 34.0626C153.542 31.9174 154.27 30.12 155.754 28.6126C157.238 27.1051 159.071 26.3514 161.283 26.3514C163.495 26.3514 165.328 27.1051 166.813 28.6126C168.268 30.12 169.024 31.9464 169.024 34.0626C169.024 36.2078 168.268 38.0051 166.813 39.4836Z"
        fill="#E50E00"
      />
      <path
        d="M195.071 20.0607V47.9774H202.201V20.0607H195.071ZM201.561 9.16067C200.746 8.34897 199.757 7.94312 198.592 7.94312C197.428 7.94312 196.439 8.34897 195.653 9.16067C194.867 9.97237 194.46 10.958 194.46 12.0886C194.46 13.2482 194.867 14.2338 195.653 15.0455C196.439 15.8572 197.428 16.2631 198.592 16.2631C199.757 16.2631 200.746 15.8572 201.561 15.0455C202.376 14.2338 202.754 13.2482 202.754 12.0886C202.754 10.958 202.376 9.97237 201.561 9.16067Z"
        fill={fill}
      />
      <path
        d="M250.19 22.4379C248.328 20.4666 245.796 19.481 242.595 19.481C240.499 19.481 238.666 19.9448 237.123 20.8724C235.552 21.8001 234.359 22.9307 233.515 24.2642C232.409 22.6408 231.158 21.4522 229.848 20.6695C228.509 19.8868 226.821 19.5099 224.813 19.5099C221.379 19.5099 218.731 21.1044 216.927 24.2642V20.0897H210.204V48.0065H217.392V33.6278C217.392 31.4246 217.858 29.6562 218.818 28.3517C219.779 27.0472 221.117 26.3804 222.893 26.3804C224.639 26.3804 225.919 26.9312 226.763 28.0618C227.607 29.1924 228.044 30.9318 228.044 33.3089V48.0065H235.203V32.7001C235.377 30.7288 235.93 29.1924 236.891 28.0618C237.851 26.9312 239.161 26.3804 240.79 26.3804C242.478 26.3804 243.759 26.9312 244.603 28.0618C245.447 29.1924 245.854 30.9318 245.854 33.3089V48.0065H253.013V31.7435C252.984 27.511 252.053 24.4091 250.19 22.4379Z"
        fill={fill}
      />
      <path
        d="M288.517 26.6411C287.266 24.409 285.607 22.6406 283.512 21.3941C281.417 20.1185 279.117 19.5098 276.615 19.5098C274.316 19.5098 272.453 19.8866 270.969 20.6693C269.485 21.4231 268.146 22.5247 266.982 23.9161V20.0896H260.638V59.1382H267.768V44.8175C268.874 46.035 270.096 46.9627 271.493 47.6294C272.89 48.2962 274.578 48.6151 276.644 48.6151C279.147 48.6151 281.446 47.9773 283.57 46.7308C285.665 45.4552 287.353 43.7159 288.576 41.4837C289.798 39.2515 290.438 36.7874 290.438 34.0914C290.38 31.3664 289.769 28.8733 288.517 26.6411ZM281.067 39.4834C279.612 40.9619 277.75 41.7156 275.538 41.7156C273.326 41.7156 271.493 40.9619 270.009 39.4834C268.524 38.005 267.797 36.1786 267.797 34.0334C267.797 31.8882 268.524 30.0909 270.009 28.6124C271.464 27.134 273.326 26.3802 275.538 26.3802C277.75 26.3802 279.583 27.134 281.067 28.6124C282.551 30.0909 283.279 31.9172 283.279 34.0334C283.25 36.1786 282.522 38.005 281.067 39.4834Z"
        fill={fill}
      />
      <path
        d="M322.043 26.6122C320.733 24.38 318.929 22.6406 316.63 21.3941C314.331 20.1185 311.799 19.5098 309.034 19.5098C304.814 19.5098 301.293 20.9013 298.441 23.6842C295.589 26.4672 294.163 29.9169 294.163 34.0334C294.163 36.7584 294.803 39.2515 296.113 41.4837C297.393 43.7159 299.198 45.4552 301.468 46.7308C303.738 48.0063 306.27 48.6151 309.034 48.6151C311.828 48.6151 314.36 47.9773 316.63 46.7308C318.9 45.4552 320.704 43.7159 322.014 41.4837C323.323 39.2515 323.993 36.7584 323.993 34.0334C323.993 31.3084 323.352 28.8443 322.043 26.6122ZM314.593 39.4834C313.109 40.9619 311.246 41.7156 309.034 41.7156C306.822 41.7156 304.989 40.9619 303.534 39.5124C302.079 38.034 301.351 36.2076 301.351 34.0334C301.351 31.8882 302.079 30.0909 303.534 28.6124C304.989 27.134 306.822 26.3802 309.034 26.3802C311.246 26.3802 313.109 27.134 314.593 28.6124C316.077 30.0909 316.834 31.9172 316.834 34.0334C316.834 36.1786 316.077 38.005 314.593 39.4834Z"
        fill={fill}
      />
      <path
        d="M342.472 19.9737C341.279 20.2636 340.319 20.6694 339.562 21.2202C338.776 21.771 338.165 22.3508 337.7 22.9596C337.234 23.5683 336.797 24.2931 336.39 25.1338V20.0896H329.871V48.0064H337.001V34.9322C337.001 32.4681 337.729 30.5258 339.213 29.1343C340.697 27.7428 343.142 27.0471 346.576 27.0471V19.5388C345.033 19.5388 343.665 19.6838 342.472 19.9737Z"
        fill={fill}
      />
      <path
        d="M364.242 41.6577C361.739 41.6577 360.488 40.4112 360.488 37.9181V26.6992H367.821V20.0896H360.488V12.2915H354.114L353.649 17.5096C353.561 18.4372 353.299 19.075 352.892 19.5098C352.485 19.9157 351.815 20.1186 350.913 20.1186H348.73V26.7282H353.329V38.5559C353.329 41.8316 354.202 44.2957 355.948 46.0061C357.694 47.7165 360.022 48.5572 362.932 48.5572C364.707 48.5572 366.541 48.3543 368.374 47.9774V41.2519C367.094 41.5128 365.697 41.6577 364.242 41.6577Z"
        fill={fill}
      />
      <path
        d="M46.9998 37.9181C50.3174 36.3816 53.0239 34.0625 55.0901 30.9896C57.1564 27.9167 58.204 24.1771 58.204 19.7997C58.204 17.2197 57.7966 14.8136 57.0108 12.6104C56.2251 10.4072 55.1774 8.55186 53.8678 7.01542C52.5582 5.50797 51.0449 4.20346 49.3279 3.13085C47.6109 2.05824 45.8066 1.27553 43.944 0.753725C42.0815 0.231917 40.1899 0 38.2691 0H0L7.2755 8.72579C11.0588 8.63883 17.6358 8.60984 23.9801 9.16063C33.6419 9.97234 38.8221 11.016 40.51 14.4947C40.51 14.4947 33.8165 13.1612 31.4302 13.9149C31.4302 13.9149 33.8165 14.5527 34.6896 15.8862C35.5918 17.2197 36.4357 18.0024 37.2797 17.7705C38.1236 17.5386 38.4438 16.8428 38.24 16.4949C38.0072 16.1471 37.7744 15.9152 37.7744 15.9152C37.7744 15.9152 37.6289 15.5673 38.1236 15.5093C38.6184 15.4513 42.8673 14.8136 46.6214 15.6542C50.3756 16.4949 49.8226 18.9011 49.8226 19.2779C49.8226 19.6258 48.5131 24.9598 46.5923 26.8441C46.5923 26.8441 46.214 23.3654 44.1478 23.2495C42.0815 23.1335 39.1713 24.1771 36.1738 26.4383C33.8165 28.2066 32.1868 30.8737 28.1999 33.8306L52.0053 62.4431H67.1965L46.9998 37.9181Z"
        fill="#E50E00"
      />
    </svg>
  );
};

export { Logo };
