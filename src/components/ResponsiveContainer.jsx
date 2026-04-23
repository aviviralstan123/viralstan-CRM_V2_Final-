const ResponsiveContainer = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full
        max-w-[1400px]
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        xl:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;