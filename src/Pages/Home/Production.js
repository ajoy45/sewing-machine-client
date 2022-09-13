
import './Production.css';

import { useQuery } from 'react-query';
import ProductionDetails from './ProductionDetails';
const Production = () => {
    
    const { isLoading, error, data:services } = useQuery('repoData', () =>
    fetch('data.json')
    .then(res =>
      res.json()
    )
    
  )
  if(isLoading){
    return "loading"
  }
  console.log(services)
    return (
        <div>
            <div className='text-center'>
            <h1 className='text-primary font-bold text-4xl py-5'>This is production</h1>
            <p className='text-secondary text-2xl py-3'>The manufacture of industrial equipment requires a vast knowledge base of<br></br> processes and understanding of fundamental concepts.</p>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                services.map(service=><ProductionDetails
                keys={service.id}
                service={service}
                ></ProductionDetails>)
            }
            </div>
        </div>

    );
};

export default Production;