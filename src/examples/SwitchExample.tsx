import { useState } from 'react';
import { NJSwitch } from '../components/NJSwitch';

const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <h1 className="text mb-3 text-lg text-left">Switch:</h1>
      <NJSwitch enabled={enabled} setEnabled={setEnabled} />
    </>
  );
};

export default SwitchExample;
