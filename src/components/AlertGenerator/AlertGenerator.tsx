
import { Alert, AlertHeading } from "react-bootstrap"

type AlertGeneratorProps = {
    message: string;
}

const AlertGenerator = ({message}:AlertGeneratorProps) => {
  return (
    <>
        <div className="d-flex justify-content-center mt-3 w-100">
        <Alert variant="success" style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <AlertHeading>Mensaje recibido</AlertHeading>
            <p>
                {message}
            </p>
        </Alert>
        </div>
        
    </>
  )
}

export default AlertGenerator