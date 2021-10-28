import { useState } from 'react';

function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);
  function handleChange(e) {
    const et = e.target;
    const ett = et.type;
    let etv = et.value;
    const etn = et.name;
    const etf = et.files;
    const tn = ett === 'number';
    const tf = ett === 'file';
    if (tn) {
      etv = parseInt(etv);
    }
    if (tf) {
      [etv] = etf;
    }
    setInputs({
      ...inputs,
      [etn]: etv,
    });
  }
  function resetForm() {
    setInputs(initial);
  }
  function clearForm() {
    function ham(i) {
      const key = i;
      return [key, ''];
    }
    const oei = Object.entries(inputs);
    const oe = oei.map(ham);
    const ofe = Object.fromEntries(oe);
    const blankState = ofe;
    // const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    setInputs(blankState);
  }
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}

export default useForm;
