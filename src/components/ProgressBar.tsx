const ProgressBar = ({ percentage = 0 }: { percentage: number }) => {
  return (
    <div
      className="py-1 bg-green-500"
      style={{
        width: `${percentage}%`,
      }}
    ></div>
  );
};

export default ProgressBar;
