const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <div
      style={{
        width: `${percentage}%`,
      }}
    ></div>
  );
};

export default ProgressBar;
