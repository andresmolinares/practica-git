export function Buscador({ valorInput, onInputChange }) {
  return (
    <div className='row d-flex justify-content-end'>
      <div className='col-6'>
        <div className='mb-3'>
          <input
            value={valorInput}
            onChange={onInputChange}
            type='text'
            className='form-control'
            placeholder='Buscar emoji...'
          />
        </div>
      </div>
    </div>
  );
}
