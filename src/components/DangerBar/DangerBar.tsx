
type DangerBarProps = {
  value: number;
}

const DangerBar = ({value}:DangerBarProps) => {

  const getVariant = (value:number) => {
      if (value < 30) {
          return 'success';
      } else if (value < 60) {
          return 'warning';
      } else {
          return 'danger';
      }
  }
  return (
    <>
    <div className="d-flex justify-content-center mt-5">
      <div className="progress w-50">
        <div className={`progress-bar bg-${getVariant(value)}`} role="progressbar" style={{ width: `${value}%`}} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
    </div>
    </>
  )
}

export default DangerBar