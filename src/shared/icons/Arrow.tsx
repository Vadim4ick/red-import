const Arrow = (props: ReactTagProps<"svg">) => {
  return (
    <svg
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.198802 4.00008L4.0399 -8.3935e-08L5 0.999843L1.63896 4.5L5 8.00016L4.0399 9L0.198802 4.99992C0.0715092 4.86732 3.77011e-07 4.6875 3.93402e-07 4.5C4.09794e-07 4.3125 0.0715093 4.13268 0.198802 4.00008Z"
      />
    </svg>
  );
};

export { Arrow };
